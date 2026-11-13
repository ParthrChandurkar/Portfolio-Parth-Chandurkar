import { mkdir, writeFile } from 'node:fs/promises';

const author = 'ParthrChandurkar';
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'parth-portfolio' };
async function github(path) {
  const response = await fetch(`https://api.github.com/${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub returned ${response.status} for ${path}`);
  return response.json();
}

// Search discovers contributions; individual PR records establish merge status.
const query = `is:pr author:${author} org:meshery org:layer5io org:layer5`;
const found = [];
for (let page = 1; ; page += 1) {
  const result = await github(`search/issues?q=${encodeURIComponent(query)}&per_page=100&page=${page}`);
  if (result.incomplete_results) throw new Error('GitHub returned incomplete search results; snapshot retained.');
  if (result.total_count > 1000) throw new Error('Search exceeds GitHub limit; narrow the query before refreshing.');
  found.push(...result.items);
  if (found.length >= result.total_count) break;
}
const records = [];
for (const item of found) {
  const path = new URL(item.pull_request.url).pathname.slice(1);
  const pr = await github(path);
  if (pr.user.login.toLowerCase() !== author.toLowerCase()) throw new Error('Unexpected PR author');
  if (!pr.merged_at && pr.state !== 'open') continue;
  records.push({
    id: pr.id, number: pr.number, title: pr.title, repository: pr.base.repo.full_name,
    url: pr.html_url, status: pr.merged_at ? 'merged' : 'open', draft: pr.draft,
    createdAt: pr.created_at, updatedAt: pr.updated_at, mergedAt: pr.merged_at,
    files: pr.changed_files,
  });
}
records.sort((a, b) => new Date(b.mergedAt || b.createdAt) - new Date(a.mergedAt || a.createdAt));
const directory = new URL('../src/data/', import.meta.url);
await mkdir(directory, { recursive: true });
await writeFile(new URL('contributions.json', directory), `${JSON.stringify({ author, verifiedAt: new Date().toISOString(), records }, null, 2)}\n`);
console.log(`Verified ${records.length} merged/open contributions for ${author}.`);

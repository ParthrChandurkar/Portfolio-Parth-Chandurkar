import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, GitMerge, GitPullRequest, Search, GitBranch, Check, Code2, BookOpen } from 'lucide-react';
import snapshot from './data/contributions.json';
import './contributions.css';

const stories = {
  'meshery/meshery-operator#931': {
    title: 'Keeping the operator toolchain current', kind: 'Engineering', icon: Code2,
    summary: 'Updated the Go version in the module and Docker builder, with related linting and modernization changes for Meshery Operator.',
    tags: ['Go', 'Docker', 'CI tooling'],
  },
  'meshery/meshery-adapter-library#214': {
    title: 'Updating the adapter library build tools', kind: 'Engineering', icon: Code2,
    summary: 'Proposed a Go toolchain upgrade and a matching golangci-lint update in CI for the Meshery Adapter Library.',
    tags: ['Go', 'GitHub Actions', 'Linting'],
  },
  'layer5io/docs#1378': {
    title: 'Making the public event feed easier to integrate', kind: 'Documentation', icon: BookOpen,
    summary: 'Documented the public event-feed API, including pagination, filters, response fields, privacy, caching, rate limits, and the activity-sharing preference.',
    tags: ['API reference', 'Privacy', 'Hugo'],
  },
};
const date = value => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(value));
const allPrsUrl = 'https://github.com/pulls?q=' + encodeURIComponent('is:pr author:ParthrChandurkar org:meshery org:layer5io');

export default function Contributions() {
  const [status, setStatus] = useState('all');
  const [organization, setOrganization] = useState('all');
  const [query, setQuery] = useState('');
  useEffect(() => {
    document.title = 'Open Source | Parth Rajesh Chandurkar';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Parth Chandurkar\'s selected merged and open pull requests across Meshery and Layer5: engineering and API documentation.');
  }, []);
  const counts = {
    all: snapshot.records.length,
    merged: snapshot.records.filter(pr => pr.status === 'merged').length,
    open: snapshot.records.filter(pr => pr.status === 'open').length,
  };
  const repositories = new Set(snapshot.records.map(pr => pr.repository)).size;
  const visible = snapshot.records.filter(pr => {
    const story = stories[`${pr.repository}#${pr.number}`];
    return (status === 'all' || pr.status === status)
      && (organization === 'all' || pr.repository.startsWith(`${organization}/`))
      && `${pr.title} ${pr.repository} ${pr.number} ${story?.title || ''} ${story?.summary || ''} ${story?.tags.join(' ') || ''}`.toLowerCase().includes(query.trim().toLowerCase());
  });
  const reset = () => { setStatus('all'); setOrganization('all'); setQuery(''); };
  return (
    <div className="oss-page">
      <a className="oss-skip" href="#contribution-list">Skip to contributions</a>
      <header className="oss-header">
        <a href="/" className="brand"><span className="brand-mark">PC</span><span>ParthChandurkar</span></a>
        <a href="/" className="oss-back"><ArrowLeft size={16} /> Portfolio</a>
      </header>
      <main className="oss-main">
        <section className="oss-intro" aria-labelledby="oss-title">
          <p className="oss-eyebrow"><GitBranch size={16} /> BUILDING IN THE OPEN</p>
          <h1 id="oss-title">Open-source<br /><span>contributions.</span></h1>
          <p className="oss-lead">Parth Rajesh Chandurkar</p>
          <p className="oss-description">Contributing to the cloud-native ecosystem, one pull request at a time. Engineering updates and clearer documentation across Meshery and Layer5.</p>
          <div className="oss-community-links">
            <a href="https://github.com/meshery" target="_blank" rel="noreferrer"><img src="/opensource-meshery.png" alt="" width="36" height="36" /> Meshery <ArrowUpRight size={16} /></a>
            <a href="https://github.com/layer5io" target="_blank" rel="noreferrer"><img src="/opensource-layer5.png" alt="" width="36" height="36" /> Layer5 <ArrowUpRight size={16} /></a>
          </div>
        </section>
        <dl className="oss-metrics">
          <div><dt><GitPullRequest size={18} /> Pull requests</dt><dd>{counts.all.toString().padStart(2, '0')}</dd></div>
          <div className="oss-merged"><dt><GitMerge size={18} /> Merged</dt><dd>{counts.merged.toString().padStart(2, '0')}</dd></div>
          <div className="oss-open"><dt><GitPullRequest size={18} /> Open</dt><dd>{counts.open.toString().padStart(2, '0')}</dd></div>
          <div><dt><Code2 size={18} /> Repositories</dt><dd>{repositories.toString().padStart(2, '0')}</dd></div>
        </dl>
        <section id="contribution-list" className="oss-work" aria-labelledby="oss-work-title">
          <div className="oss-section-heading"><div><p className="oss-eyebrow">THE CONTRIBUTION LOG</p><h2 id="oss-work-title">Small changes. Shared progress.</h2></div><a href={allPrsUrl} target="_blank" rel="noreferrer">All activity on GitHub <ArrowUpRight size={16} /></a></div>
          <div className="oss-toolbar">
            <div className="oss-status-filters" role="group" aria-label="Pull request status">
              {['all', 'merged', 'open'].map(value => <button key={value} type="button" aria-pressed={status === value} onClick={() => setStatus(value)}>{value === 'all' ? 'All' : value === 'merged' ? 'Merged' : 'Open'} <span>{counts[value]}</span></button>)}
            </div>
            <label className="oss-search"><Search size={18} /><span className="sr-only">Search contributions</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search contributions" /></label>
            <label className="oss-org"><span className="sr-only">Organization</span><select aria-label="Organization" value={organization} onChange={event => setOrganization(event.target.value)}><option value="all">All organizations</option><option value="meshery">Meshery</option><option value="layer5io">Layer5</option></select></label>
          </div>
          <div className="oss-result-line"><span aria-live="polite">{visible.length} contribution{visible.length === 1 ? '' : 's'}</span><span><Check size={14} /> Verified {date(snapshot.verifiedAt)}</span></div>
          <div className="oss-grid">
            {visible.map(pr => {
              const story = stories[`${pr.repository}#${pr.number}`] || { title: pr.title, summary: pr.title, kind: 'Contribution', tags: [] };
              const Icon = story.icon || GitPullRequest;
              const StatusIcon = pr.status === 'merged' ? GitMerge : GitPullRequest;
              return <article className={`oss-pr oss-pr-${pr.status}`} key={pr.id}>
                <div className="oss-pr-date"><time dateTime={pr.mergedAt || pr.createdAt}>{date(pr.mergedAt || pr.createdAt)}</time><span>{pr.mergedAt ? 'Merged' : 'Opened'}</span><a href={pr.url} target="_blank" rel="noreferrer">PR #{pr.number} <ArrowUpRight size={15} /></a></div>
                <div className="oss-pr-content">
                <div className="oss-pr-top"><span className={`oss-badge oss-${pr.status}`}><StatusIcon size={15} />{pr.draft ? 'Draft' : pr.status === 'merged' ? 'Merged' : 'Open'}</span><span className="oss-kind"><Icon size={15} /> {story.kind}</span></div>
                <a className="oss-repository" href={`https://github.com/${pr.repository}`} target="_blank" rel="noreferrer">{pr.repository}</a>
                <h3><a href={pr.url} target="_blank" rel="noreferrer">{story.title}<ArrowUpRight size={20} /></a></h3>
                <p>{story.summary}</p>
                <ul className="oss-tags" aria-label="Contribution topics">{story.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>;
            })}
          </div>
          {!visible.length && <div className="oss-empty"><Search size={28} /><h3>No matching contributions</h3><button type="button" onClick={reset}>Reset filters</button></div>}
          <p className="oss-footnote">Selected merged and open pull requests authored by @{snapshot.author}, newest first. Statuses reflect the verification date above; GitHub has the latest review activity. Introduction and closed, unmerged PRs are excluded.</p>
        </section>
        <section className="oss-closing"><GitBranch size={30} /><div><h2>Learning by contributing.</h2><p>From maintaining build tooling to documenting APIs, every contribution is a chance to understand how shared systems work.</p></div><a href="https://github.com/ParthrChandurkar" target="_blank" rel="noreferrer">Follow my work <ArrowUpRight size={17} /></a></section>
      </main>
      <footer className="oss-footer"><span>Parth Rajesh Chandurkar</span><a href="/#contact">Get in touch <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}

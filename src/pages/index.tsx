import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--secondary" style={{ textShadow: 'rgba(0, 0, 0, 0.25) 0 5px 10px'}}>
            {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ color: '#ffffff'}}>
            {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            style={{ color: '#ffffff', backgroundColor: 'var(--ifm-color-primary-darker)'}}
            to="/docs/getting-started/installation">
            Getting started - 5min ⏱️
          </Link>
        </div>
        <img
            className={clsx('margin-top--lg shadow--tl', styles.gif)}
            src="https://raw.githubusercontent.com/Julien-cpsn/ATAC/main/gifs/demo.gif"
            alt="Demo gif"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Homepage of the ATAC website"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

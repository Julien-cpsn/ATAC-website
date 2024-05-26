import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Versions() {
  const {siteConfig} = useDocusaurusContext();

  const items = require('../../../versions.json').map(
      (version: string) =>
          <li key={version}>
            <a href={`${siteConfig.url}/docs/${version}/intro`}>{version}</a>
          </li>
  )

  return (
    <ul>
      {items}
    </ul>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Versions`}
      description="All doc versions of the ATAC website"
    >
      <main>
        <Versions />
      </main>
    </Layout>
  );
}

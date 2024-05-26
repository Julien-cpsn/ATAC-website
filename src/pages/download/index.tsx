import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Parser from 'rss-parser'
import React, {useEffect, useState} from "react";
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';

type GithubReleases = {
  feedUrl: string,
  items: GithubReleases[],
  lastBuildDate: string,
  link: string,
  title: string
}

type GithubRelease = {
  title: string,
  link: string,
  pubDate: string,
  author: string,
  content: string,
  contentSnippet: string,
  id: string,
  isoDate: string,
}

const architectures = [
  'atac-VERSION-aarch64-apple-darwin.tar.gz',
  'atac-VERSION-aarch64-pc-windows-msvc.tar.gz',
  'atac-VERSION-aarch64-pc-windows-msvc.zip',
  'atac-VERSION-aarch64-unknown-linux-gnu.tar.gz',
  'atac-VERSION-aarch64-unknown-linux-musl.tar.gz',
  'atac-VERSION-universal-apple-darwin.tar.gz',
  'atac-VERSION-x86_64-apple-darwin.tar.gz',
  'atac-VERSION-x86_64-pc-windows-msvc.tar.gz',
  'atac-VERSION-x86_64-pc-windows-msvc.zip',
  'atac-VERSION-x86_64-unknown-freebsd.tar.gz',
  'atac-VERSION-x86_64-unknown-linux-gnu.tar.gz',
  'atac-VERSION-x86_64-unknown-linux-musl.tar.gz',
]

function VersionLinks() {
  const [versionLinks, setVersionLinks] = useState([]);

  useEffect(() => {
    let parser = new Parser<GithubReleases, GithubRelease>()

    async function fetchVersions() {
      let links = []

      const CORS_PROXY = "https://corsproxy.io/?"

      let feed = await parser.parseURL(CORS_PROXY + "https://github.com/Julien-cpsn/ATAC/releases.atom")

      for (const item of feed.items) {
        let changelog = item.content //.replace('https://private-user-images.githubusercontent.com/', 'https://github-production-user-asset-6210df.s3.amazonaws.com/')

        let regex = new RegExp(/https:\/\/private-user-images\.githubusercontent\.com\/(?<folder>\d{8})\/\d{9}-(?<asset>[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}).png\?jwt=[a-zA-Z0-9\_\.]*/, 'g')

        const matches = regex.exec(changelog)

        if (matches !== null) {
          for (let i = 0; i < matches.length; i += 3) {
            const nicely_formed_url = `https://github.com/Julien-cpsn/ATAC/assets/${matches[i+1]}/${matches[i+2]}`
            // @ts-ignore
            changelog = changelog.replaceAll(matches[i], nicely_formed_url)

            console.log("from: ", matches[i], "to: ", nicely_formed_url)
          }
        }

        const artifact_links = []

        for (const architecture of architectures) {
          const architecture_with_version = architecture.replace('VERSION', item.title)
          let li = <li>
            <a href={`https://github.com/Julien-cpsn/ATAC/releases/download/${item.title}/${architecture_with_version}`}>
              {architecture_with_version}
            </a>
          </li>

          artifact_links.push(li)
        }

        const li = <div id={item.id} key={item.id}>
          <div className="margin-horiz--xl">
            <Heading as="h3">
              Version: <a href={item.link}>{item.title}</a>
            </Heading>
            <div>
              <Heading as="h3">Changelog:</Heading>
              <div className='margin-horiz--lg padding-horiz--lg padding-vert--md margin-bottom--md' style={{ background: 'rgb(50, 50, 50, 0.5)', borderRadius: '8px'}} dangerouslySetInnerHTML={{__html: changelog}}></div>
              <Heading as="h3">Artifacts:</Heading>
              <ul className="margin-left--lg margin-vert--xs">
                { artifact_links }
              </ul>
            </div>
          </div>
          <hr className="margin-top--lg" />
        </div>

        links.push(li);
      }

      return links
    }

    fetchVersions()
        .then(links => setVersionLinks(links))
  }, [])

  return (
    <div>
      {versionLinks}
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Download`}
      description="All doc versions of the ATAC website"
    >
      <main>
        <div className="margin--xl">
          <Heading as="h1" className="text--center margin-bottom--md">All releases</Heading>
          <div className="text--center margin-bottom--lg">
            First, please read the <Link to="/docs/getting-started/installation">Installation guide</Link> to the all the installation possibilities.
          </div>
          <VersionLinks />
        </div>
      </main>
    </Layout>
  );
}

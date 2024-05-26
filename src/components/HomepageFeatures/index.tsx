import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Postman-like UI',
    description: (
      <>
          ATAC was designed to ressemble your daily API client in order to have the most pleasant experience but without GUI drawbacks.
      </>
    ),
  },
  {
    title: 'Feature full',
    description: (
      <>
          ATAC implements almost all the features needed. From HTTP methods to pre and post-request scripts.
      </>
    ),
  },
  {
    title: 'Open-source and more',
    description: (
      <>
          The philosophy of ATAC is to be free, account-less, and offline for now and forever.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

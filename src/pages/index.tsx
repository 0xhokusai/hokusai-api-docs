
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

function Home() {
    const {
        siteConfig: {
            customFields: { description },
            tagline,
        },
    } = useDocusaurusContext();
    return (
        <Layout title={tagline} description={description as string}>
            <main>
                <div className={styles.home}>
                    <div className={styles.homeInner}>
                        <h1 className={styles.homeProjectTagline}>
                            <img
                                alt={translate({ id: 'hokusai.logo.alt', message: 'Hokusai Logo' })}
                                className={styles.onlyLogo}
                                src={useBaseUrl('/img/hokusai-only.png')}
                            />
                            <span
                                className={styles.titleText}
                                dangerouslySetInnerHTML={{
                                    __html: translate({
                                        id: 'homepage.title',
                                        message: 'Fast and Easy for NFT',
                                    }),
                                }}
                            />
                        </h1>
                        <div className={styles.indexCtas}>
                            <Link className="button button--primary" to="/get-started">
                                <Translate id="hokusai.button.get-started">Get Started</Translate>
                            </Link>
                            <Link className="button button--info" to="/api">
                                <Translate id="hokusai.button.api-document">API Document</Translate>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.announcement, styles.announcementDark)}>
                    <div className={styles.announcementInner}>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className="container margin-bottom--xl">
                        <div className="row">
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading, "text--center")}>
                                    <Translate id="hokusai.section.gas-free.title">No Gas fees, No cryptocurrency</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate id="hokusai.section.gas-free.description">
                                        Since Hokusai pays fees to the blockchain network on behalf of its users, you do not need to prepare GAS fees (network fees) for minting and transferring NFTs.
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading, "text--center")}>
                                    <Translate id="hokusai.section.no-engineer.title">No blockchain engineers</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate id="hokusai.section.no-engineer.description">
                                        If you want to develop NFT products, you need blockchain engineers. Hokusai API helps you integrate NFT into your own website without blockchain engineer, just as you can integrate payment functions using Stripe.
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading, "text--center")}>
                                    <Translate id="hokusai.section.support.title">Flexible Support System</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate id="hokusai.section.support.description">
                                        There are several blockchain engineers on the Hokusai team. If you have any questions about product development, please feel free to contact us.
                                    </Translate>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
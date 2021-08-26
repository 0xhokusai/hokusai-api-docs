
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
                                alt={translate({ message: 'Hokusai Logo' })}
                                className={styles.onlyLogo}
                                src={useBaseUrl('/img/hokusai-only.png')}
                            />
                            <span
                                className={styles.titleText}
                                dangerouslySetInnerHTML={{
                                    __html: translate({
                                        id: 'homepage.title',
                                        message:
                                            'NFTをより速く、簡単に。',
                                        description:
                                            '',
                                    }),
                                }}
                            />
                        </h1>
                        <div className={styles.indexCtas}>
                            <Link className="button button--primary" to="/getting-started">
                                <Translate>Hokusai API を始める</Translate>
                            </Link>
                            <Link className="button button--info" to="/api">
                                <Translate>API ドキュメント</Translate>
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
                                    <Translate>GAS代が無料</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        Hokusaiが事業者やアーティストの代わりにブロックチェーンのネットワークに手数料を支払うため、
                                        Hokusai APIの利用者は、NFTの発行や送信に必要なGAS代（ネットワーク手数料）を用意する必要がありません。
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading, "text--center")}>
                                    <Translate>Webエンジニアでも開発可能</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        通常、NFT関連のプロダクトを開発する場合はブロックチェーンエンジニアが必要です。
                                        Hokusai API を利用することで、Webエンジニアのみで NFT のプロダクトを開発できます。
                                        決済機能を Stripe を使って組み込むように、NFTを自社サイトに組み込むことが可能です。
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading, "text--center")}>
                                    <Translate>Hokusai チームによる手厚いサポート</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        Hokusaiチームには、ブロックチェーンエンジニアが複数在籍しています。
                                        そのため、NFTの前提知識に詰まった時やプロダクトのアーキテクチャに困った時には技術の相談をすることができます。
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
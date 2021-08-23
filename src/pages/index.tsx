
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
                            <Link className="button button--info" to="https://docusaurus.new">
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
                    <div className="container text--center margin-bottom--xl">
                        <div className="row">
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading)}>
                                    <Translate>GAS代が無料で利用できるため、暗号資産の管理をする必要がありません</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        Hokusai APIの利用者は、NFTの発行や送信に必要なGAS代（ネットワーク手数料）を用意する必要がありません。これは、Hokusaiが事業者やアーティストの代わりにブロックチェーンのネットワークに手数料を支払うためです。
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading)}>
                                    <Translate>WebエンジニアがいるだけでNFTのプロダクトを開発できます</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        通常、NFT関連のプロダクトを開発する場合はブロックチェーンエンジニアが必要です。しかし、Hokusai APIはブロックチェーン部分を取りまとめてWeb APIに落とし込んでいるため、Webエンジニアがブロックチェーン部分に直接触れる必要がなく、NFTのプロダクトを開発できます。
                                        決済機能をStripeを使って組み込むように、NFTを自社サイトに組み込むことが可能です。
                                    </Translate>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className={clsx(styles.featureHeading)}>
                                    <Translate>Hokusai チームによる手厚いサポート</Translate>
                                </h2>
                                <p className="padding-horiz--md">
                                    <Translate>
                                        Hokusaiチームには、ブロックチェーンエンジニアが複数います。そのため、NFTの前提知識に詰まった時やプロダクトのアーキテクチャに困った時には技術の相談をすることができます。
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
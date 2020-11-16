import Base from '../components/Base'
import Link from 'next/link'
import { formatNewsDate, NewsItem } from '../lib/news'
import { PullsListResponseData } from '@octokit/types'

interface MailinglistPost {
    url: string;
    title: string;
    author: string;
}

interface HomeProps {
    news: NewsItem[];
    mailinglist: MailinglistPost[];
    prs: PullsListResponseData
}

export default function Home({ news, mailinglist, prs }: HomeProps) {
    console.log(prs);
    return (
        <Base>
            <div className="col-lg-12 download-div">
                <div className="container">
                    <div className="col-lg-8" style={{ padding: '0px' }}>
                        <h2 style={{ color: '#FFF', 'fontWeight': 600 }}>Build massively scalable soft real-time systems</h2>
                    </div>
                    <div className="col-lg-4" style={{ 'paddingTop': '15px' }}>
                        <a href="/downloads" className="btn btn-success">Download Erlang/OTP</a>
                        <span className="tab-nbsp">
                            <a href="https://github.com/erlang/otp"><img src="/img/GitHub-Mark-32px.png" width="35" /></a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="sub-headlines">NEWS</h3>
                        <div className="inside-cols">
                            {news.map((n) => {
                                return (
                                    <>
                                        <div id={n.id}>
                                            <p>
                                                <img src="/img/news.png" width="16" />
                                                <a href={"/news/" + n.id}>{n.title}</a>
                                            </p>
                                            <p style={{ 'fontSize': '10px' }}>
                                                <em>
                                                    {formatNewsDate(n)}
                                                </em>
                                            </p>
                                            <div style={{ 'paddingLeft': '20px' }}>
                                                {n.lead}
                                            </div>
                                        </div>
                                        <br />
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="sub-headlines">GETTING STARTED<span className="glyphicon glyphicon-glass" /></h3>
                        <div className="inside-cols">
                            <h4>What is Erlang?</h4>
                            <div className="divider"><p /></div>
                            <div style={{ 'paddingLeft': '20px' }}>
                                <p>Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.</p>
                                <p style={{ textAlign: "right" }}><a className="btn btn-default" href="https://erlang.org/doc/getting_started/users_guide.html">Erlang quickstart</a></p>
                            </div>
                            <h4>What is OTP?</h4>
                            <div className="divider"><p /></div>
                            <div style={{ 'paddingLeft': '20px' }}>
                                <p>OTP is set of Erlang libraries and design principles providing middle-ware to develop these systems. It includes its own distributed database, applications to interface towards other languages, debugging and release handling tools.</p>
                                <p style={{ textAlign: "right" }}><a className="btn btn-default" href="/doc/design_principles/users_guide.html">Get started with OTP</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="divider"><p /></div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="sub-headlines">MAILINGLIST HEADLINES</h3>
                        <div className="inside-cols">
                            <ul className="mailing">
                                {
                                    mailinglist.slice(0,4).map((ml) => {
                                        return (
                                            <li><Link href={ml.url}><a target="_blank">{ml.title}</a></Link></li>
                                        )
                                    })
                                }
                            </ul>
                            <br />
                            <p>
                                <a href="/mailman/listinfo/erlang-questions">Listinfo &amp; subscription...</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="sub-headlines">LATEST PULL REQUESTS</h3>
                        <div className="inside-cols">
                            <ul className="pullrequests">
                                {
                                    prs.slice(0,4).map((pr) => {
                                        return (
                                            <li><Link href={pr.html_url}><a target="_blank">{pr.title}</a></Link></li>
                                        )
                                    })
                                }
                            </ul>
                            <br />
                            <p>
                                <a href="https://github.com/erlang/otp/pulls">View all PRs</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 text-center middle-splash">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    <a target="_blank" href="http://www.pragprog.com/book/jaerlang2/programming-erlang">
                                        <img className="img-thumbnail book-pics" src="/img/jaerlang2.jpg" height="120" width="91" alt="Book cover of Programming Erlang" />
                                    </a>
                                    <a target="_blank" href="http://oreilly.com/catalog/9780596518189">
                                        <img className="img-thumbnail book-pics" src="/img/francesco_erlang_programming.gif" height="120" alt="Book cover of Erlang Programming" />
                                    </a>
                                    <a target="_blank" href="http://learnyousomeerlang.com">
                                        <img className="img-thumbnail book-pics" src="/img/erlang_newsmall.png" height="120" alt="Book cover of Erlang Programming" />
                                    </a>
                                    <a target="_blank" href="http://www.manning.com/logan/">
                                        <img className="img-thumbnail book-pics" src="/img/logan_cover150.jpg" height="120" width="91" alt="Book cover of Erlang Programming" />
                                    </a>
                                    <a target="_blank" href="http://shop.oreilly.com/product/0636920025818.do">
                                        <img className="img-thumbnail book-pics" src="/img/lrg.jpg" height="120" width="91" alt="Book cover of Erlang Programming" />
                                    </a>
                                    <a target="_blank" href="http://shop.oreilly.com/product/0636920024149.do">
                                        <img className="img-thumbnail book-pics" src="/img/design_for_scalability_with_erlang_otp.jpg" height="120" alt="Book cover of Erlang Programming" />
                                    </a>
                                    <a href="https://erlangcentral.org/books">And More...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center"><h3 className="sub-headlines">WE <img src="/img/heart.png" /> <img src="/img/tools.png" /> ERLANG</h3></div>
                </div>
            </div>
        </Base>
    )
}

import type { GetStaticProps } from 'next'
import { getAllNews } from '../lib/news'
import axios from 'axios';
import { parse } from 'node-html-parser';
import { resolveHref } from 'next/dist/next-server/lib/router/router'
import { getPulls } from '../lib/github'

export const getStaticProps: GetStaticProps = async (context) => {
    const data = (await axios.get("http://erlang.org/pipermail/erlang-questions/")).data as string;
//    const index = [`<A href="2020-November/date.html">[ Date ]</a>`];
    const months = data.match(/<A href="(.*date\.html)"/g)?.map((href) => { return href.match(/<A href="(.*)\/date\.html"/)?.[1] }) as string[];
    let mails: MailinglistPost[] = [];

    for (const month_link of months) {
        const linkdata = (await axios.get("http://erlang.org/pipermail/erlang-questions/" + month_link + "/date.html")).data as string;
        for (const link of linkdata.match(/<LI>.*?<\/I>/gs)!) {
            // <LI><A HREF="100105.html">Virtual BEAM GMT meetup today @ 6pm GMT
            // </A><A NAME="100105">&nbsp;</A>
            // <I>Francesco Cesarini
            // </I>
            const match = link.match(/<A HREF="([^.]+.html)">(.*)/)!;
            mails.push({
                url: "http://erlang.org/pipermail/erlang-questions/" + month_link + "/" + match[1],
                title: match[2],
                author: link.match(/<I>(.*)/)?.[1]!
            });
        }
        if (mails.length > 3)
            break;
    }
    return { props: { news: getAllNews().slice(0, 3), mailinglist: mails, prs: await getPulls() } }
}
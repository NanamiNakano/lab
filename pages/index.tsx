import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '/styles/Home.module.css'
import {Footer} from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Nanami の Lab</title>
                <meta name="description" content="辣辣米的垃圾桶"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Nanami の Lab
                    </p>
                    <div>
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered By{' '}
                            <Image
                                src="/next.svg"
                                alt="Nextjs Logo"
                                className={styles.nextLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.bg}
                        src="/bg.jpg"
                        alt="Background Image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '75%', height: 'auto'}}
                    />
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Toolbox <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            杂物柜
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Achieve <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            垃圾桶
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Services <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            一点公共服务
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Links <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            有用的链接
                        </p>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    )
}

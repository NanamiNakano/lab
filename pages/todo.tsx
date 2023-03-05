import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '/styles/Home.module.css'
import {Footer} from "@/components/Footer";
import {Title} from "@mantine/core";

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

                <Title>这里还什么都没有呢</Title>
                <p>欣赏下面的图片吧</p>

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

            </main>
            <Footer/>
        </>
    )
}

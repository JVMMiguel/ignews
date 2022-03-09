import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
        <Head>
            <title>Posts | igNews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.content}>
                <a href="#">
                    <time>05 de Abril de 1995</time>
                    <strong>Nascimento do mais brabo</strong>
                    <p>João Vittor, o melhor</p>
                </a>
                <a href="#">
                    <time>05 de Abril de 1995</time>
                    <strong>Nascimento do mais brabo</strong>
                    <p>João Vittor, o melhor</p>
                </a>
                <a href="#">
                    <time>05 de Abril de 1995</time>
                    <strong>Nascimento do mais brabo</strong>
                    <p>João Vittor, o melhor</p>
                </a>
            </div>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100
    })

    console.log(response)

    return {
        props: {}
    }
}
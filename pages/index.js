import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const articles = [];
      const querySnapshot = await getDocs(collection(db, 'articles'));
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
        setArticles(articles);
      });
    })();
  }, []);
  // データベースからのデータが入る
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>ひとこと日記帳</title>
        <meta name="description" content="nanayuuki2022の一言日記帳です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>ひとこと日記帳</h1>

        <div className={styles.grid}>
          {articles.map((article)=> {
              return (
                <a key={article.id} href={`/article?id=${article.id}`} className={styles.card}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </a>
              )
            })}
        </div>
      </main>
    </div>
  )
}


import Head from 'next/head'
import Link from 'next/link'

export default function Home() { // 핫리로드 기능
  return (
    <div>
      <ul>
        <li>
          <Link  href='/'>
          <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/photos'>
          <a >Photos</a>
          </Link>
        </li>
      </ul>
      <Head>
        <title>My Blog</title>
        <meta keyword="My Blog powered by Next js" />
        <meta contens="My Blog powered by Next js" />
      </Head>
      <h1>Welcome to my blog</h1> 
    </div>
  )
}

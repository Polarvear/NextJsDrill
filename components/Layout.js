import Nav from './Nav'
import Head from 'next/head'

const Layout = ({children}) => { // 기본적으로 prop으로 넘겨받음
    return ( //title 공유 My blog 로

        <>
        <Head> 
              <title>My Blog</title>
              <meta keyword="My Blog powered by Next js" />
              <meta contens="My Blog powered by Next js" />
            </Head>
            <Nav />
            <div>
                {children} 
            </div>


        </>
    )
}

export default Layout
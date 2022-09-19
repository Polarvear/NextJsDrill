
import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) { // 핫리로드 기능

  console.log(posts);
  return (
    <div>
      <h1>Welcome to my blog</h1> 
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}

      </ul>
    </div>
  )
}


// export const getServerSideProps = async() => { // jsonplaceholder 사이트에서 posts 사용
//   const res = await fetch(`http://localhost:8080/api/posts`)
//   const posts = await res.json();

//   return { // 여기에서 return 된 값이 porps 로 전달됨 Home 함수로
//     props: {
//       posts
//     }
//   }

// }

export const getStaticProps = async() => { // jsonplaceholder 사이트에서 posts 사용 // 이렇게 사용하면 SSG 가 일어남
  const res = await fetch(`http://localhost:8080/api/posts`)
  const posts = await res.json();

  return { // 여기에서 return 된 값이 porps 로 전달됨 Home 함수로
    props: {
      posts
    },
    revalidate: 20
  }

}
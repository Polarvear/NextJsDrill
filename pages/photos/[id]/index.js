import Image from "next/image"
import Link from 'next/link'
//넘겨준 주소를 받아오기 위해서 주소의 id 값을 받아오기 위해서 userRouter훅을 사용할 거임
import { useRouter } from "next/router"


const index = ({photo}) => {
    const {title, url} = photo
    const router = useRouter();
    return (
        <div>
            <h2>Image{title}</h2>
            <img 
            src={url}
            width={500}
            height={500}

            />
   
    <Link href="/photos">
        <a>go bakc</a>
    </Link> 
        </div>
    )
}
export const getStaticProps = async(context) => { // 동적으로 받아야하기 때문에 context 파라미터 넘겨줌
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await res.json();
    return {
        props: {
            photo
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=5`)
    const photos = await res.json();
    const ids = photos.map(photo => photo.id);
    const paths = ids.map(id => {
        return {
            param: {id: id.toString() }
        }
    })
    return {
        paths,
        fallback: false,     //'blocking', //블로킹 속성줬을 때는 지정하지 않은 내용에 대해서도 보여줌

    }
}
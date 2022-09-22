import Image from "next/image"
import Link from 'next/link'
//넘겨준 주소를 받아오기 위해서 주소의 id 값을 받아오기 위해서 userRouter훅을 사용할 거임
import { useRouter } from "next/router"


const index = ({photo}) => {
    const router = useRouter();
    console.log("router:::", router);
    const {title, url} = photo
    return (
        <div>
            {/* <h2>{title}</h2>
            <img 
            src={url}
            width={500}
            height={500}

            />
    <Link href="/photos">
        <a>go bakc</a>
    </Link> */}
        </div>
    )
}
export const getStaticProps = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/1`)
}

export default index
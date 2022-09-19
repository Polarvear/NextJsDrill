import HeadInfo from "../components/HeadeInfo"
// import Image from "next/image" //이미지 컴포넌트 대신에 이미지 태그 사용해서 해결 완료
/**
 * @see (https://nomadcoders.co/community/thread/5537)
 */
import photos from "../styles/Photos.moduel.css"

const photos = ({ photos }) => { // 라우팅이 굉장히 쉽다.
    return (
        <div>
            <HeadInfo title="My Blog Photos"/>
            <h1>My photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map(photo=>(
                    <li key={photo.id}>
                    <img
                    src={photo.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photo.title}/>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json(); // json이 순차적으로 파싱될 수 있도록 함

    return {
        props: {
            photos
        }
    }
}

export default photos
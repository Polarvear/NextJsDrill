import Head  from "next/head";

const HeadInfo = ({title, keyword, contents}) => { // mapper 정보들은 prop으로 넘겨받는다.
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contens={contents} />
        </Head>
    )
}
HeadInfo.defalutProps = {
    title: 'My Blog', 
    keyword: 'Blog powered by Next js',
    contents: 'drill next js'
}

export default HeadInfo
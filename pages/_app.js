import '../styles/globals.css'
// import photosStyles from "../styles/Photos.moduel.css"
import Layout from '../components/Layout'




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp

import '../styles/global.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Layout from '../components/common/Layout'
import { wrapper } from '../redux'

const App = ({Component, pageProps}: AppPropsType) => {
    return (
        <Layout home> 
            <Component {...pageProps} /> 
        </Layout>
    ) 
}

export default wrapper.withRedux(App);
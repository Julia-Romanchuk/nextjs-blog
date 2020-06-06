import '../styles/global.css'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useStore } from '../redux'
import Layout from '../components/common/Layout'

export default function App({ Component, pageProps}: AppProps) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

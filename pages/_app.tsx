import '../styles/global.css'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useStore } from '../redux'

export default function App({ Component, pageProps}: AppProps) {
  // @ts-ignore
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

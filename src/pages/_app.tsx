import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import 'styles/loading.css'
import { T } from 'theme'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={T}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

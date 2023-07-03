import '@/styles/globals.css';
import type { AppProps } from 'next/app';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component']
}

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
        <Component {...pageProps} />
  )
}

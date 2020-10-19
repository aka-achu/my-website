import { CurrentPageProvider } from "@context/current-page-context"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <CurrentPageProvider>
      <Component {...pageProps} />
    </CurrentPageProvider>
  )
}

export default MyApp

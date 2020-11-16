import Layout from "@components/layout"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="h-full flex-auto">
        <div className="pt-20 h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  )
}

export default MyApp

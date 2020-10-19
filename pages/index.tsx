import Layout from "@components/layout"
import Home from "@components/home"
import About from "@components/about"
import Contact from "@components/contact"

export default function IndexPage() {
  return (
    <Layout>
      <div className="py-20">
        {/* <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1> */}
        {/* <Home /> */}
        {/* <About /> */}
        <Contact />
      </div>
    </Layout>
  )
}

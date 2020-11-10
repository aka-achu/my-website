import Layout from "@components/layout"
import Home from "@components/home"
import About from "@components/about"
import Contact from "@components/contact"
import Skills from "@components/skills"
import { usePageContext } from "@context/current-page-context"

export default function IndexPage() {
  const { page } = usePageContext()

  let CurrentPage = Home
  if (page === "home") {
    CurrentPage = Home
  } else if (page === "about") {
    CurrentPage = About
  } else if (page === "contact") {
    CurrentPage = Contact
  } else if (page === "skills") {
    CurrentPage = Skills
  }

  return (
    <Layout>
      <div className="py-20">
        <CurrentPage />
      </div>
    </Layout>
  )
}

import About from "@components/about"
import Contact from "@components/contact"
import Home from "@components/home"
import Layout from "@components/layout"
import Projects from "@components/projects"
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
  } else if (page === "projects") {
    CurrentPage = Projects
  }

  return (
    <Layout>
      <div className="pt-20">
        <CurrentPage />
      </div>
    </Layout>
  )
}

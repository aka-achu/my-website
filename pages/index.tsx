import React from "react"
import Layout from "@components/layout"
import Home from "@components/home"
import About from "@components/about"
import Contact from "@components/contact"
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
  }

  return (
    <Layout>
      <div className="py-20">
        <CurrentPage />
      </div>
    </Layout>
  )
}

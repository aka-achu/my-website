import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { usePageContext } from "@context/current-page-context"

const navLinks = [
  {
    key: "home",
    href: "#",
    label: "Home",
    page: "home",
  },
  {
    key: "about",
    href: "#",
    label: "About",
    page: "about",
  },
  {
    key: "skills",
    href: "#",
    label: "Skills",
    page: "skills",
  },
  {
    key: "projects",
    href: "#",
    label: "Projects",
    page: "projects",
  },
  {
    key: "contact",
    href: "#",
    label: "Contact",
    page: "contact",
  },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aka-achu/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://github.com/aka-achu", label: "Github", icon: FaGithub },
]

export default function Nav() {
  const { page: contextPage, setPage } = usePageContext()
  return (
    <nav>
      <div className="flex justify-between items-center py-8">
        <ul className="flex justify-between items-center space-x-4">
          {navLinks.map(({ href, label, key, page }) => (
            <li key={key}>
              <Link href={href}>
                <a
                  className={`${
                    contextPage === page ? "text-red-500" : "text-white"
                  } no-underline uppercase font-semibold`}
                  onClick={() => {
                    if (page) {
                      setPage(page)
                    }
                  }}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex mb-2 space-x-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              key={href}
            >
              <Icon color="white" className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

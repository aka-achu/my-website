import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useRouter } from "next/router"

const navLinks = [
  {
    key: "home",
    href: "/",
    label: "Home",
    page: "home",
  },
  {
    key: "about",
    href: "/about",
    label: "About",
    page: "about",
  },
  {
    key: "skills",
    href: "/skills",
    label: "Skills",
    page: "skills",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    page: "projects",
  },
  {
    key: "contact",
    href: "/contact",
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

export default function Nav({ className = "" }) {
  const router = useRouter()

  return (
    <nav className={`sticky top-0 z-10 bg-black ${className}`}>
      <div className="flex justify-between items-center py-8">
        <ul className="flex justify-between items-center space-x-4">
          {navLinks.map(({ href, label, key, page }) => (
            <li key={key}>
              <Link href={href}>
                <a
                  className={`${
                    router.pathname === href ? "text-red-500" : "text-white"
                  } no-underline uppercase font-semibold`}
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

import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const navLinks = [
  {
    key: "home",
    href: "#",
    label: "Home",
  },
  {
    key: "about",
    href: "#",
    label: "About",
  },
  {
    key: "skills",
    href: "#",
    label: "Skills",
  },
  {
    key: "resume",
    href: "#",
    label: "Resume",
  },
  {
    key: "contact",
    href: "#",
    label: "Contact",
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
  return (
    <nav>
      <div className="flex justify-between items-center p-8">
        <ul className="flex justify-between items-center space-x-4">
          {navLinks.map(({ href, label, key }) => (
            <li key={key}>
              <Link href={href}>
                <a className="text-red-500 no-underline uppercase font-semibold">
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

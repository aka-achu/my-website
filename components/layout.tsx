import { useRouter } from "next/router"
import Nav from "./nav"

export default function Layout({ navbar: Navbar = Nav, children }) {
  const router = useRouter()
  return (
    <>
      <div className="bg-black min-h-screen max-w-6xl mx-auto flex flex-col">
        <Navbar className="flex-initial" />
        <main className="flex-auto flex flex-col">{children}</main>
      </div>
      {router.pathname === "/contact" ? (
        <footer className="bg-gray-1 text-white h-10 sticky bottom-0 flex justify-center">
          <div className="mr-8 my-auto">Designed by: Me</div>
          <div className="my-auto">
            {`Developed by: `}
            <a
              href="https://sudhanshu-ranjan.tech"
              rel="noopener norefferer"
              target="_blank"
            >
              Sudhanshu
            </a>
          </div>
        </footer>
      ) : null}
    </>
  )
}

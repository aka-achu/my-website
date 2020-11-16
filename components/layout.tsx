import Nav from "./nav"
export default function Layout({ navbar: Navbar = Nav, children }) {
  return (
    <div className="bg-black min-h-screen max-w-6xl mx-auto flex flex-col">
      <Navbar className="flex-initial" />
      <main className="flex-auto flex flex-col">{children}</main>
    </div>
  )
}

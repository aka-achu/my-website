import Nav from "./nav"
export default function Layout({ navbar: Navbar = Nav, children }) {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom"
export default function FloatMenu() {
  return (
    <div className="menu-container xs:fixed md:sticky bottom-0 pt-3">
      <nav className="float-menu flex  ml-4 mr-4 mb-4 mt-6">
        <Link to="/"><img src="assets/home.svg" alt="home" /></Link>
        <Link to="/menu"><img src="assets/menu.svg" alt="menu" /></Link>
        <Link to="/account"><img src="assets/account.svg" alt="account" /></Link>
        <Link to="/tickets"><img src="assets/tickets.svg" alt="tickets" /></Link>
      </nav>
    </div>
  )

}

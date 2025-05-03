import { Link, Outlet } from "react-router-dom"
import Footer from "../footer/Footer"

const Navbar = () => {
  return (
<div ><Link to="/"   >
     

     </Link>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Navbar
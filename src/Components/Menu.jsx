import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
        <nav className="nav navigation">
            <div>
                <Link to="/" className="site-logo">#VANSLIFE</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </nav>
    </header>
  )
}

export default Menu;
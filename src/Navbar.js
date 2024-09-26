import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> <br />
                <Link to="/create">New Blog</Link><br />
            </div>

        </nav>

     );
}

export default Navbar;
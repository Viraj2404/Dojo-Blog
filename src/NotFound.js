import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h1>Sorry</h1>
            <p>That page ain't available</p>
            <Link to='/'>Go back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;
import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Footer/Footer";


const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Footer/Footer";


const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-420px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
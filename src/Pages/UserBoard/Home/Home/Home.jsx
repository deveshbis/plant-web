import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import PlantCardTitle from "../PlantCard/PlantCardTitle";


const Home = () => {
    const plants = useLoaderData()
    // console.log(plants);
    return (
        <div>
            <Banner />
            <PlantCardTitle plants={plants}></PlantCardTitle>
        </div>
    );
};

export default Home;
import PlantCard from "./PlantCard";


// eslint-disable-next-line react/prop-types
const PlantCardTitle = ({plants}) => {
    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold mb-2">Plant Products</h1>
            <p className="text-center">Explore our lush collection of plant products! From vibrant flowers to leafy greens, <br /> each item boasts natural beauty and enhances any space. Discover your botanical favorites today.</p>
            <div className="grid grid-cols-3 gap-3 mt-5">
                {
                    // eslint-disable-next-line react/prop-types
                    plants.map(plant => <PlantCard key={plant._id} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default PlantCardTitle;
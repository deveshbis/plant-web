

// eslint-disable-next-line react/prop-types
const PlantCard = ({ plant }) => {
    // eslint-disable-next-line react/prop-types
    const { image, name, description, price } = plant

    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-teal-800 text-white hover:bg-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
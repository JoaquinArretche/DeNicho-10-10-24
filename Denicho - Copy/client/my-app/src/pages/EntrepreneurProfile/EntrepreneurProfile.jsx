// src/components/EntrepreneurProfile.js
import React from 'react';
import './EntrepreneurProfile.css';
import Product from '../../components/Product/Product';
import ReviewSection from '../../components/ReviewSection/ReviewSection';

const EntrepreneurProfile = () => {
    const entrepreneur = {
        name: "Juan Pérez",
        category: "Tecnología",
        description: "Desarrollador de aplicaciones móviles innovadoras.",
        image: "https://via.placeholder.com/150", // Placeholder for entrepreneur's photo
        products: [
            { name: "App1", price: 10, image: "https://via.placeholder.com/100" }, // Placeholder for product image 1
            { name: "App2", price: 15, image: "https://via.placeholder.com/100" }  // Placeholder for product image 2
        ],
        reviews: [
            { author: "Cliente 1", content: "Gran servicio!" },
            { author: "Cliente 2", content: "Muy satisfecho con el producto." }
        ]
    };

    return (
        <div className="entrepreneur-profile">
            <div className='content'>
                <img src={entrepreneur.image} alt={entrepreneur.name} />
                <div>
                    <h1>{entrepreneur.name}</h1>
                    <h2>{entrepreneur.category}</h2>
                    <p>{entrepreneur.description}</p>
                </div>
            </div>
            <h2>Productos</h2>
            <div className="product-list">
                {entrepreneur.products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
            <ReviewSection reviews={entrepreneur.reviews} />
        </div>
    );
};

export default EntrepreneurProfile;

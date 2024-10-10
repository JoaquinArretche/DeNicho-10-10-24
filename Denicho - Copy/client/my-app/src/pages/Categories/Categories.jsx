import React, { useState, useRef, useEffect } from 'react';
import Product from '../../components/Product/Product';
import './Categories.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IonIcon } from '@ionic/react';
import { funnel, close } from 'ionicons/icons'; // Import the close icon

const CategoriesPage = () => {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [showFilters, setShowFilters] = useState(false); // State for filter visibility

    const colors = ['Red', 'Blue', 'Green'];
    const sizes = ['Small', 'Medium', 'Large'];
    const tags = ['New', 'Sale', 'Popular'];
    const categories = [
        {
            name: "Tecnología",
            products: [
                { name: "Smartphone", price: 299, image: "https://via.placeholder.com/100" },
                { name: "Laptop", price: 899, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                { name: "Tablet", price: 199, image: "https://via.placeholder.com/100" },
                // ... more products
            ]
        },
        {
            name: "Hogar",
            products: [
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                { name: "Couch", price: 499, image: "https://via.placeholder.com/100" },
                // ... more products
            ]
        },
    ];

    const getMinPrice = () => {
        const allProducts = categories.flatMap(category => category.products);
        const minPrice = Math.min(...allProducts.map(product => product.price));
        return minPrice || 0;
    };

    const getMaxPrice = () => {
        const allProducts = categories.flatMap(category => category.products);
        const maxPrice = Math.max(...allProducts.map(product => product.price));
        return maxPrice || 100;
    };

    useEffect(() => {
        const minPrice = getMinPrice();
        const maxPrice = getMaxPrice();
        setPriceRange([minPrice, maxPrice]);
    }, []);

    const handlePriceChange = (range) => {
        setPriceRange(range);
    };

    const handleCheckboxChange = (setFunction, value) => {
        setFunction((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const scrollRef = useRef(null);

    // Function to toggle the filter sidebar visibility
    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };




    return (
        <div className="categories">
            <div className={`filter-sidebar ${showFilters ? 'visible' : ''}`}>
                <h2>Filtros</h2>
                <div className="filter-group">
                    <h3>Precio</h3>
                    <Slider
                        range
                        min={getMinPrice()} // Set minimum dynamically
                        max={getMaxPrice()} // Set maximum dynamically
                        value={priceRange}
                        onChange={handlePriceChange}
                        allowCross={false}
                        trackStyle={[{ backgroundColor: '#000', height: 4 }]}
                        handleStyle={[{ borderColor: '#000', height: 20, width: 20 }, { borderColor: '#000', height: 20, width: 20 }]}
                    />
                    <p>Rango: ${priceRange[0]} - ${priceRange[1]}</p>
                </div>

                <div className="filter-group">
                    <h3>Colores</h3>
                    {colors.map((color) => (
                        <label key={color}>
                            <input
                                type="checkbox"
                                value={color}
                                onChange={() => handleCheckboxChange(setSelectedColors, color)}
                            />
                            {color}
                        </label>
                    ))}
                </div>

                <div className="filter-group">
                    <h3>Tamaños</h3>
                    {sizes.map((size) => (
                        <label key={size}>
                            <input
                                type="checkbox"
                                value={size}
                                onChange={() => handleCheckboxChange(setSelectedSizes, size)}
                            />
                            {size}
                        </label>
                    ))}
                </div>

                <div className="filter-group">
                    <h3>Tags</h3>
                    {tags.map((tag) => (
                        <label key={tag}>
                            <input
                                type="checkbox"
                                value={tag}
                                onChange={() => handleCheckboxChange(setSelectedTags, tag)}
                            />
                            {tag}
                        </label>
                    ))}
                </div>
            </div>

            <div className='product-container'>
                <h1>Nombre Categoria</h1>
                {categories.map((category, index) => {
                    const filteredProducts = category.products.filter(product =>
                        product.price >= priceRange[0] && product.price <= priceRange[1]
                    );

                    if (filteredProducts.length === 0) {
                        return null;
                    }

                    return (
                        <div key={index} className="category-section">
                            <h2>{category.name}</h2>
                            <div className="product-scroll" ref={scrollRef}>
                                {filteredProducts.map((product, idx) => (
                                    <Product key={idx} product={product} />
                                ))}
                            </div>
                        </div>
                    );
                })}

                <button className="filter-toggle" onClick={toggleFilters}>
                    <IonIcon icon={showFilters ? close : funnel} className="dropdown-icon" />
                </button>
            </div>
        </div>
    );
};

export default CategoriesPage;

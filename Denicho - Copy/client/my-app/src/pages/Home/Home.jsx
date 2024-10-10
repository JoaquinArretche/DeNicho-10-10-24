import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { arrowForward, person, key } from 'ionicons/icons';
import SmileyIcon from './SmiileyIcon';
import './Home.css';
import Product from '../../components/Product/Product';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [products, setProducts] = useState([]);

    // Sample product data
    const sampleProducts = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        name: `Product ${index + 1}`,
        price: (Math.random() * 100).toFixed(2),
        image: `https://via.placeholder.com/150?text=Product+${index + 1}`, // Placeholder image
    }));

    useEffect(() => {
        setProducts(sampleProducts); // Set products from sample data
    }, []);

    useEffect(() => {
        const scrollContainer = document.querySelector('.scrollable');

        const scroll = () => {
            scrollContainer.scrollBy({ left: 1, behavior: 'smooth' });
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0; // Reset to the start when it reaches the end
            }
        };

        const interval = setInterval(scroll, 20); // Adjust speed by changing the interval duration
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='bg'>
            <div className="scrolling-banner">
                <div className="scrolling-content">
                    {Array(20).fill().map((_, index) => (
                        <h1 key={index}>
                            DeNicho <SmileyIcon />
                        </h1>
                    ))}
                </div>
            </div>

            <div className='container'>
                <section className="grid-container centrado">
                    <div className="card-1">
                        <h2>
                            Impulsá<br /><span>tu emprendimiento <img src="/img/Big Circle.svg" alt="oval" /></span> <br /> en nuestro <span> <br />  <img src="/img/Oval.svg" alt="oval" className="oval-img" /> showroom digital</span>
                        </h2>
                    </div>
                    <Link to="/filming" className="card-2">
                        <div>
                            <h2>FILMING</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/arte" className="card-3">
                        <div>
                            <h2>ARTE</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/moda" className="card-4">
                        <div>
                            <h2>MODA</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/moda" className="card-5">
                        <div>
                            <h2>HOME & DECO</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                </section>
            </div>

            <section className='section2'>
                <div className='centrado'>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laborum aliquid illo voluptas rerum explicabo quasi dicta corrupti! Nobis impedit laudantium delectus ex, aperiam similique iste voluptate minima quae itaque.</h2>
                </div>
            </section>

            <section className='section3'>
                <h2>Shop By Essentials</h2>


                <div>
                    <div className='scrollable' style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        {products.map((product) => (
                            <div key={product.id} style={{ display: 'inline-block', margin: '0 10px' }}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import CartCard from '../../components/Cart Card/CartCard';
import './Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Product Title 1', price: 2990, quantity: 1, imageUrl: 'link_to_image_1', owner: 'Martin' },
        { id: 2, title: 'Product Title 2', price: 1990, quantity: 2, imageUrl: 'link_to_image_2', owner: 'Joaquin' },
        { id: 3, title: 'Product Title 3', price: 3990, quantity: 1, imageUrl: 'link_to_image_3', owner: 'Pedro' },
        // Additional products can be added here
    ]);

    const [activeOwner, setActiveOwner] = useState('Martin');

    const handleDelete = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    const handleUpdateQuantity = (id, delta) => {
        const updatedItems = cartItems.map(item =>
            item.id === id && item.quantity + delta > 0
                ? { ...item, quantity: item.quantity + delta }
                : item
        );
        setCartItems(updatedItems);
    };

    // Get unique owners
    const owners = [...new Set(cartItems.map(item => item.owner))];

    // Filter items based on the active owner
    const filteredItems = cartItems.filter(item => item.owner === activeOwner);

    // Calculate total price and total number of products for the active owner
    const totalPrice = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalProducts = filteredItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='cart-container'>
            {/* Tabs for owners */}
            <div className='tabs-products'>
                <div>
                    <h2>Emprendimiento</h2>
                    <div className='owner-tabs'>
                        {owners.map(owner => (
                            <button
                                key={owner}
                                className={`tab ${activeOwner === owner ? 'active' : ''}`}
                                onClick={() => setActiveOwner(owner)}
                            >
                                {owner}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='card-container'>
                    {filteredItems.map(item => (
                        <CartCard
                            key={item.id}  // Ensure each CartCard has a unique key
                            product={item}
                            onDelete={handleDelete}
                            onUpdateQuantity={handleUpdateQuantity}
                        />
                    ))}
                </div>
            </div>

            <div className="cart-summary">
                <div className='cart-summary-1'>
                    <h3>Resumen de Compra</h3>
                    <div>
                        <p>Productos</p>
                        <p>({totalProducts})</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p className='total-price'>${totalPrice}</p>
                    </div>
                </div>

                <div className='cart-summary-2'>
                    <p>Detalles de envio</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ipsum adipisci accusamus? Tenetur natus, minus beatae fugiat iure ipsam repudiandae?</p>
                </div>

                <div className='cart-summary-2'>
                    <p>Estimacion de entrega</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ipsum adipisci accusamus? Tenetur natus, minus beatae fugiat iure ipsam repudiandae?</p>
                </div>

                <button className="proceed-to-payment">Comprar</button>
            </div>
        </div>
    );
}

export default Cart;

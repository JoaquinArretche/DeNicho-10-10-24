import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { searchOutline, cartOutline, menuOutline, closeOutline } from 'ionicons/icons';
import { person, key, caretDownOutline } from 'ionicons/icons'; // Import icons for dropdown
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSearchOpen(false); // Close search if menu is opened
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setMenuOpen(false); // Close menu if search is opened
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Detect screen size to manage mobile and desktop views
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className={`links ${menuOpen ? 'active' : ''}`}>
                <a href="/emprendimientos">Emprendimientos</a>
                <div className="dropdown" onClick={toggleDropdown}>
                    <a href="#" className="dropdown-link">
                        Categorias
                        <IonIcon icon={caretDownOutline} className="dropdown-icon" />
                    </a>
                    <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                        <a href="/categorias" className="dropdown-item">Arte</a>
                        <a href="/categorias" className="dropdown-item">Moda</a>
                        <a href="/categorias" className="dropdown-item">Home and Deco</a>
                    </div>
                </div>
                <a href="/nosotros">Nosotros</a>
            </div>

            <a href="home">
                <div className="logo">
                    <img src="/img/logo.svg" alt="Logo" className="logo-img" />
                </div>
            </a>

            <div className="icons">
                {isMobile ? (
                    <>
                        <IonIcon icon={searchOutline} onClick={toggleSearch} className='search-icon' />
                        <IonIcon icon={cartOutline} className='cart-icon' />
                        <IonIcon
                            icon={menuOpen ? closeOutline : menuOutline}
                            onClick={toggleMenu}
                            className="hamburger"
                        />
                    </>
                ) : (
                    <div className='right-section'>
                        <div className='searchBox'>
                            <IonIcon icon={searchOutline} onClick={toggleSearch} className='search-icon' />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div>
                            <a href="/login" className="nav-link">
                                <IonIcon icon={person} className="nav-icon" />
                                Iniciar
                            </a>
                            <a href="/registro" className="nav-link">
                                <IonIcon icon={key} className="nav-icon" />
                                Registro
                            </a>
                            <a href="/cart" className="nav-link">
                                <IonIcon icon={cartOutline} className="nav-icon" />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Search overlay for mobile/tablet */}
            {isMobile && (
                <div className={`search-overlay ${searchOpen ? 'active' : ''}`}>
                    <input type="text" placeholder="Search..." />
                    <IonIcon icon={closeOutline} onClick={toggleSearch} className={`close-icon ${searchOpen ? 'active' : ''}`} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;

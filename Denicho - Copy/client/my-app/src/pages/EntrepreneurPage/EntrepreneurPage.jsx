import React from 'react';
import EntrepreneurCard from '../../components/EntrepreneurCard/EntrepreneurCard';
import './EntrepreneurPage.css';

const EntrepreneursPage = () => {
    // Mock data for entrepreneurs
    const entrepreneurs = [
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 1" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 2" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 3" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 4" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 5" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 6" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 7" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 8" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 9" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 10" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 11" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 12" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 13" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 14" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 15" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 16" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 17" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 18" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 19" },
        { logo: "https://via.placeholder.com/60", name: "Entrepreneur 20" },
    ];

    return (
        <div className="entrepreneurs-page">
            <div className="entrepreneur-cards-container">
                {entrepreneurs.map((entrepreneur, index) => (
                    <EntrepreneurCard
                        key={index}
                        logo={entrepreneur.logo}
                        name={entrepreneur.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default EntrepreneursPage;

import React from 'react';

const attractions = [
    {
        id: 1,
        name: "Namsan Mountain Park",
        rating: "8.1/10",
        travelerRating: "4.7/5",
        reviews: "743 Reviews",
        type: "City Parks, Nighttime sightseeing",
        distance: "2.1 km from downtown",
        imgSrc: "namsan.jpg",
        buttonText: "Free entry"
    },
    {
        id: 2,
        name: "N Seoul Tower",
        rating: "8.1/10",
        travelerRating: "4.6/5",
        reviews: "5.4k Reviews",
        type: "2024 Global 100 - Nightlife, Modern Architecture",
        distance: "1.9 km from downtown",
        imgSrc: "n_seoul_tower.jpg",
        buttonText: "Available for today"
    },
];

const AttractionList = () => {
    return (
        <div className="main-content">
            <h1>Popular Attractions in Seoul (2024)</h1>
            {attractions.map(attraction => (
                <div key={attraction.id} className="attraction-card">
                    <img src={attraction.imgSrc} alt={attraction.name} />
                    <h2>{attraction.name}</h2>
                    <p>Rating: {attraction.rating}</p>
                    <p>Traveler Rating: {attraction.travelerRating} based on {attraction.reviews}</p>
                    <p>{attraction.type}</p>
                    <p>{attraction.distance}</p>
                    <button>{attraction.buttonText}</button>
                </div>
            ))}
        </div>
    );
};

export default AttractionList;

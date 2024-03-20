import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../../data/review';



import './HomeMainSection.css';

export default function HomeMainSection() {

    const [randomReviews, setRandomReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const updatedReviews = [];
        while (updatedReviews.length < 2) {
            const randomIndex = Math.floor(Math.random() * reviews.length);
            const randomReview = reviews[randomIndex];
            if (!updatedReviews.includes(randomReview)) {
                updatedReviews.push(randomReview);
            }
        }
        setRandomReviews(updatedReviews);
    }, []);

    function renderReview(review){
        const stars = '⭐️'.repeat(review.stars);
        return (
            <div className="review">
                <p>{review.customerName}</p>
                <p>{review.reviewContent}</p>
                <p>{stars}</p>
            </div>
        )
    }

    function onClick_shop() {
        navigate('/shop');
    }


    return (
        <div className='home-page'>
            <div className="home-main-section">
                <h2>About Us</h2>
                <p>Welcome to the shop! We are looking to provide high-quality products with exceptional customer service.</p>
                <p>We opened this store to help with the cost of tuition and fundraise for our favourite foundation</p>
                <p>Thank you for your support!</p>
                <button onClick={() => onClick_shop()}>Shop Now</button>
            </div>
            <div className='reviews'>
                <h2>Reviews</h2>
                {randomReviews.map(renderReview)}
            </div>
        </div>
    )
}

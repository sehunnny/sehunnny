import React from 'react';
import './App.css'; // 스타일을 위한 CSS 파일

const TouristSpot = ({ name, rating, reviews = [], tips = [], transport }) => { // 기본값 설정
    return (
        <div className="container">
            <div className="header">
                <h1>{name}</h1>
                <p>평점: <strong>{rating}</strong> (5,404 리뷰)</p>
            </div>

            <div className="reviews">
                <h2>리뷰</h2>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div className="review" key={index}>
                            <p><strong>{review.userId}</strong> - {review.rating}/5</p>
                            <p>{review.reviewText}</p>
                        </div>
                    ))
                ) : (
                    <p>리뷰가 없습니다.</p>
                )}
            </div>

            <div className="tips">
                <h2>방문 팁</h2>
                {tips.length > 0 ? (
                    <ul>
                        {tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                ) : (
                    <p>팁이 없습니다.</p>
                )}
            </div>

            <div className="transport">
                <h2>교통 정보</h2>
                <p>{transport}</p>
            </div>
        </div>
    );
}

export default TouristSpot;


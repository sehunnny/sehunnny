import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ReviewFormPage = () => {
    const [userId, setUserId] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const history = useHistory();

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (userId && rating > 0 && reviewText) {
            // 리뷰를 제출하는 로직 추가
            // 예를 들어, 리뷰를 서버에 저장하거나 상태 업데이트
            alert('리뷰가 제출되었습니다.');
            history.push('/'); // 제출 후 상세 페이지로 돌아가기
        } else {
            alert('모든 필드를 입력해 주세요.');
        }
    };

    return (
        <div className="review-form-page">
            <h1>리뷰 작성하기</h1>
            <form className="review-form" onSubmit={handleReviewSubmit}>
                <input
                    type="text"
                    placeholder="사용자 아이디"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))} required>
                    <option value="">별점 선택</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea
                    placeholder="리뷰 작성..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                />
                <button type="submit">리뷰 제출</button>
            </form>
        </div>
    );
};

export default ReviewFormPage;
import React from 'react';
import { useParams } from 'react-router-dom';
import TouristSpot from './TouristSpot'; // TouristSpot 컴포넌트 import

const TouristSpotDetailPage = ({ spots }) => {
  const { id } = useParams();
  const spot = spots.find((spot) => spot.id === parseInt(id)); // id를 정수로 변환하여 찾기

  if (!spot) {
    return <div>관광지를 찾을 수 없습니다.</div>; // 관광지 없음 처리
  }

  return (
    <div>
      <TouristSpot 
        name={spot.name}
        rating={spot.rating}
        reviews={spot.reviews}
        tips={spot.tips}
        transport={spot.transport}
      />
    </div>
  );
};

export default TouristSpotDetailPage;

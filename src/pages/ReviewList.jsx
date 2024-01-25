// ReviewList 컴포넌트

import React, { useEffect, useState } from "react";
import ReviewListItem from "../components/ReviewListItem";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  // 페이지 로드 시 리뷰 목록을 가져오는 함수
  useEffect(() => {
    fetchReviews();
  }, []);

  // 리뷰를 가져오는 함수
  const fetchReviews = async () => {
    try {
      const response = await fetch("https://makzip-tb.fly.dev/api/v1/review/");
      if (!response.ok) {
        throw new Error("리뷰 목록 요청이 실패했습니다.");
      }
      const result = await response.json();
      const sortedReviews = result.data.sort((a, b) => a.id - b.id);
      setReviews(sortedReviews);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewUpdate = (updatedReview) => {
    const updatedReviews = reviews.map((review) =>
      review.id === updatedReview.id ? updatedReview : review
    );
    setReviews(updatedReviews);
  };

  const handleReviewDelete = (deletedReviewId) => {
    const updatedReviews = reviews.filter(
      (review) => review.id !== deletedReviewId
    );
    setReviews(updatedReviews);
  };

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <ReviewListItem
            key={review.id}
            review={review}
            onUpdate={handleReviewUpdate}
            onDelete={handleReviewDelete}
            fetchReviews={fetchReviews}
          />
        ))}
    </div>
  );
}

export default ReviewList;

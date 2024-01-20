import React, { useEffect, useState } from "react";
import ReviewListItem from "../components/ReviewListItem";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://makzip-be.fly.dev/api/v1/review");
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
    fetchReviews();
  }, []);

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <ReviewListItem key={review.id} review={review} />
        ))}
    </div>
  );
}

export default ReviewList;

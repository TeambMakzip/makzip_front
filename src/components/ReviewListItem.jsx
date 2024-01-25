import React, { useState } from "react";

function ReviewListItem({ review, fetchReviews }) {
  const { id, title, contents, created_at, updated_at } = review;

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContents, setNewContents] = useState(contents);

  const onDelete = async () => {
    try {
      const response = await fetch(
        `https://makzip-tb.fly.dev/api/v1/review/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("삭제 요청이 실패했습니다.");
      }
      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdate = async () => {
    try {
      const response = await fetch(
        `https://makzip-tb.fly.dev/api/v1/review/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTitle,
            contents: newContents,
            updated_at: new Date().toISOString(),
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("리뷰 수정 요청이 실패했습니다.");
      }
      setIsEditing(false);
      fetchReviews();

      // 수정된 내용을 다시 가져오기 위해 리뷰를 다시 불러옴
      const updatedReviewResponse = await fetch(
        `https://makzip-tb.fly.dev/api/v1/review/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!updatedReviewResponse.ok) {
        throw new Error("리뷰 정보를 다시 가져오는데 실패했습니다.");
      }
      const updatedReview = await updatedReviewResponse.json();
      setNewTitle(updatedReview.title);
      setNewContents(updatedReview.contents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-2 border">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="mb-2 p-1 border"
            placeholder="식당 이름 수정"
          />
          <input
            type="text"
            value={newContents}
            onChange={(e) => setNewContents(e.target.value)}
            className="mb-2 p-1 border"
            placeholder="리뷰 내용 수정"
          />
          <button
            onClick={onUpdate}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
          >
            저장
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
          >
            취소
          </button>
        </>
      ) : (
        <>
          <h3 className="mb-2">
            {id} {title}
          </h3>
          <h4 className="mb-2">리뷰 내용: {contents}</h4>
          <button
            onClick={() => setIsEditing(true)}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
          >
            수정
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
          >
            삭제
          </button>
        </>
      )}
      <h5 className="mb-1">작성일: {created_at}</h5>
      <h5>수정일: {updated_at}</h5>
    </div>
  );
}

export default ReviewListItem;

import React, { useState } from "react";

function ReviewWrite() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onInsert = async () => {
    if (!title || !contents) {
      return alert("제목과 리뷰를 모두 입력해주세요.");
    }

    const now = new Date().toISOString();

    try {
      const response = await fetch(`https://makzip-tb.fly.dev/api/v1/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          contents,
          is_checked: false,
          created_at: now,
          updated_at: now,
        }),
      });
      if (!response.ok) {
        throw new Error("리뷰 작성 요청이 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
    setTitle("");
    setContents("");
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentsChange = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="mb-4">
        <input
          placeholder="제목을 입력해주세요."
          type="text"
          value={title}
          onChange={onTitleChange}
          className="mb-2 p-1 border"
        />
        <input
          placeholder="리뷰를 작성해주세요."
          type="text"
          value={contents}
          onChange={onContentsChange}
          className="mb-2 p-1 border"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          저장
        </button>
      </form>
    </div>
  );
}

export default ReviewWrite;

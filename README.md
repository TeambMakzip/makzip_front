
makzip
리뷰를 남길수 있는 사이트


makzip ?
맛있는 식당에 가본적 있나요? 리뷰를 남겨보세요 👨‍💻


📆 프로젝트 기간
2024.01.18 ~ 2022.01.25

😎 Members
김동욱                                백민기
https://github.com/dong5397				    https://github.com/MkBaek0229
Frontend		                          Backend	


프로젝트 기능 소개

🐰 리뷰 작성 페이지
사용자가 리뷰를 작성할 수 있다.

🦊 메인 페이지
리뷰 작성 페이지와 리뷰 리스트 페이지로 이동 할 수 있다.

🐸 리뷰 목록 페이지
리뷰 전체를 보여주고 삭제 및 수정을 할 수 있다.



Architecture
WillBe-service_architecture



🛠 Tools
Design
    ![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/ec8db87c-1a9b-49e7-83ee-64a0ce3fc100)
Frontend
Infrastructure
Dev tools
  



🔥 Trouble Shooting
Issue1
리뷰를 작성하고 저장하면 바로 랜더링이 되지 않는다.

원인
수정과 삭제 작업 후에 상태를 직접 업데이트하지 않습니다. 따라서 사용자가 페이지를 새로고침하지 않는 한, 변경 사항이 UI에 반영되지 않는다.

해결 순서
fetchReviews 함수를 호출하여 서버에서 최신 데이터를 가져와 상태를 업데이트합니다.
또한 수정 후에 수정된 리뷰를 다시 가져와 newTitle, newContents를 업데이트합니다.
이렇게 하면 사용자가 페이지를 새로고침하지 않아도 변경 사항이 UI에 바로 반영됩니다.



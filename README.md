# makzip: 실시간 리뷰 공유 플랫폼 🍔🍟🌭
맛있는 식당을 방문하셨나요? 그렇다면 그 경험을 makzip에서 나눠보세요. 우리 모두가 더 좋은 음식을 찾아갈 수 있도록 도와주세요! 👨‍💻

## 📅 프로젝트 기간
2024년 1월 18일 ~ 2024년 1월 25일

## 😎 팀 멤버
### 김동욱 (프론트엔드)
[김동욱의 깃허브 바로가기](https://github.com/dong5397)
### 백민기 (백엔드)
[백민기의 깃허브 바로가기](https://github.com/MkBaek0229)

## 프로젝트 주요 기능
### 🐰 리뷰 작성 페이지
사용자가 직접 리뷰를 작성하여 공유할 수 있는 공간을 제공합니다.
### 🦊 메인 페이지
리뷰 작성 페이지와 리뷰 리스트 페이지로 이동할 수 있는 메인 페이지를 제공합니다.
### 🐸 리뷰 목록 페이지
전체 리뷰를 확인하고 사용자의 리뷰를 삭제하거나 수정할 수 있는 페이지를 제공합니다.

## Architecture
makzip 서비스 아키텍처는 [여기](WillBe-service_architecture)에서 확인하실 수 있습니다.

## 🛠 사용 도구
* 디자인: ![디자인 이미지](https://github.com/TeambMakzip/makzip_front/assets/141000247/ec8db87c-1a9b-49e7-83ee-64a0ce3fc100)![image]





* 프론트엔드:  ![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/e4afd7d5-52f6-4eec-ba3a-881d09eb07e6)![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/a6975719-09ed-4d46-8958-e4ef5ebdf981)![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/42938158-2d62-4f88-9ab9-cb83d2cd5eb8)![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/da712315-5ea6-4efb-9eb0-6b77d99ba6f1)![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/23f04ca3-04cf-49fc-aff9-a7ea7b09a2a5)

* 인프라스트럭처: (도구를 명시해주세요)
* 개발 도구: ![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/54d7e879-bbe0-416a-904b-4b02942e2244)![image](https://github.com/TeambMakzip/makzip_front/assets/141000247/28640b01-207c-42e4-985c-8ee9329d1660)



## 🔥 문제 해결 과정
### Issue1
리뷰를 작성하고 저장한 후, 즉각적인 랜더링이 이루어지지 않는 문제가 발생했습니다.

#### 원인
수정과 삭제 작업 후에 상태를 직접 업데이트하지 않아, 사용자가 페이지를 새로고침하지 않는 한, 변경 사항이 UI에 반영되지 않았습니다.

#### 해결 방법
`fetchReviews` 함수를 호출하여 서버에서 최신 데이터를 가져와 상태를 업데이트하였습니다. 또한 수정 후에 수정된 리뷰를 다시 가져와 `newTitle`, `newContents`를 업데이트하였습니다. 이렇게 하면 사용자가 페이지를 새로 고침하지 않아도 변경 사항이 UI에 바로 반영됩니다.

<div align="center" >
  
# Namu-Movie
</div>

### 개요
TMDB API 기반 영화 추천/검색 웹 서비스로 사용자에게 쉽고 빠르게 원하는 영화에 대한 상세정보를 제공함으로써 편의성을 극대화 시킬 수 있다.
- 인기 영화/검색/장르별 영화 검색 기능 등의 다양한 검색 방법을 제공해 사용자에게 편의성 제공

### 서비스 링크 : 

### 기술 스택
<table>
  <tr>
    <td><strong>스택</strong></td>
    <td>JS</td>
    <td>REACT</td>
    <td>tailwindCSS</td>
    <td>styled-components</td>
  </tr>
  <tr>
    <td></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" width="180" height="180"/></td>
    <td><img src="https://blog.kakaocdn.net/dn/doBY5S/btrlEmJSNSs/qmgj8lzzHRkt2b0WX5nSN1/img.png" width="180" height="180"/></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="180" height="180"/></td>
    <td><img src="https://i.ibb.co/ydkG6cv/img.png" width="180" height="180"/></td>
  </tr>
  <tr>
    <td><strong>라이브러리</strong></td>
    <td>RTK</td>
    <td>react-star-ratings</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.svg" width="180" height="180"/></td>
    <td><img src="https://raw.githubusercontent.com/ami1906/react-star-rating-lite/develop/public/filled.png" width="180"/></td>
    <td></td>
    <td></td>
  </tr>
</table>


### 개발 환경 세팅
```bash
npm install
npm start
```


## 팀원
- 공동 기획 후 1팀과 2팀으로 나뉘어 개발 진행
- 2팀 깃허브 링크 : https://github.com/FE-Sprint-Study/Movie-Wiki

| 1팀 |  |  | 2팀 |  |  |
| --- | --- | --- | --- | --- | --- |
| [김민재](https://github.com/crowcrow07) | [김영웅](https://github.com/novice-hero) | [황찬우](https://github.com/HChanWoo) | [김준표](https://github.com/KimJunpyo) | [김태우](https://github.com/TaeWooKim-SCH/) | [류지수](https://github.com/R-jisu) | 


## 기능 목록

### 무한스크롤(검색 페이지, 카테고리 페이지)

https://github.com/FE-Sprint-Study/Namu-Movie/assets/77836614/1af4948f-922d-45d6-9435-21aab3e12f5c

- 00개씩 가져오기/스크롤이 끝에 다다를 경우 00개를 더 가져와서 화면에 보여줍니다.
- 더 이상 불러올 데이터가 없을때 데이터가 없음을 보여줍니다.

### 캐러셀(메인 페이지)

https://github.com/FE-Sprint-Study/Namu-Movie/assets/77836614/6394fe68-891d-41d0-8dba-b8980b5433b9

- 캐러셀 설명

### 좌우 스크롤 (메인 페이지)
![좌우스크롤](https://github.com/FE-Sprint-Study/Namu-Movie/assets/88226519/2283771b-96fb-465e-bac2-c60b8b7e2235)

- 주제별 무비카드를 10개까지 보여줍니다.
- 무비카드에 Hover 시 줄거리를 보여줍니다.
- 무비카드 클릭 시 영화 상세 정보를 포함한 모달을 띄웁니다.
- 버튼 클릭을 이용해서 좌우 스크롤을 구현했습니다.

### 무비 카드 (메인 페이지)
- 무비 카드 호버시 상세 정보를 보여줍니다. </br>

![상세정보](https://github.com/FE-Sprint-Study/Namu-Movie/assets/88226519/261151c9-a179-412c-9695-fb20562ca74a)

- 무비 카드 클릭시 모달창을 띄워줍니다. </br>

![모달창](https://github.com/FE-Sprint-Study/Namu-Movie/assets/88226519/c02bc873-b2fa-4134-b1d0-cf2446859797)


### 영화 검색(검색 페이지)

https://github.com/FE-Sprint-Study/Namu-Movie/assets/77836614/73c48915-3054-463b-94d2-6503d0dcfee9

- 검색한 키워드가 포함된 영화
- 비슷한 영화 추천

### 카테고리 검색 / 스켈레톤 UI(카테고리 페이지)

https://github.com/FE-Sprint-Study/Namu-Movie/assets/77836614/5caca50c-0a41-4df4-bdd4-1bf04244def5

- 카테고리 검색
  - 카테고리(장르)별 영화 추천
- 스켈레톤 UI
  - 이미지 로딩 중일 때 스켈레톤 UI 사용

## 회고
- 김민재 : [까악이 블로그](https://crow07.tistory.com/entry/TMDB-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%98%81%ED%99%94-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%98%91%EC%97%85-%EC%97%B0%EC%8A%B5%ED%95%B4%EB%B3%B4%EA%B8%B0)
- 김영웅 : [애송이 개발자 탈출기](https://highero.tistory.com/entry/%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89-%EC%9B%B9-%ED%9A%8C%EA%B3%A0)
- 황찬우 : [한잔 하시죠](url)

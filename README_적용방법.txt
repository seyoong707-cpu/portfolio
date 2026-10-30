OHNAKYUNG | 영상디자이너 포트폴리오 리디자인
=================================================

포함 파일
  index.html               페이지 전체 구조
  css/style.css            PC / 모바일 전체 스타일
  js/script.js             프로젝트 10개 + 필터 + VIEW MORE + 팝업 + 메뉴 + 스크롤
  js/jquery.min.js         jQuery 3.6.1 (오프라인에서도 작동하도록 포함)
  images/main-hero.jpg     이전에 사용하던 노을 사진 1920x1080

[중요] 이 ZIP에는 기존 프로젝트 이미지/동영상/프로필/토끼 로고 원본은 포함되어 있지 않습니다.
현재 사용 중인 폴더의 아래 파일들은 삭제하지 마세요:
  images/logo.png
  images/profile-image.jpg
  images/banapresso_thumbnail1.jpg
  images/thumbnai_rd.jpg
  images/work3.jpg, images/work4.jpg, images/graphic1.jpg, images/book1.jpg 등
  videos/banapresso_ad.mp4, videos/youtube_radiu.mp4 등
  files/banapresso_storyboard.pdf 등

적용 순서
1. 기존 index.html / css/style.css / js/script.js를 먼저 백업합니다.
2. 새 index.html / css/style.css / js/script.js를 각각 같은 경로로 교체합니다.
3. js/jquery.min.js와 images/main-hero.jpg를 넣습니다.
4. 기존 이미지/영상/프로필/로고 파일은 유지합니다.
5. 예전 js/works-more.js 및 css/works-more.css는 이번 index.html에서 연결하지 않습니다.
   구버전 HTML에서 남은 중복 script 연결이 없는지 확인하세요.
6. Live Server로 실행하거나 브라우저에서 열어 확인하세요.

페이지 순서
  HOME → INTRO / MY VISION → WORKS (FEATURED VIDEO + OTHER PROJECTS)
  → ABOUT ME → CONTACT

작업물 데이터 수정
  js/script.js 상단 const projects = [...] 배열에서 제목, 경로, 역할을 바꾸세요.
  기존 10개 데이터가 유지되어 있습니다.
  FEATURED_INDICES = [0, 1, 2, 3] : 처음 4개 작품을 대표 영상으로 표시합니다.
  INITIAL_OTHER_COUNT = 4 : 기타 작업은 처음 4개 표시합니다.
  LOAD_STEP = 4 : 더보기 클릭 시 4개씩 증가합니다.
  바나프레소 광고는 기존 category: 'motion'을 유지하면서 AD 메뉴에서도 표시됩니다.

추가 확인이 필요한 사용자 원본 데이터
- 마지막 책 프로젝트 제목에 '20sdfsfsdfsdfsdf'가 남아 있으므로 공개 전에 정확히 수정하세요.
- '조선왕조국경영역'의 storyboard가 'banapresso_storyboard.pdf'로 연결되어
  잘못된 자료를 표시할 위험이 있어, 이번 버전에서는 해당 PDF 연결을 제외했습니다.
- 전시 하이라이트 / 공연 현장 스케치의 video가 비어 있습니다.
  실제 영상을 연결하면 상세 팝업에서 재생됩니다.
- CONTACT 전화번호 '010-0000-0000'은 예시 번호이므로 공개 사이트에서는 제외했습니다.
  필요하면 직접 실제 연락처와 공개 범위를 결정해 추가하세요.
- 실제 신간 광고 배너는 새 프로젝트로 등록하지 않았습니다. 실제 이미지 경로가
  준비되면 AD/GRAPHIC 분류로 추가할 수 있습니다.

테스트
  node --check로 script.js의 JavaScript 문법 검사를 통과했습니다.
  CSS 파싱 오류 및 중복 HTML ID는 발견되지 않았습니다.
  현재 작업 환경에서 브라우저 화면 자동 테스트는 제한되어 있으므로,
  최종 게시 전 데스크톱과 모바일에서 확인하세요.

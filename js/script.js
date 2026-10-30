/* =========================================================
   OHNAKYUNG | PORTFOLIO REDESIGN 2026
   FEATURED / OTHER VIEW MORE · VIEW LESS 통합본
   프로젝트 데이터는 기존 내용 그대로 유지했습니다.
   실제 이미지, 영상 파일은 images/ 와 videos/ 에 넣어 주세요.
   작품 01~04는 FEATURED VIDEO, 나머지는 OTHER PROJECTS입니다.
   AD 필터는 광고 형식 프로젝트를 함께 보여줍니다.
========================================================= */

const projects = [
  {
    title: 'banapresso cafe \n (바나프레소 광고)',
    category: 'motion',
    type: 'ai 광고 영상',
    year: '2026.10',
    image: 'images/banapresso_thumbnail1.jpg',
    video: 'videos/banapresso_ad.mp4',
    storyboard: 'files/banapresso_storyboard.pdf',
    previewImages: [
      'images/preview1.jpg', 'images/preview2.jpg',
      'images/preview3.jpg', 'images/preview4.jpg',
      'images/preview5.jpg', 'images/preview6.jpg'
    ],
    color: '#E7618A',
    role: '광고 기획 · 스토리보드 · 프롬프트 작성 · 컷 편집 · 색보정 · 음향 편집',
    contribution: '100%',
    aiUsage: '광고 영상 소스 생성',
    tools: 'ChatGPT · Google Flow · Premiere Pro · After Effects'
  },
  {
    title: '유튜브 채널 라디유 인트로',
    category: 'motion',
    type: '인트로',
    year: '2026',
    image: 'images/thumbnai_rd.jpg',
    video: 'videos/youtube_radiu.mp4',
    storyboard: [
      'images/preview_rd1.jpg', 'images/preview_rd2.jpg',
      'images/preview_rd3.jpg', 'images/preview_rd4.jpg'
    ],
    color: '#E7618A',
    description: '유튜브 크레이티브 라디유 채널 인트로',
    role: '프롬프트 작성 · 컷 편집 · 색보정 · 음향 편집',
    contribution: '100%',
    aiUsage: '유튜브 인트로 영상 제작',
    tools: 'ChatGPT · Premiere Pro · After Effects'
  },
  {
    title: '전시 하이라이트',
    category: 'film',
    type: '전시 영상',
    year: '2026',
    image: 'images/work3.jpg',
    video: '',
    color: '#263d65',
    description: '전시 공간의 분위기와 주요 장면을 기록한 하이라이트 영상입니다.',
    role: '촬영 · 편집 · 색보정',
    tools: 'Premiere Pro'
  },
  {
    title: '공연 현장 스케치',
    category: 'film',
    type: '공연 영상',
    year: '2026',
    image: 'images/work4.jpg',
    video: '',
    color: '#63436b',
    description: '공연 현장의 순간을 담아낸 영상 스케치입니다.',
    role: '촬영 · 편집',
    tools: 'Premiere Pro'
  },
  {
    title: '그래픽 디자인 프로젝트',
    category: 'graphic',
    type: '그래픽 디자인',
    year: '2026',
    image: 'images/graphic1.jpg',
    video: '',
    gallery: ['images/graphic1.jpg', 'images/graphic2.jpg', 'images/graphic3.jpg'],
    color: '#567c91',
    description: '포스터 및 그래픽 디자인 작업입니다.',
    role: '그래픽 디자인 · 레이아웃',
    tools: 'Illustrator · Photoshop'
  },
  {
    title: '조선왕조국경영역',
    category: 'book',
    type: '북디자인',
    projectType: '외주 프로젝트',
    workMode: '단독 작업',
    year: '2024.05',
    image: 'images/book1.jpg',
    video: '',
    // 도서용 스토리보드가 없는 경우 PDF 링크는 표시하지 않습니다.
    gallery: [
      'images/book1.jpg', 'images/book2.jpg',
      'images/book3.jpg', 'images/book4.jpg'
    ],
    color: '#a88972',
    description: '표지커버, 내지제작,도서 신간광고',
    role: '표지 디자인 · 내지 편집 ',
    tools: '한컴오피스· Illustrator · Photoshop',
    // 이 필드는 북디자인 전용 팝업에서만 사용합니다.
    bookInfo: {
      people: '1명',
      tasks: '표지 · 목차 · 간지 · 본문 편집',
      print: '인쇄용 파일 제작 · 검토 후 수정',
      contribution: '디자인 100% (단독 담당 기준)'
    },
    palette: ['#064579', '#191919', '#F1EDDF']
  },
  {
    title: '2027 UNION 엑스칼리버 시리즈',
    category: 'book',
    type: '시리즈 책',
    year: '2026.05',
    image: 'images/book1.jpg',
    video: '',
    gallery: [
      'images/book1.jpg', 'images/book2.jpg',
      'images/book3.jpg', 'images/book4.jpg'
    ],
    color: '#a88972',
    description: '표지컵, 내지,광고',
    role: '표지 디자인 · 내지 편집 · 레이아웃',
    tools: 'hwp(한글)· Illustrator · Photoshop'
  },
  {
    title: '2026 UNION 제15회 변호사시험 기출문제집',
    category: 'book',
    type: '시리즈 책',
    year: '2026.02',
    image: 'images/book1.jpg',
    video: '',
    gallery: [
      'images/book1.jpg', 'images/book2.jpg',
      'images/book3.jpg', 'images/book4.jpg'
    ],
    color: '#a88972',
    description: '표지컵, 내지,광고',
    role: '표지 디자인 · 내지 편집 · 레이아웃',
    tools: 'hwp(한글)· Illustrator · Photoshop'
  },
  {
    title: 'UNION 2025년도 1·2·3차 변호사시험 모의시험 기출문제집',
    category: 'book',
    type: '시리즈 책',
    year: '2026.06, 08 ,10',
    image: 'images/book1.jpg',
    video: '',
    gallery: [
      'images/book1.jpg', 'images/book2.jpg',
      'images/book3.jpg', 'images/book4.jpg'
    ],
    color: '#a88972',
    description: '표지컵, 내지,광고',
    role: '표지 디자인 · 내지 편집 · 레이아웃',
    tools: 'hwp(한글)· Illustrator · Photoshop'
  },
  {
    title: 'UNION 20sdfsfsdfsdfsdf 변호사시험 모의시험 기출문제집',
    category: 'book',
    type: '시리즈 책',
    year: '2026.06, 08 ,10',
    image: 'images/book1.jpg',
    video: '',
    gallery: [
      'images/book1.jpg', 'images/book2.jpg',
      'images/book3.jpg', 'images/book4.jpg'
    ],
    color: '#a88972',
    description: '표지컵, 내지,광고',
    role: '표지 디자인 · 내지 편집 · 레이아웃',
    tools: 'hwp(한글)· Illustrator · Photoshop'
  }
];

/* =========================================================
   사이트 기능 — jQuery / 단일 JS 파일 (중복 실행 방지)
========================================================= */
$(function () {
  'use strict';

  const $featuredGrid = $('#featuredGrid');
  const $otherGrid = $('#otherGrid');
  const $featuredSection = $('#featuredSection');
  const $otherSection = $('#otherSection');
  /* 02. 변수 및 더보기 설정 */
  const $featuredMoreWrap = $('#featuredMoreWrap');
  const $featuredMoreButton = $('#featuredLoadMore');
  const $moreWrap = $('#moreWrap');
  const $moreButton = $('#loadMoreWorks');
  const $empty = $('#worksEmpty');

  // 대표 영상은 배열의 0~3번 프로젝트(총 4개)입니다.
  // FEATURED에 새 영상을 추가하면 이 배열에도 프로젝트 인덱스를 추가하세요.
  const FEATURED_INDICES = [0, 1, 2, 3];

  const INITIAL_FEATURED_COUNT = 2; // 처음 대표 영상 2개 → 더보기 후 4개
  const FEATURED_LOAD_STEP = 2;
  const INITIAL_OTHER_COUNT = 4;    // 처음 기타 프로젝트 4개
  const OTHER_LOAD_STEP = 4;

  let activeFilter = 'all';
  let visibleFeaturedCount = INITIAL_FEATURED_COUNT;
  let visibleOtherCount = INITIAL_OTHER_COUNT;
  let lastFocusedElement = null;

  function matchesCategory(project, category) {
    if (category === 'all') return true;
    if (category === 'ad') {
      // 바나프레소는 MOTION에도, AD에도 노출하도록 광고 유형으로 판별
      return project.category === 'ad' ||
        (project.category === 'motion' && /광고/.test(project.type || ''));
    }
    return project.category === category;
  }

  function createCard(project, index, labelPrefix) {
    const $article = $('<article class="work-card"></article>');
    const $button = $('<button type="button" class="work-button"></button>')
      .attr('aria-label', project.title.replace(/\n/g, ' ') + ' 상세보기');
    const $thumb = $('<div class="thumb"></div>')
      .css('--project-color', project.color || '#5d6c78');
    const $fallback = $('<div class="thumb-fallback"></div>').text(project.title);
    $thumb.append($fallback);

    if (project.image) {
      const $img = $('<img loading="lazy">').attr({
        src: project.image,
        alt: project.title.replace(/\n/g, ' ') + ' 대표 이미지'
      });
      $img.on('load', function () { $fallback.addClass('hidden-by-image'); });
      $img.on('error', function () { $(this).remove(); });
      $thumb.append($img);
    }

    if (project.video) {
      $thumb.append('<span class="thumb-play" aria-hidden="true">▶</span>');
    }
    // 영상이 아직 연결되지 않은 항목임을 명확히 표시
    if (FEATURED_INDICES.includes(index) && !project.video && !project.gallery) {
      $thumb.append('<span class="thumb-note">영상 준비 중</span>');
    }
    $thumb.append('<span class="thumb-arrow" aria-hidden="true">↗</span>');

    const $caption = $('<div class="work-caption"></div>');
    const $text = $('<div></div>').append(
      $('<h4></h4>').text(project.title),
      $('<p></p>').text((labelPrefix ? labelPrefix + '  /  ' : '') + project.type)
    );
    const $year = $('<time></time>').text(project.year || '');
    $caption.append($text, $year);
    $button.append($thumb, $caption);
    $button.on('click', function () { openProject(index); });
    return $article.append($button);
  }

  function renderWorks() {
    const featured = [];
    const other = [];

    projects.forEach(function (project, index) {
      if (!matchesCategory(project, activeFilter)) return;
      const entry = { project: project, index: index };
      if (FEATURED_INDICES.includes(index)) featured.push(entry);
      else other.push(entry);
    });

    /* 05-1. FEATURED VIDEO: 지정한 개수만 표시 */
    $featuredGrid.empty();
    featured.slice(0, visibleFeaturedCount).forEach(function (item) {
      $featuredGrid.append(createCard(item.project, item.index, ''));
    });

    /* 05-2. OTHER PROJECTS: 지정한 개수만 표시 */
    $otherGrid.empty();
    other.slice(0, visibleOtherCount).forEach(function (item) {
      $otherGrid.append(createCard(item.project, item.index, ''));
    });

    $featuredSection.prop('hidden', featured.length === 0);
    $otherSection.prop('hidden', other.length === 0);
    $empty.prop('hidden', featured.length + other.length > 0);
    $('#featuredCount').text(featured.length ? String(featured.length).padStart(2, '0') + ' PROJECTS' : '');
    $('#otherCount').text(other.length ? String(other.length).padStart(2, '0') + ' PROJECTS' : '');

    /* 05-3. 버튼은 펼친 뒤에도 남기고 VIEW LESS로 전환 */
    const featuredAllShown = visibleFeaturedCount >= featured.length;
    $featuredMoreWrap.prop('hidden', featured.length <= INITIAL_FEATURED_COUNT);
    $featuredMoreButton
      .html(featuredAllShown
        ? 'VIEW LESS <span aria-hidden="true">−</span>'
        : 'VIEW MORE <span aria-hidden="true">+</span>')
      .attr('aria-label', featuredAllShown ? '대표 영상 접기' : '대표 영상 더 보기')
      .attr('aria-expanded', String(featuredAllShown));

    const otherAllShown = visibleOtherCount >= other.length;
    $moreWrap.prop('hidden', other.length <= INITIAL_OTHER_COUNT);
    $moreButton
      .html(otherAllShown
        ? 'VIEW LESS <span aria-hidden="true">−</span>'
        : 'VIEW MORE <span aria-hidden="true">+</span>')
      .attr('aria-label', otherAllShown ? '기타 작업물 접기' : '기타 작업물 더 보기')
      .attr('aria-expanded', String(otherAllShown));
  }

  /* 06. 카테고리 필터: 변경 시 각각 첫 표시 개수로 초기화 */
  $('.filter').on('click', function () {
    activeFilter = $(this).data('filter') || 'all';
    visibleFeaturedCount = INITIAL_FEATURED_COUNT;
    visibleOtherCount = INITIAL_OTHER_COUNT;
    $('.filter').removeClass('active').attr('aria-pressed', 'false');
    $(this).addClass('active').attr('aria-pressed', 'true');
    renderWorks();
  });

  /* 07-1. 대표 영상 VIEW MORE / VIEW LESS */
  $featuredMoreButton.on('click', function () {
    const totalFeatured = projects.filter(function (project, index) {
      return FEATURED_INDICES.includes(index) && matchesCategory(project, activeFilter);
    }).length;

    if (visibleFeaturedCount >= totalFeatured) {
      visibleFeaturedCount = INITIAL_FEATURED_COUNT;
    } else {
      visibleFeaturedCount += FEATURED_LOAD_STEP;
    }
    renderWorks();
  });

  /* 07-2. 기타 프로젝트 VIEW MORE / VIEW LESS */
  $moreButton.on('click', function () {
    const totalOther = projects.filter(function (project, index) {
      return !FEATURED_INDICES.includes(index) && matchesCategory(project, activeFilter);
    }).length;

    if (visibleOtherCount >= totalOther) {
      visibleOtherCount = INITIAL_OTHER_COUNT;
    } else {
      visibleOtherCount += OTHER_LOAD_STEP;
    }
    renderWorks();
  });

  /* 프로젝트 상세 팝업 — 기존 데이터(video / gallery / preview / storyboard) 지원 */
  function mediaGallery($target, images, name, className) {
    if (!Array.isArray(images) || !images.length) return;
    if (className) $target.addClass(className);
    images.forEach(function (src, i) {
      const $a = $('<a></a>').attr({ href: src, target: '_blank', rel: 'noopener' });
      const $img = $('<img loading="lazy">').attr({ src: src, alt: name + ' 이미지 ' + (i + 1) });
      $a.append($img);
      $target.append($a);
    });
  }

  function openProject(index) {
    const p = projects[index];
    if (!p) return;
    lastFocusedElement = document.activeElement;

    // 북디자인은 독립된 팝업 사용. 아래 기존 영상 팝업 코드는 그대로 유지합니다.
    if (p.category === 'book') {
      openBookProject(p);
      return;
    }

    $('#modalCategory').text((p.type || '') + '  /  ' + (p.year || ''));
    $('#modalTitle').text(p.title);
    $('#modalDescription').text(p.description || '프로젝트 작업 내용은 준비 중입니다.');
    $('#modalRole').text(p.role || '-');
    $('#modalTools').text(p.tools || '-');

    const $media = $('#modalMedia').empty().removeClass('gallery-mode');
    if (p.video) {
      $media.append($('<video controls playsinline preload="metadata"></video>').attr('src', p.video));
    } else if (Array.isArray(p.gallery) && p.gallery.length) {
      mediaGallery($media, p.gallery, p.title, 'gallery-mode');
    } else {
      $media.append($('<div class="video-placeholder"></div>').text('작업 영상 또는 이미지 준비 중입니다.'));
    }

    const previews = Array.isArray(p.previewImages) ? p.previewImages : [];
    $('#previewSection').prop('hidden', previews.length === 0);
    mediaGallery($('#modalPreviews').empty(), previews, p.title + ' 프리뷰');

    const storyboardImages = Array.isArray(p.storyboard) ? p.storyboard : [];
    const storyboardPdf = typeof p.storyboard === 'string' && p.storyboard.length ? p.storyboard : '';
    $('#storyboardSection').prop('hidden', !storyboardImages.length && !storyboardPdf);
    $('#modalStoryboardImages').empty().prop('hidden', storyboardImages.length === 0);
    mediaGallery($('#modalStoryboardImages'), storyboardImages, p.title + ' 스토리보드');
    const $storyboardLink = $('#modalStoryboard');
    $storyboardLink.prop('hidden', !storyboardPdf);
    // 다운로드 속성을 쓰지 않고 PDF 팝업에서 사용될 파일 경로만 기록합니다.
    if (storyboardPdf) $storyboardLink.data('pdfSrc', storyboardPdf);
    else $storyboardLink.removeData('pdfSrc');

    const $contribution = $('#contributionSection');
    $contribution.prop('hidden', !p.contribution);
    $('#modalContribution').text(p.contribution || '');
    const $details = $('#contributionDetails').empty();
    if (p.contribution) {
      const pct = Math.max(0, Math.min(100, parseFloat(p.contribution) || 0));
      const $bar = $('<div class="contribution-track"></div>');
      $bar.append($('<div></div>').css('width', pct + '%'));
      $details.append($bar, $('<p></p>').text('담당 작업: ' + (p.role || '-')));
      if (p.aiUsage) $details.append($('<p></p>').text('AI 활용 범위: ' + p.aiUsage));
    }

    $('#projectModal').addClass('open').attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');
    $('.close-modal').trigger('focus');
  }

  function closeProject() {
    $('#projectModal video').each(function () { this.pause(); });
    $('#projectModal').removeClass('open').attr('aria-hidden', 'true');
    $('body').css('overflow', '');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  }
  $('.close-modal, .modal-shade').on('click', closeProject);
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && !$('#pdfViewerModal').hasClass('open') && $('#projectModal').hasClass('open')) closeProject();
  });


  /* ==========================================================
     북디자인 전용 팝업. 기존 openProject 영상 처리 함수는 변경 없음.
     p.category === 'book'인 프로젝트에서만 아래 코드가 실행됩니다.
  ========================================================== */
  let bookGallerySources = [];
  let bookGalleryIndex = 0;
  let bookGalleryReturnFocus = null;

  function openBookProject(p) {
    const categoryText = [p.type, p.projectType, p.workMode, p.year]
      .filter(Boolean).join(' / ');
    $('#bookModalCategory').text(categoryText);
    $('#bookModalTitle').text(p.title || '북디자인 프로젝트');

    const sources = Array.isArray(p.gallery) && p.gallery.length
      ? p.gallery : (p.image ? [p.image] : []);
    bookGallerySources = sources.slice();
    const $gallery = $('#bookModalGallery').empty();

    if (!sources.length) {
      $gallery.append($('<p class="book-modal__image-error"></p>')
        .text('등록된 이미지가 없습니다.').show());
    }
    sources.forEach(function (src, i) {
      const $button = $('<button type="button" class="book-modal__thumb"></button>')
        .attr('aria-label', (p.title || '도서') + ' 이미지 ' + (i + 1) + ' 확대');
      const $img = $('<img loading="lazy">').attr({
        src: src,
        alt: (p.title || '도서') + ' 이미지 ' + (i + 1)
      });
      const $missing = $('<span class="book-modal__image-error"></span>')
        .text('이미지를 불러올 수 없습니다.\n' + src);
      $img.on('error', function () { $(this).hide(); $missing.show(); });
      $button.append($img, $missing);
      $button.on('click', function () {
        bookGalleryReturnFocus = this;
        openBookLightbox(i);
      });
      $gallery.append($button);
    });

    // 북디자인 프로젝트마다 등록된 필드만 출력합니다.
    // 다른 책에 없는 기여도/참여 인원 등을 임의로 생성하지 않습니다.
    const b = p.bookInfo && typeof p.bookInfo === 'object' ? p.bookInfo : {};
    const rows = [
      ['참여 인원', b.people],
      ['담당 업무', b.tasks || p.role],
      ['인쇄 작업', b.print],
      ['기여도', b.contribution]
    ].filter(function (row) { return Boolean(row[1]); });
    const $table = $('#bookModalInfoTable').empty();
    rows.forEach(function (row) {
      $table.append($('<div class="book-modal__info-row"></div>').append(
        $('<span></span>').text(row[0]),
        $('<p></p>').text(row[1])
      ));
    });
    $('#bookModalInfoSection').prop('hidden', rows.length === 0);

    const colors = Array.isArray(p.palette) ? p.palette.filter(function (hex) {
      return /^#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?$/.test(hex);
    }) : [];
    const $colors = $('#bookModalColors').empty();
    colors.forEach(function (hex) {
      $('<span class="book-modal__swatch"></span>')
        .css('background-color', hex)
        .attr({title: hex, 'aria-label': '색상 ' + hex})
        .appendTo($colors);
    });
    $('#bookModalPaletteSection').prop('hidden', !colors.length);
    $('#bookModalTools').text(p.tools || '');
    $('#bookModalToolsSection').prop('hidden', !p.tools);

    // 북디자인의 PDF는 pdf: 'files/책이름.pdf' 값이 있을 때만 나타납니다.
    const bookPdf = typeof p.pdf === 'string' ? p.pdf.trim() : '';
    $('#bookModalPdfSection').prop('hidden', !bookPdf);
    $('#bookModalPdfButton').data('pdfSrc', bookPdf || null);

    $('#bookProjectModal').addClass('open').attr('aria-hidden','false');
    $('body').css('overflow', 'hidden');
    $('.book-modal__close').trigger('focus');
  }

  function closeBookProject() {
    closeBookLightbox();
    $('#bookProjectModal').removeClass('open').attr('aria-hidden','true');
    $('body').css('overflow', '');
    bookGallerySources = [];
    if (lastFocusedElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus();
    }
  }

  function openBookLightbox(index) {
    if (!bookGallerySources.length) return;
    bookGalleryIndex = index;
    $('#bookLightboxTitle').text($('#bookModalTitle').text() + ' · 이미지 미리보기');
    $('#bookLightbox').addClass('open').attr('aria-hidden', 'false');
    updateBookLightbox();
    $('.book-lightbox__close').trigger('focus');
  }

  function updateBookLightbox() {
    const src = bookGallerySources[bookGalleryIndex];
    $('#bookLightboxError').prop('hidden',true);
    $('#bookLightboxImage').show().attr('src',src);
    $('#bookLightboxCounter').text((bookGalleryIndex + 1) + ' / ' + bookGallerySources.length);
    $('.book-lightbox__prev, .book-lightbox__next')
      .prop('hidden', bookGallerySources.length < 2);
  }

  function closeBookLightbox() {
    if (!$('#bookLightbox').hasClass('open')) return;
    $('#bookLightbox').removeClass('open').attr('aria-hidden','true');
    $('#bookLightboxImage').removeAttr('src');
    if (bookGalleryReturnFocus && document.contains(bookGalleryReturnFocus)) {
      bookGalleryReturnFocus.focus();
    }
    bookGalleryReturnFocus = null;
  }

  function moveBookLightbox(step) {
    if (!bookGallerySources.length) return;
    bookGalleryIndex = (bookGalleryIndex + step + bookGallerySources.length)
      % bookGallerySources.length;
    updateBookLightbox();
  }

  $('.book-modal__close, .book-modal__shade').on('click', closeBookProject);
  $('.book-lightbox__close, .book-lightbox__shade').on('click', closeBookLightbox);
  $('.book-lightbox__prev').on('click', function () { moveBookLightbox(-1); });
  $('.book-lightbox__next').on('click', function () { moveBookLightbox(1); });
  $('#bookLightboxImage').on('error', function () {
    $(this).hide();
    $('#bookLightboxError').prop('hidden',false);
  });
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && !$('#pdfViewerModal').hasClass('open')) {
      if ($('#bookLightbox').hasClass('open')) closeBookLightbox();
      else if ($('#bookProjectModal').hasClass('open')) closeBookProject();
    }
    if ($('#bookLightbox').hasClass('open')) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); moveBookLightbox(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); moveBookLightbox(1); }
    }
  });

  /* ==========================================================
     PDF 미리보기 팝업 - 영상 스토리보드 / 선택적 북디자인 PDF 공통
     다운로드 대신 iframe으로 PDF를 표시합니다.
  ========================================================== */
  let pdfReturnFocus = null;

  function openPdfViewer(src, title) {
    if (!src || typeof src !== 'string') return;
    pdfReturnFocus = document.activeElement;
    $('#pdfViewerTitle').text((title || '프로젝트') + ' · PDF 미리보기');
    $('#pdfViewerFrame').attr('src', src);
    $('#pdfViewerModal').addClass('open').attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');
    $('.pdf-viewer-modal__close').trigger('focus');
  }

  function closePdfViewer() {
    if (!$('#pdfViewerModal').hasClass('open')) return;
    $('#pdfViewerModal').removeClass('open').attr('aria-hidden', 'true');
    // 닫았을 때는 메모리와 PDF 로딩을 해제합니다.
    $('#pdfViewerFrame').removeAttr('src');
    if (!$('#projectModal').hasClass('open') && !$('#bookProjectModal').hasClass('open')) {
      $('body').css('overflow', '');
    }
    if (pdfReturnFocus && document.contains(pdfReturnFocus)) pdfReturnFocus.focus();
    pdfReturnFocus = null;
  }

  // 바나프레소 등 기존 영상 프로젝트의 STORYBOARD PDF 버튼
  $('#modalStoryboard').on('click', function () {
    openPdfViewer($(this).data('pdfSrc'), $('#modalTitle').text());
  });
  // 책에 pdf 필드가 있는 경우에만 표시되는 북디자인 버튼
  $('#bookModalPdfButton').on('click', function () {
    openPdfViewer($(this).data('pdfSrc'), $('#bookModalTitle').text());
  });
  $('.pdf-viewer-modal__close, .pdf-viewer-modal__shade').on('click', closePdfViewer);
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $('#pdfViewerModal').hasClass('open')) {
      e.preventDefault();
      closePdfViewer();
    }
  });

  /* 모바일 메뉴 — 아이보리 배경 / 검정 글씨 */
  $('.menu-button').on('click', function () {
    const isOpen = $('#siteNav').toggleClass('open').hasClass('open');
    $(this).attr('aria-expanded', String(isOpen)).attr('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    // 메뉴가 열려 있을 때 헤더 배경도 밝게
    $('.header').toggleClass('menu-open', isOpen);
  });
  $('#siteNav a').on('click', function () {
    $('#siteNav').removeClass('open');
    $('.menu-button').attr('aria-expanded', 'false').attr('aria-label', '메뉴 열기');
    $('.header').removeClass('menu-open');
  });

  /* 스크롤 시 헤더 스타일 + 히어로 사진 밝기 (은은한 효과만 적용) */
  const $hero = $('.hero-image-section');
  let ticking = false;
  function handleScroll() {
    const y = $(window).scrollTop() || 0;
    $('.header').toggleClass('is-scrolled', y > 80);
    const h = $hero.outerHeight() || 1;
    const progress = Math.min(1, Math.max(0, y / (h * 0.9)));
    $hero.css('--hero-gradient-opacity', String(progress));
    ticking = false;
  }
  $(window).on('scroll resize', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(handleScroll);
  });
  handleScroll();
  renderWorks();
});

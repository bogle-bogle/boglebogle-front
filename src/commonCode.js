export const productMain = {
  FD: '식품',
  TO: '장난감',
  SP: '용품',
  FS: '의류',
};

export const proteinCode = {
  P01: '소고기',
  P02: '양고기',
  P03: '돼지고기',
  P04: '닭고기',
  P05: '오리고기',
  P06: '연어',
  P07: '생선',
  P08: '베지/곤충',
  P09: '혼합',
  P10: '캥거루',
  P11: '칠면조',
  P12: '토끼고기',
  P13: '기타',
};

export const animalCode = {
  DOG: '강아지',
  CAT: '고양이',
  ETC: '기타',
};

export const productSub = {
  11: '티셔츠',
  12: '아우터',
  13: '드레스',
  14: '올인원',
  15: 'ACC',
  16: '기타',
  21: '하우스',
  22: '하네스 리드줄',
  23: '이동가방',
  24: '유모차',
  25: '카시트',
  26: '장난감',
  27: '기타',
  31: '목욕용품',
  32: '케어용품',
  33: '기타',
  41: '퍼피',
  42: '시니어',
  43: '전연령(어덜트)',
};

export const branchCode = {
  40000: '더현대 서울',
  46000: '더현대 대구',
  71000: '가산점',
  72000: '김포점',
  74000: '송도점',
  75000: '가든파이브점',
  78000: 'SPACE 1',
};

export const breedCode = {
  D01: '포메라니안',
  D02: '저먼 셰퍼드',
  D03: '불독',
  D04: '푸들',
  D05: '치와와',
  D06: '말티즈',
  D07: '시바견',
  D08: '골든 리트리버',
  D09: '시베리안 허스키',
  D10: '닥스훈트',
  D11: '시츄',
  D12: '도베르만',
  D13: '그레이트 데인',
  D14: '웰시코기',
  D15: '요크셔 테리어',
  D16: '차우차우',
  D17: '달마시안',
  D18: '비숑',
  D19: '이탈리안 그레이하운드',
  D20: '샤페이',
  D21: '아프간 하운드',
  D22: '페키니즈',
  D23: '세인트버나드',
  D24: '잭 러셀 테리어',
  D25: '사모예드견',
  D26: '보더 콜리',
  D27: '비글',
  D28: '진돗개',
  D29: '불 테리어',
  D30: '퍼그',
  D99: '믹스',
};

export const sizeCode = {
  'D-BG': '대형견',
  'D-MD': '중형견',
  'D-SM': '소형견',
};

export const shopCategory = {
  FD: {
    name: '식품',
    subCategory: {
      43: '전연령',
      41: '퍼피',
      42: '시니어',
      44: '어덜트',
    },
  },
  TO: {
    name: '장난감',
    subCategory: {
      21: '일반',
      22: '공/원반',
    },
  },
  SP: {
    name: '용품',
    subCategory: {
      31: '위생',
      32: '산책',
      33: '펫가전',
    },
  },
  FS: {
    name: '의류',
    subCategory: {
      11: '대형견',
      12: '중/소형견',
    },
  },
};

export const mbtiCategory = {
  ENFP: {
    title: '활발하고 순발력이 뛰어난멍',
    like: 'ISTJ',
    dislike: 'ISTP',
  },
  ENFJ: {
    title: '사교적이고 에너지 넘치는 활발멍',
    like: 'ISTP',
    dislike: 'ISTJ',
  },
  ISTJ: {
    title: '책임이 강한 집사 바라기',
    like: 'ENFP',
    dislike: 'ENFJ',
  },
  ENTJ: {
    title: '단호하고 철저한 단호박멍',
    like: 'ISFP',
    dislike: 'ISFJ',
  },
  ISTP: {
    title: '조용하지만 적응력이 강한 가랑비',
    like: 'ENFJ',
    dislike: 'ENFP',
  },
  ESTJ: {
    title: '어려운 문제를 해결하는 똑똑멍',
    like: 'INFP',
    dislike: 'INFJ',
  },
  ESFP: {
    title: '궁금한게 많은 호기심 대마왕',
    like: 'INTJ',
    dislike: 'INTP',
  },
  ESFJ: {
    title: '모두에게 친절한 신사 숙녀멍',
    like: 'INTP',
    dislike: 'INTJ',
  },
  ISFP: {
    title: '새로운 것을 찾아다니는 모험가',
    like: 'ENTJ',
    dislike: 'ENTP',
  },
  INTJ: {
    title: '독립적이고 시크한 차도멍',
    like: 'ESFP',
    dislike: 'ESFJ',
  },
  ISFJ: {
    title: '헌신적이고 따뜻한 우리집 수호자',
    like: 'ENTP',
    dislike: 'ENTJ',
  },
  ENTP: {
    title: '모든 것이 궁금한 괴짜 사색가',
    like: 'ISFJ',
    dislike: 'ISFP',
  },
  INFJ: {
    title: '멍멍계의 평화주의자',
    like: 'ESTP',
    dislike: 'ESTJ',
  },
  INFP: {
    title: '상상의 나라로 풍~덩',
    like: 'ESTJ',
    dislike: 'ESTP',
  },
  ESTP: {
    title: '한 번 내 친구는 영원한 내친구',
    like: 'INFJ',
    dislike: 'INFP',
  },
  INTP: {
    title: '하나부터 열까지 탐색하는 똑똑멍',
    like: 'ESFJ',
    dislike: 'ESFP',
  },
};

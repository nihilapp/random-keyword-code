import { IConfig } from '@/types';

export const siteData: IConfig = {
  siteTitle: '랜덤 키워드 2',
  siteDescription: '창작자분들을 대상으로 만든 키워드 선정 프로그램입니다. 그림쟁이 분들이나 글쟁이 분들이 보다 편하고 쉽게 영감을 찾을 수 있도록 도와주는 사이트입니다. 버튼 하나를 클릭하는 것으로 키워드를 던져줍니다. 주기적으로 키워드가 업데이트 됩니다.',
  siteKeywords: '영감, 글쟁이, 그림쟁이, 창작 아이디어, 창작 키워드, 랜덤 키워드, 랜덤 단어, 단어, 창작, 키워드',
  siteType: 'website',
  siteUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/keyword'
    : 'https://nihilapp.github.io/keyword',
  siteImage: '/images/blog-image.png',
  siteVersion: 'v3.4.0',
  siteYear: 2021,
};

import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  // subsets : font의 유형이 뭔지를 알려줄때 사용함,, 필수항목임
  subsets: ['latin'],
  // swap : 시스템 폰트로 보여주다가 렌더링후 로드된 웹폰트로 변경
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// localFont는 모듈이 아니므로 상대경로로 표시해야 함
export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});

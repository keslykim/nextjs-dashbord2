import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts'; //절대 경로로 작성..(파일위치 변경시 유용)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}

import { ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}
export default function GlobalError({ children }: ErrorProps) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
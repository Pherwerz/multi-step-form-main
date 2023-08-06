import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Multi-step form',
  description: 'Multi-step form by Pherwerz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://pherwerz.dev">Pherwerz</a>.
        </div>
      </body>
    </html>
  );
}

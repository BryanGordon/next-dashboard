import './ui/global.css'
import { outfit } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho por Vercel
        </footer>
      </body>
    </html>
  );
}

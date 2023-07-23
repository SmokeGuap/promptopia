import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Promtopia',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

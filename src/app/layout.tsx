import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitssey Widget next.js examples',
  description: '',
}

// let the compiler know about new window elements
declare global {
    interface Window {
        lb: any
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script>
        {`
        (function(i,s,o,g,r,a,m){i['FitsseyWidget']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,
        'script',
        'https://app.fitssey.com/assets/js/lb.widget.prod.js',
        'lb');
        lb('init','{your-studio-uuid}');
        `}
        </Script>
      </head>
      <body className={inter.className}>
      <nav>
          <Link href="/">Homepage</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/course">Course</Link>
      </nav>
      {children}
      </body>
    </html>
  )
}

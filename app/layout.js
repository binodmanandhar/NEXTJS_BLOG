import "@styles/globals.css";

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Suspense } from 'react'

export const metadata = {
  title: "Next Js Blog",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <Suspense fallback={<div>Loading...</div>}>
            {children}
            </Suspense>
          </main>
        </Provider>
      </body>
    </html>
  );
}

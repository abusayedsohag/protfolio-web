import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Protfolio-sayed",
  description: "This is my protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pap... (from CDN)"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased bg-[#14001B]">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

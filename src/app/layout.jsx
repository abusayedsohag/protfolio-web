import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Protfolio-sayed",
  description: "This is my protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased bg-[#14001B]">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

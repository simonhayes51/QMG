export const metadata = {
  title: "The Quizmaster General — North East's Leading Quiz Provider",
  description: "Pub quizzes, music bingo, themed events and more across the North East. Book The Quizmaster General for your venue or private event.",
  openGraph: {
    title: "The Quizmaster General",
    description: "North East's Leading Quiz Provider",
    url: "https://www.thequizmastergeneral.com",
    type: "website"
  }
};

import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

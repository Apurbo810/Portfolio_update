import "./styles/globals.css";
import "./styles/Typeeffect.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Apurbo — Portfolio",
  description: "Personal website of Apurbo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className="antialiased">
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}

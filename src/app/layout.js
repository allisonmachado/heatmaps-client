import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habits Tracker",
  description: "A better way to stay consistent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">
              {metadata.title}
            </a>
          </nav>
        </header>
        <div className="container-fluid">{children}</div>
        <footer className="mt-4 py-2 bg-light text-center">
          <p>&copy; {metadata.description}. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

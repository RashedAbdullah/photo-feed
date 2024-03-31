import { Roboto } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata = {
  title: "PhotoFeed",
  description: "A Gallery website with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}

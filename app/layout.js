import "./globals.css";
import { Heebo, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Dental Web",
  description: "Generic dental web",
  icons:"/diente.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

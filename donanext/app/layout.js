import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/header/Header";
// import { redirect } from 'next/navigation'
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Dona Tend",
  description: "Dona Tend || Tents,Pergola and stuff like that!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyTshirtStore",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>   <div className="min-h-screen flex flex-col"><ToastContainer /><NavBar /><main className="flex-grow">{children}</main><Footer /></div></body>

    </html>
  );
}

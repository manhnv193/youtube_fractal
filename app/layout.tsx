import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

// Gọi hàm Kanit để tải font chữ từ google font, trả về một object chứa các class name
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Khai báo metadata cho trang web
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


// Khai báo layout root chứa các component con
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      {/* Thêm class name cho body và chèn các component children vào body */}
      <body className={kanit.className}> {children} </body>
    </html>
  );
}

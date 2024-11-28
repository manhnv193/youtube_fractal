import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";
import MobileButton from "@/components/custom/MobileButton";


// Khai báo layout chung cho toàn bộ các trang con
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
        <Header />
        <MobileButton />
        {children}
        <Footer />
    </>
  );
}

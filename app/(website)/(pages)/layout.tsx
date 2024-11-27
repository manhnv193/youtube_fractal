
// Khai báo layout root chứa các component con
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
        <Headers />
        <MobileButtom />
        {children}
        <Footers />
    </>
  );
}

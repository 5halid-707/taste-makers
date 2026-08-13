import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "صناع الطعم | Taste Makers — مطبخ فاخر",
  description: "صناع الطعم — أطباق شعبية فاخرة بلمسة عصرية. اطلب الآن وتمتع بأشهى المأكولات.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

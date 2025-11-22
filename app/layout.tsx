import "./globals.css";
import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";

const baloo = Baloo_2({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "LingoJoy | Playful World Language Hub",
  description:
    "منصة تعليمية ممتعة لتعلّم لغات العالم من خلال قصص تفاعلية، ألعاب صغيرة، وتمارين نطق ذكية."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${baloo.variable} ${inter.variable} bg-midnight text-white`}>
        {children}
      </body>
    </html>
  );
}

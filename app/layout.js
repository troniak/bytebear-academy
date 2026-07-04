import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "ByteBear Academy | AI-Enabled STEM Education for Kids 6–14",
  description:
    "AI-enabled STEM education for kids 6–14. ByteBear Academy inspires the next generation of creators, problem solvers, and innovators — proudly based in Canada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

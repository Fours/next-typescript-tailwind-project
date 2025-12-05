import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import NavBar from "./components/NavBar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-montserrat-alternates"
})

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

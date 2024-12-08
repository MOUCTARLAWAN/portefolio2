import localFont from "next/font/local";
import "./globals.css";
import {JetBrains_Mono} from "next/font/google"
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
 
const jetbrainsMono = JetBrains_Mono ({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
})
export const metadata = {
  title: "LAWAN MOUCTAR",
  description: "portefolio site ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={jetbrainsMono.variable}>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
          
      </body>
    </html>
  );
}

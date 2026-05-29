import type { Metadata } from "next";
import { Montserrat, Poppins, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Oxford English Medium School | Seethamadhara, Visakhapatnam",
  description: "Welcome to Adarsh Oxford English Medium School, Seethamadhara, Visakhapatnam. A Way and a Vision. A premium educational brand focused on academic excellence, holistic growth, and trusted admissions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[#1E293B] bg-white">
        {children}
      </body>
    </html>
  );
}

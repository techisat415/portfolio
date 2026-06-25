import { Work_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "300", "400", "500", "600", "700"],
});
const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Saksham | Developer Portfolio",
  description: "Minimalist engineering portfolio modeled on Aptifolio styling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          html {
            scrollbar-width: thin;
            scrollbar-color: #1a1a1a #f4f0e8;
          }
          ::-webkit-scrollbar { width: 8px; height: 8px; }
          ::-webkit-scrollbar-thumb {
            background: #1a1a1a;
            border-radius: 10px;
            border: 2px solid #f4f0e8;
            background-clip: padding-box;
          }
          ::-webkit-scrollbar-track { background: #f4f0e8; }
        `}</style>
      </head>
      {/* Added selection modifiers to ensure the mouse selection highlight uses the theme colors globally */}
      <body className={`${workSans.variable} ${courier.variable} font-sans bg-apt-bg text-apt-primary min-h-screen antialiased selection:bg-apt-primary selection:text-apt-bg`}>
        {children}
      </body>
    </html>
  );
}
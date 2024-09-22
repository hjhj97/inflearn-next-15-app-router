import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 BOOK STORE</Link>
          </header>
          <main>{children}</main>
          <footer>Developed by Neon</footer>
        </div>
      </body>
    </html>
  );
}

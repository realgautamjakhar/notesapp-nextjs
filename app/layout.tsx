import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          <nav>
            <ul>
              <li>
                {" "}
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link href={"/notes"}>Notes</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

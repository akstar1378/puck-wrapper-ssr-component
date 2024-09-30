import "./styles.css";
import { ssrgetDataProvider } from "../app/contex/ssrgetDataContex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ssrgetDataProvider>{children}</ssrgetDataProvider>
      </body>
    </html>
  );
}

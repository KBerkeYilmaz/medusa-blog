
import Dashboard from "@components/Dashboard";

export const metadata = {
  title: "Admin panel",
};


export default function RootLayout({ props, children }) {
  return (
    <html lang="en">
      <body>
        <Dashboard>
          {children}
        </Dashboard>
      </body>
    </html>
  );
}

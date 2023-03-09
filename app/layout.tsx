import "./globals.css"
import MyProvider from "./provider"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const timezone = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  ).then((res) => res.json())

  return (
    <html lang="en" className="antialiased scroll-smooth">
      <MyProvider>
        <body className="font-serif bg-[url('/background.svg')] bg-fixed">
          <main className="mx-auto max-w-2xl sm:px-6 lg:px-8 mt-12">
            {children}
          </main>
          <footer className="mx-auto max-w-2xl sm:px-6 lg:px-8 mt-12">
            Have a footer-tastic day; we learned a timezone:{" "}
            {timezone.abbreviation} - very cool!
          </footer>
        </body>
      </MyProvider>
    </html>
  )
}

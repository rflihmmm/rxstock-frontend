import { Inter } from "next/font/google"
import "../globals.css"
import Sidebar from "@/components/dashboard/sidebar"
import Header from "@/components/dashboard/header"
import BreadcrumbDashboard from "@/components/dashboard/breadcrumb-dashboard"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <Header children={<BreadcrumbDashboard />} />
        <main className="lg:pl-20 md:pl-20 pl-5">{children}</main>
      </body>
    </html>
  )
}

import Link from "next/link"
import notFound from "@/public/images/404.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import "./globals.css"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-1 items-center">
      <Image src={notFound} alt="not-found" className="w-1/2 lg:w-1/4" />
      <h1 className="text-[2rem] my-5">Halaman Tidak Ditemukan</h1>
      <Link href="/">
        <Button variant="">Kembali</Button>
      </Link>
    </div>
  )
}

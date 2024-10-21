"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbDashboard() {
  const paths = usePathname()
  let currentLink = ""
  const pathNames = paths
    .split("/")
    .filter((path) => path)
    .map((link, index) => {
      currentLink += `/${link}`
      let itemLink = link[0].toUpperCase() + link.slice(1, link.length)
      return (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink href={currentLink}>{itemLink}</BreadcrumbLink>
        </BreadcrumbItem>
      )
    })

  return (
    <Breadcrumb className="flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

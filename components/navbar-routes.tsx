"use client"

import { UserButton, useAuth } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Home } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { isTeacher } from "@/lib/teacher"

import { SearchInput } from "./search-input"

export const NavbarRoutes = () => {
  const { userId } = useAuth()
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith("/teacher")
  const isCoursePage = pathname?.includes("/courses")
  const isSearchPage = pathname === "/search"

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="outline">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="outline">
              Teacher Dashboard
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
}

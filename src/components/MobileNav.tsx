"use client"
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Input } from "./ui/input";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
type Props = {}
// this is a test
const MobileNav = (props: Props) => {
    const [open, setOpen] = React.useState(false)

  return (
    <>
    <Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button className='mr-2 px-0 py-2 text-base  md:hidden'>Open</Button>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</>
  )
}

export default MobileNav
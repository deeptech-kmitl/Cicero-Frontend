import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, Heart, User } from 'lucide-react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
            
            <Navbar />
            <MobileNav />
            <div className="flex items-center justify-end gap-2	">
					{/* Search Input  */}
					<div className="relative flex items-center ">
						<Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
						<Input
							placeholder="Your search..."
							className=" pl-8 rounded-xl w-[200px] focus-visible:ring-slate-400"
						/>
					</div>
					<ShoppingBag className="h-6 w-6" />
						<Heart className="h-6 w-6" />
					<User className="h-6 w-6" />
				</div>
        </div>
           
        </header>
  )
}

export default Header
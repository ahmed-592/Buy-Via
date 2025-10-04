"use client";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Loader2, ShoppingCartIcon } from "lucide-react";
import NavbarPho from "../NavbarPho/NavbarPho";
import { Badge } from "@/components/ui/badge";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
  const { loading, cartData } = useContext(CartContext);

  const session = useSession();


  return <>
      <nav className="bg-gray-100 font-semibold shadow py-2 sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-4 sm:px-0">

            <Link href={"/"}>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md font-bold">
                  BV
                </div>
                <span className="text-xl font-bold">
                  Buy<span className="text-blue-600">Via</span>
                </span>
              </div>

            </Link>

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={"/products"}>Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={"/categories"}>Categories</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={"/brands"}>Brands</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex justify-between items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className= {session.status==="authenticated" ? 'size-6 cursor-pointer hidden md:block' : 'size-6 cursor-pointer' } >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                 {session.status==="authenticated" ? <>
                 
                  <Link href={"/profile"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <Link href={"/cart"}>
                    <DropdownMenuItem>Cart</DropdownMenuItem>
                  </Link>
                  <Link href={"/wishlist"}>
                    <DropdownMenuItem>Wish List</DropdownMenuItem>
                  </Link>
                  <Link href={"/allorders"}>
                    <DropdownMenuItem>All Orders</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={()=> signOut({
                    callbackUrl: '/'
                  })}>Log Out</DropdownMenuItem>
                 </> : <>
                 <Link href={"/login"}>
                    <DropdownMenuItem>Log In</DropdownMenuItem>
                  </Link>
                  <Link href={"/register"}>
                    <DropdownMenuItem>Register</DropdownMenuItem>
                  </Link>
                  
                 
                 </>}
                 
                  
                </DropdownMenuContent>
              </DropdownMenu>

              {session.status==="authenticated" && <>
              
              
              <Link href={"/cart"} className="p-3 relative">
                <ShoppingCartIcon />
                <Badge className="absolute size-4 pb-1.5 pt-1 px-1 top-0 end-0 rounded-full ">
                  <span>{loading ? <Loader2 className="animate-spin size-4" /> : cartData?.numOfCartItems}</span>
                </Badge>
              </Link>
              </>}

              <NavbarPho /> 
            </div>
          </div>
        </div>
      </nav>
    </>


              }
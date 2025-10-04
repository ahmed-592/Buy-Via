"use client";
import React, { useState } from "react";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { MenuIcon, XIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function NavbarPho() {
  const [toggle, setToggle] = useState(false);
  const session = useSession();
  return (
    <>
      {toggle ? (
        <XIcon
          onClick={() => setToggle(false)}
          className="absolute z-1 end-4 block md:hidden cursor-pointer"
        />
      ) : (
        <MenuIcon
          onClick={() => setToggle(true)}
          className="md:hidden cursor-pointer"
        />
      )}

      {toggle ? (
        <div className="bg-gray-50 w-full h-screen absolute top-0 end-0 transition-all duration-1000 md:hidden">
          <NavigationMenu className="py-10 px-3">
            <NavigationMenuList className="flex-col items-start">
              {session.status === "authenticated" ?
                <>
                  <NavigationMenuItem>


                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/profile"} onClick={() => setToggle(false)}>
                        Profile
                      </Link>
                    </NavigationMenuLink>


                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/products"} onClick={() => setToggle(false)}>
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/categories"} onClick={() => setToggle(false)}>
                        Categories
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/brands"} onClick={() => setToggle(false)}>
                        Brands
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/cart"} onClick={() => setToggle(false)}>
                        Cart
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/wishlist"} onClick={() => setToggle(false)}>
                        Wish List
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/allorders"} onClick={() => setToggle(false)}>
                        All Orders
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/"} onClick={() => signOut({
                        callbackUrl: '/'
                      })}>Log Out</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </>
                :

                <>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/products"} onClick={() => setToggle(false)}>
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/categories"} onClick={() => setToggle(false)}>
                        Categories
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/brands"} onClick={() => setToggle(false)}>
                        Brands
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>




                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/login"} onClick={() => setToggle(false)}>
                        Log in
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/register"} onClick={() => setToggle(false)}>
                        Register
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </>



              }



            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ) : (
        <div className="bg-gray-50 w-[300] h-screen absolute top-0 -end-100 transition-all duration-1000 md:hidden">
          <NavigationMenu className="py-10 px-3">
            <NavigationMenuList className="flex-col items-start">
              {session.status === "authenticated" ?
                <>
                  <NavigationMenuItem>


                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/profile"} onClick={() => setToggle(false)}>
                        Profile
                      </Link>
                    </NavigationMenuLink>


                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/products"} onClick={() => setToggle(false)}>
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/categories"} onClick={() => setToggle(false)}>
                        Categories
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/brands"} onClick={() => setToggle(false)}>
                        Brands
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/cart"} onClick={() => setToggle(false)}>
                        Cart
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>



                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/wishlist"} onClick={() => setToggle(false)}>
                        Wish List
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/allorders"} onClick={() => setToggle(false)}>
                        All Orders
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>






                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl" onClick={() => signOut({
                      callbackUrl: '/'
                    })}>
                      Log Out
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </>
                :

                <>




                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/products"} onClick={() => setToggle(false)}>
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/categories"} onClick={() => setToggle(false)}>
                        Categories
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/brands"} onClick={() => setToggle(false)}>
                        Brands
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>




                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/login"} onClick={() => setToggle(false)}>
                        Log in
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl">
                      <Link href={"/register"} onClick={() => setToggle(false)}>
                        Register
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </>



              }



            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  );
}

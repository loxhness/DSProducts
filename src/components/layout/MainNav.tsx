"use client";

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import Link from 'next/link';

export function MainNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { name: 'Home', path: '/' },
        {
            name: 'Products',
            path: '/products',
            subItems: [
                { name: 'Hair Wax Stick', path: '/products/hair-wax-stick' }
            ]
        },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-rose-900 transition-all duration-300 hover:text-rose-700">
                        Daamiya Beauty
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {routes.map((route) => (
                                    <NavigationMenuItem key={route.path}>
                                        {route.subItems ? (
                                            <>
                                                <NavigationMenuTrigger
                                                    className={`${
                                                        pathname === route.path
                                                            ? 'text-rose-600'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    {route.name}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className="p-4 w-48">
                                                        {route.subItems.map((item) => (
                                                            <Link
                                                                key={item.path}
                                                                href={item.path}
                                                                className="block py-2 px-4 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-md"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <Link href={route.path} legacyBehavior passHref>
                                                <Button
                                                    variant="ghost"
                                                    className={`${
                                                        pathname === route.path
                                                            ? 'text-rose-600 bg-rose-50'
                                                            : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                                                    } transition-all duration-300`}
                                                >
                                                    {route.name}
                                                </Button>
                                            </Link>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-4">
                                {routes.map((route) => (
                                    <div key={route.path}>
                                        {route.subItems ? (
                                            <>
                                                <div className="font-medium text-gray-600 mb-2">{route.name}</div>
                                                {route.subItems.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        href={item.path}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="w-full pl-4 justify-start text-gray-600"
                                                        >
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </>
                                        ) : (
                                            <Link href={route.path}>
                                                <Button
                                                    variant="ghost"
                                                    className={`w-full ${
                                                        pathname === route.path
                                                            ? 'text-rose-600 bg-rose-50'
                                                            : 'text-gray-600'
                                                    }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {route.name}
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
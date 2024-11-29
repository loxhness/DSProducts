"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { PageTransition } from "@/components/animations/PageTransitions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter } from "lucide-react";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card>
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <motion.div
                                    className="flex-1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <img
                                        src="/api/placeholder/400/400"
                                        alt="Daamiya Suboor"
                                        className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
                                    />
                                </motion.div>
                                <motion.div
                                    className="flex-1 space-y-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h1 className="text-4xl font-bold text-gray-900">About Daamiya</h1>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Hi! I'm Daamiya Suboor, a passionate beauty enthusiast who believes in creating products
                                        that make hair styling effortless and enjoyable. With years of experience in the beauty
                                        industry, I understand the importance of quality products that deliver results.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        My journey began when I noticed a gap in the market for easy-to-use, effective hair styling
                                        products. This led to the creation of our signature Hair Wax Stick, designed to make
                                        hair styling accessible to everyone.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button variant="ghost" size="icon">
                                            <Instagram className="text-rose-600 hover:text-rose-700 w-6 h-6" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Twitter className="text-rose-600 hover:text-rose-700 w-6 h-6" />
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </PageTransition>
    );
}
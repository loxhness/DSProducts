"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/PageTransitions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-900 mb-8 text-center"
                >
                    Get in Touch
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div>
                                        <Input placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <Input type="email" placeholder="Your Email" />
                                    </div>
                                    <div>
                    <textarea
                        className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                        placeholder="Your Message"
                    />
                                    </div>
                                    <Button className="w-full bg-rose-600 hover:bg-rose-700">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-rose-600" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-600">contact@daamiyabeauty.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-rose-600" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-rose-600" />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-gray-600">123 Beauty Street<br />New York, NY 10001</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
}
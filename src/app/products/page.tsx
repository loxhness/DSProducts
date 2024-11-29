"use client";

import { PageTransition } from "@/components/animations/PageTransitions";
import { ProductImages } from "@/components/ProductImages";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetail() {
    const product = {
        name: "Hair Wax Stick",
        price: "$14.99",
        description: "Perfect for styling and maintaining your edges. Our premium hair wax stick provides long-lasting hold while keeping your hair healthy and styled all day long.",
        rating: 4.8,
        reviews: 128,
        features: [
            "Long-lasting hold",
            "Non-greasy formula",
            "Travel-friendly",
            "Easy application",
            "Suitable for all hair types"
        ],
        details: [
            "Made with natural ingredients",
            "Water-resistant formula",
            "No residue",
            "Pleasant fragrance",
            "Compact design"
        ]
    };

    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <ProductImages />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <Star className="text-yellow-400 fill-current" />
                                <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <p className="text-2xl font-bold text-rose-600">{product.price}</p>

                        <p className="text-gray-600 text-lg">{product.description}</p>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Key Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                    <Badge key={index} variant="secondary">{feature}</Badge>
                                ))}
                            </div>
                        </div>

                        <Card className="p-4">
                            <h3 className="font-semibold mb-2">Product Details</h3>
                            <ul className="space-y-2">
                                {product.details.map((detail, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-rose-500" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700">
                            <ShoppingBag className="mr-2" /> Add to Cart
                        </Button>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
}
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/styling-wax-front.png', alt: 'Hair Wax Front View' },
    { src: '/images/styling-wax-front-dark.png', alt: 'Hair Wax Front Dark View' },
    { src: '/images/styling-wax-back.png', alt: 'Hair Wax Back View' },
    { src: '/images/styling-wax-back-white.png', alt: 'Hair Wax Back White View' },
    { src: '/images/styling-wax-capoff-white.png', alt: 'Hair Wax Cap Off View' }
];

export function ProductImages({ className = "" }: { className?: string }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className={`space-y-4 ${className}`}>
            <motion.div
                className="aspect-square rounded-xl bg-white p-2 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.img
                    key={selectedImage}
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                    <button
                        key={image.src}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-lg overflow-hidden ${
                            selectedImage === index ? 'ring-2 ring-rose-500' : ''
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-square object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
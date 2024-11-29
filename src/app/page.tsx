"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/PageTransitions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Heart, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const benefits = [
    { icon: TrendingUp, title: "Long-Lasting Hold", description: "Keeps your style in place all day without the need for touch-ups" },
    { icon: Heart, title: "Non-Greasy Formula", description: "Lightweight feel that doesn't weigh your hair down" },
    { icon: ShieldCheck, title: "Travel-Friendly", description: "Compact design perfect for your on-the-go lifestyle" }
  ];

  const reviews = [
    { name: "Sarah M.", rating: 5, comment: "Finally found a wax that actually holds my edges!" },
    { name: "Jessica R.", rating: 5, comment: "Love how easy it is to apply. No mess, no fuss." },
    { name: "Michelle K.", rating: 5, comment: "Perfect size for my purse and works amazingly well." }
  ];

  return (
      <PageTransition>
        {/* Hero Section - Split Design */}
        <section className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[90vh]">
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.6}}
                  className="space-y-8"
              >
                <div className="space-y-4">
                  <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm">Premium Hair Care</Badge>
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Style With <span className="text-rose-600">Confidence</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Experience the perfect blend of hold and care with our innovative hair wax stick.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/products/hair-wax-stick">
                    <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                      Shop Now <ArrowRight className="ml-2"/>
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-rose-600"/>
                    <span>Natural Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-rose-600"/>
                    <span>Easy Application</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.6, delay: 0.2}}
                  className="relative"
              >
                <div className="relative aspect-square">
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
                  <img
                      src="/images/styling-wax-front.png"
                      alt="Hair Wax Stick"
                      className="relative z-10 w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Hair Wax?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Designed with your lifestyle in mind, our hair wax stick combines premium quality with practical convenience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                  <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <benefit.icon className="w-12 h-12 text-rose-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-gray-900">Premium Quality<br />For Premium Results</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Professional Grade</h3>
                      <p className="text-gray-600">Salon-quality results from the comfort of your home</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Easy Application</h3>
                      <p className="text-gray-600">Precise control for perfect styling every time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">All-Day Hold</h3>
                      <p className="text-gray-600">Stays in place without stiffness or residue</p>
                    </div>
                  </div>
                </div>
                <Link href="/products/hair-wax-stick">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    View Details
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
              >
                <img
                    src="/images/styling-wax-capoff-white.png"
                    alt="Hair Wax Application"
                    className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600">Join thousands of satisfied customers who've transformed their hair care routine</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                  <motion.div
                      key={review.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{review.comment}"</p>
                      <p className="font-semibold">{review.name}</p>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-rose-100 to-rose-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Ready to Transform Your Hair Routine?
              </h2>
              <p className="text-gray-600 text-lg">
                Join thousands of satisfied customers who've discovered the perfect solution for their hair styling needs.
              </p>
              <Link href="/products/hair-wax-stick">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Shop Now <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </PageTransition>
  );
}
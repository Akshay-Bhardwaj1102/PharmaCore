"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Globe, Zap } from "lucide-react";
import { Navbar } from "./ui/navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <Image
              src="/images/about-team.jpg"
              alt="PharmaCore team"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl font-bold mb-4">About PharmaCore</h1>
              <p className="text-xl text-white/90">
                Trusted Partner in Pharmaceutical Excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Founded with a mission to revolutionize pharmaceutical
                manufacturing, PharmaCore has grown to become a trusted partner
                for healthcare businesses worldwide.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                With decades of combined expertise in pharmaceutical science,
                quality assurance, and regulatory compliance, our team is
                dedicated to delivering excellence in every product.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We believe that accessible, high-quality medicines are
                fundamental to improving lives globally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/manufacturing.jpg"
                alt="Manufacturing facility"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Our Core Values
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Award,
                  title: "Quality",
                  description:
                    "Unwavering commitment to pharmaceutical excellence",
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description: "Collaborative relationships with our clients",
                },
                {
                  icon: Globe,
                  title: "Accessibility",
                  description: "Making quality medicines globally available",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "Continuous improvement in processes and products",
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-lg shadow-md text-center"
                  >
                    <Icon className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Key Milestones
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                year: "2005",
                achievement: "Founded PharmaCore with commitment to excellence",
              },
              { year: "2008", achievement: "Achieved WHO-GMP certification" },
              { year: "2012", achievement: "Expanded to 50+ countries" },
              {
                year: "2018",
                achievement: "Launched white-label manufacturing services",
              },
              {
                year: "2023",
                achievement: "Reached 1 million patients served globally",
              },
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                <div className="min-w-24">
                  <span className="text-3xl font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="text-lg text-foreground/80">
                    {milestone.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team Stats */}
        <section className="py-16 md:py-24 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Employees" },
                { number: "50+", label: "Countries" },
                { number: "100M+", label: "Units Produced" },
                { number: "98%", label: "Customer Satisfaction" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl font-bold mb-2">{stat.number}</p>
                  <p className="text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

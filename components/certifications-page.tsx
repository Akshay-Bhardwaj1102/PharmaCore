'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Award, Briefcase } from 'lucide-react'
import { Navbar } from './ui/navbar'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-4">Certifications & Compliance</h1>
              <p className="text-xl text-white/90">
                Rigorous quality standards and regulatory certifications ensuring excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Certifications */}
        <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">International Certifications</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Award,
                title: 'WHO-GMP Certification',
                description: 'World Health Organization Good Manufacturing Practice certification ensuring compliance with international pharmaceutical standards',
                year: '2008'
              },
              {
                icon: Shield,
                title: 'ISO 9001:2015',
                description: 'Quality Management System certification demonstrating our commitment to consistent excellence',
                year: '2010'
              },
              {
                icon: CheckCircle2,
                title: 'ISO 13485:2016',
                description: 'Medical Device Quality Management certification for pharmaceutical manufacturing processes',
                year: '2012'
              },
              {
                icon: Briefcase,
                title: 'FDA Compliance',
                description: 'Full compliance with FDA regulations for export to United States and other regulated markets',
                year: '2011'
              }
            ].map((cert, idx) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border-2 border-secondary rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-foreground/70 mb-4">{cert.description}</p>
                  <span className="text-sm font-semibold text-primary">Certified {cert.year}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Quality Standards */}
        <section className="py-16 md:py-24 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">Quality Standards & Compliance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Manufacturing Excellence',
                  items: ['WHO-GMP Facility', 'ISO 9001 Processes', 'Six Sigma Methodology', 'Continuous Improvement']
                },
                {
                  title: 'Safety & Testing',
                  items: ['Stability Testing', 'Microbial Testing', 'Sterility Assurance', 'Pyrogen Testing']
                },
                {
                  title: 'Documentation & Audit',
                  items: ['Complete Traceability', 'Regular Audits', 'Compliance Records', 'Quality Reports']
                }
              ].map((standard, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8"
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">{standard.title}</h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Compliance */}
        <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Regional Regulatory Approvals</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'FDA - United States',
              'EMA - European Union',
              'TGA - Australia',
              'Health Canada',
              'PMDA - Japan',
              'MHRA - United Kingdom',
              'ANVISA - Brazil',
              'SFDA - China',
              'CDSCO - India'
            ].map((approval, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-primary text-primary-foreground rounded-lg p-6 flex items-center justify-center text-center font-semibold"
              >
                ✓ {approval}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 md:py-24 px-4 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Every certification we hold represents our unwavering dedication to producing safe, effective, and high-quality pharmaceutical products. We continuously invest in our facilities, processes, and people to exceed international standards and maintain the trust of our partners and patients worldwide.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

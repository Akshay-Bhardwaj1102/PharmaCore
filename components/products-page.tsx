"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Package2,
  ChevronRight,
  FlaskConical,
  ArrowRight,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Tablets", "Capsules", "Syrups", "Injections"];

const products = [
  // Tablets
  {
    id: 1,
    name: "Amoxicillin 500mg",
    category: "Tablets",
    composition: "Amoxicillin Trihydrate 500mg",
    packaging: "10 Tablets / Blister",
    image: "/images/tablets.jpg",
    description:
      "Broad-spectrum antibiotic for bacterial infections. Effective against respiratory tract infections, urinary tract infections, and skin infections.",
    tags: ["Antibiotic", "Prescription"],
  },
  {
    id: 2,
    name: "Metformin 500mg",
    category: "Tablets",
    composition: "Metformin Hydrochloride 500mg",
    packaging: "10 Tablets / Strip",
    image: "/images/tablets.jpg",
    description:
      "First-line medication for type 2 diabetes management. Helps control blood sugar levels with excellent safety profile.",
    tags: ["Antidiabetic", "Prescription"],
  },
  {
    id: 3,
    name: "Paracetamol 650mg",
    category: "Tablets",
    composition: "Paracetamol IP 650mg",
    packaging: "10 Tablets / Blister",
    image: "/images/tablets.jpg",
    description:
      "Trusted analgesic and antipyretic for relief from fever and mild to moderate pain including headache and body ache.",
    tags: ["Analgesic", "OTC"],
  },
  {
    id: 4,
    name: "Atorvastatin 10mg",
    category: "Tablets",
    composition: "Atorvastatin Calcium 10mg",
    packaging: "10 Tablets / Blister",
    image: "/images/tablets.jpg",
    description:
      "HMG-CoA reductase inhibitor for management of hyperlipidemia and prevention of cardiovascular disease.",
    tags: ["Cardiovascular", "Prescription"],
  },
  // Capsules
  {
    id: 5,
    name: "Omeprazole 20mg",
    category: "Capsules",
    composition: "Omeprazole IP 20mg",
    packaging: "10 Capsules / Strip",
    image: "/images/capsules.jpg",
    description:
      "Proton pump inhibitor for gastric acid reduction. Indicated for peptic ulcer, GERD, and Helicobacter pylori eradication.",
    tags: ["Gastro", "Prescription"],
  },
  {
    id: 6,
    name: "Vitamin D3 60000 IU",
    category: "Capsules",
    composition: "Cholecalciferol 60000 IU",
    packaging: "4 Capsules / Strip",
    image: "/images/capsules.jpg",
    description:
      "Vital supplement for bone health, immunity, and calcium absorption. Indicated for vitamin D deficiency.",
    tags: ["Supplement", "OTC"],
  },
  {
    id: 7,
    name: "Methylcobalamin 1500mcg",
    category: "Capsules",
    composition:
      "Methylcobalamin 1500mcg, Alpha Lipoic Acid 100mg, Pyridoxine 3mg",
    packaging: "10 Capsules / Strip",
    image: "/images/capsules.jpg",
    description:
      "Neurotropic vitamin combination for neuropathy, nerve damage, and diabetic peripheral neuropathy.",
    tags: ["Neuropathy", "OTC"],
  },
  // Syrups
  {
    id: 8,
    name: "Azithromycin 200mg/5ml",
    category: "Syrups",
    composition: "Azithromycin Dihydrate 200mg per 5ml",
    packaging: "30ml Bottle with Oral Syringe",
    image: "/images/syrups.jpg",
    description:
      "Macrolide antibiotic suspension for paediatric use. Effective against respiratory and skin bacterial infections.",
    tags: ["Antibiotic", "Paediatric", "Prescription"],
  },
  {
    id: 9,
    name: "Cough Relief Syrup",
    category: "Syrups",
    composition: "Bromhexine HCl 4mg + Guaifenesin 100mg + Menthol 1mg / 5ml",
    packaging: "100ml Bottle",
    image: "/images/syrups.jpg",
    description:
      "Mucolytic and expectorant combination for productive cough, chest congestion, and bronchitis.",
    tags: ["Respiratory", "OTC"],
  },
  {
    id: 10,
    name: "Paediatric Multivitamin",
    category: "Syrups",
    composition: "Vitamins A, B-Complex, C, D3, Zinc per 5ml",
    packaging: "200ml Bottle",
    image: "/images/syrups.jpg",
    description:
      "Comprehensive vitamin and mineral supplement for children. Supports growth, immunity, and cognitive development.",
    tags: ["Supplement", "Paediatric", "OTC"],
  },
  // Injections
  {
    id: 11,
    name: "Amikacin 250mg/ml",
    category: "Injections",
    composition: "Amikacin Sulfate 250mg/ml",
    packaging: "2ml Vial",
    image: "/images/injections.jpg",
    description:
      "Aminoglycoside antibiotic injection for severe systemic infections caused by gram-negative bacteria.",
    tags: ["Antibiotic", "Prescription", "Hospital"],
  },
  {
    id: 12,
    name: "Dexamethasone 4mg/ml",
    category: "Injections",
    composition: "Dexamethasone Sodium Phosphate 4mg/ml",
    packaging: "2ml Ampoule",
    image: "/images/injections.jpg",
    description:
      "Corticosteroid injection for anti-inflammatory and immunosuppressant therapy in severe conditions.",
    tags: ["Corticosteroid", "Prescription", "Hospital"],
  },
];

interface ProductDetailProps {
  product: (typeof products)[0];
  onClose: () => void;
}

function ProductDetail({ product, onClose }: ProductDetailProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-border max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-foreground hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <h2 className="text-xl font-bold text-white">{product.name}</h2>
            <Badge className="mt-1 bg-white/20 text-white border-none">
              {product.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground leading-relaxed mb-5">
            {product.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-muted rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Composition
              </p>
              <p className="text-sm font-medium text-foreground">
                {product.composition}
              </p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Packaging
              </p>
              <p className="text-sm font-medium text-foreground">
                {product.packaging}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild className="flex-1">
              <Link href="/contact">Request Quotation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/white-label">White Label This</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.composition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Page header */}
      <section className="bg-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-balance mb-4">
            Our Product Range
          </h1>
          <p className="text-white/65 max-w-2xl leading-relaxed">
            Browse our complete catalogue of WHO-GMP certified medicines across
            all major therapeutic categories. Available for distribution and
            white labeling.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or composition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          products
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/90 backdrop-blur-sm text-foreground border-none"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">
                    {product.composition}
                  </p>
                  <div className="flex items-center gap-1.5 mb-3">
                    <Package2 className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {product.packaging}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs py-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FlaskConical className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground font-semibold mb-2">
              No products found
            </p>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Enquire CTA */}
        <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-bold text-foreground text-lg mb-1">
              {"Can't find what you're looking for?"}
            </h3>
            <p className="text-muted-foreground text-sm">
              We manufacture 500+ products. Contact us with your requirements
              for a custom quote.
            </p>
          </div>
          <Button asChild className="shrink-0">
            <Link href="/contact">
              Request Custom Product <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

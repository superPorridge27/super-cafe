'use client';

import { useState, useMemo } from 'react';
import { Category, MENU_ITEMS } from '@/data/menu';
import { Hero } from '@/components/Hero';
import { FilterBar } from '@/components/FilterBar';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 selection:bg-[#a855f7] selection:text-white">
      <CartDrawer />
      <Hero />
      <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No rations found in this sector.
          </div>
        )}
      </div>
    </main>
  );
}

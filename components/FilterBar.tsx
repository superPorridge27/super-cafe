'use client';

import { CATEGORIES, Category } from '@/data/menu';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { ShoppingBag } from 'lucide-react';

interface Props {
    activeCategory: Category;
    onSelect: (category: Category) => void;
}

export const FilterBar = ({ activeCategory, onSelect }: Props) => {
    const { items } = useCartStore();
    const openCart = useUIStore((state) => state.openCart);

    return (
        <div className="sticky top-0 z-40 w-full py-4 bg-background/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <div className="overflow-x-auto no-scrollbar flex-1 mr-4">
                    <div className="flex gap-2 min-w-max">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => onSelect(cat)}
                                className={clsx(
                                    "relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                    activeCategory === cat ? "text-background" : "text-slate-400 hover:text-white"
                                )}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={openCart}
                    className="relative p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0 group"
                >
                    <ShoppingBag className="text-white group-hover:text-[#a855f7] transition-colors" />
                    {items.length > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#a855f7] rounded-full text-[10px] font-bold flex items-center justify-center text-white border-2 border-black">
                            {items.length}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

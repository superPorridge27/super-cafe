'use client';

import { MenuItem } from '@/data/menu';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';

interface Props {
    item: MenuItem;
}

export const ProductCard = ({ item }: Props) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const openCart = useUIStore((state) => state.openCart);

    const handleAdd = () => {
        addToCart(item);
        openCart();
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
            transition={{ duration: 0.3 }}
            className="group relative glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#a855f7]/50 transition-colors duration-300"
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-3 left-3 z-20">
                    <p className="text-xs font-bold text-white/80 uppercase tracking-wider bg-black/50 backdrop-blur-md px-2 py-1 rounded-md">
                        {item.category}
                    </p>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white font-space leading-tight">{item.name}</h3>
                    <span className="text-lg font-mono text-white/90 ml-2">${item.price}</span>
                </div>

                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                    {item.description}
                </p>

                <button
                    onClick={handleAdd}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all group-hover:bg-[#a855f7] group-hover:text-white group-hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                    <Plus size={18} />
                    ADD TO ORDER
                </button>
            </div>
        </motion.div>
    );
};

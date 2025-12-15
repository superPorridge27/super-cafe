'use client';

import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export const CartDrawer = () => {
    const { items, removeFromCart, getTotalPrice } = useCartStore();
    const { isCartOpen, closeCart } = useUIStore();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-50 flex flex-col shadow-2xl"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-[#a855f7]" />
                                <h2 className="text-xl font-bold font-space">Your Cargo</h2>
                                <span className="bg-white/10 text-xs font-mono py-1 px-2 rounded-full">
                                    {items.length}
                                </span>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                        <ShoppingBag size={32} className="opacity-50" />
                                    </div>
                                    <p>Bay is empty.</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        key={item.cartId}
                                        className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <div className="w-16 h-16 rounded-lg bg-white/5 overflow-hidden relative flex-shrink-0">
                                            {/* We could use Image here if we want, but keeping it simple for list */}
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                                            <p className="text-slate-400 text-xs mb-2">{item.category}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-[#a855f7]">${item.price}</span>
                                                <button
                                                    onClick={() => removeFromCart(item.cartId)}
                                                    className="text-slate-500 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 bg-white/5 border-t border-white/10">
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-slate-400">Total</span>
                                    <span className="text-3xl font-mono font-bold text-white">
                                        ${getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                                <button className="w-full py-4 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-purple-900/30">
                                    INITIATE CHECKOUT
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

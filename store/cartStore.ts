import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '@/data/menu';

export interface CartItem extends MenuItem {
    cartId: string;
}

interface CartState {
    items: CartItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (cartId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addToCart: (item) =>
                set((state) => ({
                    items: [...state.items, { ...item, cartId: crypto.randomUUID() }],
                })),
            removeFromCart: (cartId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.cartId !== cartId),
                })),
            clearCart: () => set({ items: [] }),
            getTotalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
        }),
        {
            name: 'super-cafe-cart-v2', // Changed storage key for new structure
        }
    )
);

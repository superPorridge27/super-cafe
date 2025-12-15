export type Category = 'All' | 'Coffee' | 'Rations' | 'Sweet';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    image: string;
}

export const CATEGORIES: Category[] = ['All', 'Coffee', 'Rations', 'Sweet'];

export const MENU_ITEMS: MenuItem[] = [
    // COFFEE
    {
        id: 'c1',
        name: 'Nebula Latte',
        description: 'Infused with nitrogen micro-bubbles and lavender stardust.',
        price: 8,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'c2',
        name: 'Void Espresso',
        description: 'Double shot extracted at absolute zero. Pitch black.',
        price: 5,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'c3',
        name: 'Solar Flare Cold Brew',
        description: 'Steeped for 24 hours under simulated binary suns.',
        price: 7,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'c4',
        name: 'Lunar Cappuccino',
        description: 'Topped with moon-dust cocoa and meteorite foam.',
        price: 7.5,
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop',
    },

    // RATIONS
    {
        id: 'f1',
        name: 'Orbital Avocado Toast',
        description: 'Hydroponic avocado on charcoal sourdough with chili flakes.',
        price: 16,
        category: 'Rations',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'f2',
        name: 'Cyberpunk Bagel',
        description: 'Everything bagel with neon salmon and holographic cream cheese.',
        price: 12,
        category: 'Rations',
        image: 'https://images.unsplash.com/photo-1743104750646-cfd7a48192ee?q=80&w=1000&auto=format&fit=crop', // Bagel (Different Long ID)
    },
    {
        id: 'f3',
        name: 'Hyper-Salad bowl',
        description: 'Zero-gravity grown kale, quinoa, and synthetic protein.',
        price: 14,
        category: 'Rations',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'f4',
        name: 'Warp-Drive Wrap',
        description: 'Spicy chicken, ancient grains, wrapped in a nebula tortilla.',
        price: 13,
        category: 'Rations',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000&auto=format&fit=crop',
    },

    // SWEET
    {
        id: 's1',
        name: 'Meteor Croissant',
        description: 'Flaky pastry dusted with edible gold and dark chocolate.',
        price: 6.5,
        category: 'Sweet',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 's2',
        name: 'Quantum Donut',
        description: 'Glazed with ultraviolet berry reduction.',
        price: 5.5,
        category: 'Sweet',
        image: 'https://images.unsplash.com/photo-1678859119995-4b75a2e86ec5?q=80&w=1000&auto=format&fit=crop', // Kobby Mendez Donut (q54Oxq44MZs -> 1551106652-a5bcf4b2d153)
    },
    {
        id: 's3',
        name: 'Stardust Macarons',
        description: 'Assorted flavors: Lychee, Voidberry, and Matcha.',
        price: 9,
        category: 'Sweet',
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 's4',
        name: 'Singularity Cake',
        description: 'Dense dark chocolate cake that absorbs all light.',
        price: 10,
        category: 'Sweet',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    },
];

export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PLN'
    });
}

export const foodItems = [
    {
        name: 'Che Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 1
    },
    {
        name: 'Pe Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 2

    },
    {
        name: 'Ch Pizza',
        img: '/img/chpizza.jpeg',
        section: 'Pizza',
        price: 3
    },
    {
        name: 'Ve Pizza',
        img: '/img/vepizza.jpeg',
        section: 'Pizza',
        price: 4

    },
    {
        name: 'Fries',
        img: '/img/fries.jpeg',
        section: 'Sides',
        price: 1.5
    },
    {
        name: 'Batat',
        img: '/img/batat.jpeg',
        section: 'Sides',
        price: 1.5
    },
    {
        name: 'Chi Salad',
        img: '/img/salad.jpeg',
        section: 'Salad',
        price: 5
    },
    {
        name: 'Cho Salad',
        img: '/img/salad1.jpeg',
        section: 'Salad',
        price: 5
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
import { createSlice } from "@reduxjs/toolkit";


const merchandiseList = createSlice({
    name: 'merchandise',
    initialState:{
        list: [
            {
                id: 1,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-can-t-work-today-my-arm-is-in-a-cast-men-s-tshirt-28969004204147_280x.jpg?v=1639440966',
                name: 'Shirt 1',
                quantity: 1,
                price: 12,
                discount: ''
            },
            {
                id: 2,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-youth-t-shirts-ask-me-about-my-ninja-disguise-flip-youth-tshirt-28968375615603_360x.jpg?v=1639426560',
                name: 'Shirt 2',
                quantity: 2,
                price: 21,
                discount: ''
            },
            {
                id: 3,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-that-sounds-like-a-horrible-idea-what-time-men-s-tshirt-29748599685235_540x.jpg?v=1651043029',
                name: 'Shirt 3',
                quantity: 3,
                price: 30,
                discount: ''
            },
            {
                id: 4,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-callahan-auto-parts-men-s-tshirt-28527032205427_200x.jpg?v=1631921453',
                name: 'Shirt 4',
                quantity: 4,
                price: 40,
                discount: ''
            },
            {
                id: 5,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-fitness-taco-in-my-mouth-men-s-tshirt-31116864422003_200x.png?v=1667974023',
                name: 'Shirt 5',
                quantity: 5,
                price: 50,
                discount: ''
            },
            {
                id: 6,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-hide-and-seek-champion-men-s-tshirt-29289030451315_120x.jpg?v=1645042387',
                name: 'Shirt 6',
                quantity: 6,
                price: 60,
                discount: ''
            },
            {
                id: 7,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-the-coolest-pop-men-s-tshirt-28452441096307_120x.jpg?v=1631756231',
                name: 'Shirt 7',
                quantity: 7,
                price: 70,
                discount: ''
            },
            {
                id: 8,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-my-favorite-people-call-me-papa-men-s-tshirt-29745007493235_540x.jpg?v=1651010826',
                name: 'Shirt 8',
                quantity: 8,
                price: 80,
                discount: ''
            },
            {
                id: 9,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-science-like-magic-but-real-men-s-tshirt-29748755693683_120x.jpg?v=1651035844',
                name: 'Shirt 9',
                quantity: 9,
                price: 90,
                discount: ''
            },
            {
                id: 10,    
                url: 'https://cdn.shopify.com/s/files/1/2959/1448/products/crazy-dog-t-shirts-mens-t-shirts-deez-nuts-men-s-tshirt-31134524538995_1080x.jpg?v=1668093530',
                name: 'Shirt 10',
                quantity: 10,
                price: 100,
                discount: ''
            }
        ]
    },
    reducers: {}
});

const reducer = merchandiseList.reducer;


export { reducer }
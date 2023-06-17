import { v4 as uuid } from 'uuid';

export const books = [
    {
        id: uuid(),
        image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
        title: "Atomic Habits",
        rating: 4.5,
        writer: "James Clear",
        isReading: true,
        wantToRead: false,
        read: false
    },
    {
        id: uuid(),
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg",
        title: "Wings of fire",
        rating: 4.8,
        writer: "A. P. J. Abdul Kal",
        isReading: false,
        wantToRead: true,
        read: false
    },
    {
        id: uuid(),
        image: "https://m.media-amazon.com/images/I/510ASCR9goL._SX394_BO1,204,203,200_.jpg",
        title: "Twelfth Fail",
        rating: 4.2,
        writer: "Anurag Pathak",
        isReading: false,
        wantToRead: false,
        read: false
    },

    {
        id: uuid(),
        image: "https://eloquentjavascript.net/img/cover.jpg",
        title: "Eloquent JavaScript",
        rating: 4.2,
        writer: "Marijn Haverbeke",
        isReading: true,
        wantToRead: false,
        read: false
    },
    {
        id: uuid(),
        image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
        title: "Atomic Habits",
        rating: 4.5,
        writer: "James Clear",
        isReading: false,
        wantToRead: false,
        read: true
    },
    {
        id: uuid(),
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg",
        title: "Wings of fire",
        rating: 4.8,
        writer: "A. P. J. Abdul Kala",
        isReading: false,
        wantToRead: true,
        read: false
    },

    {
        id: uuid(),
        image: "https://eloquentjavascript.net/img/cover.jpg",
        title: "Eloquent JavaScript",
        rating: 4.2,
        writer: "Marijn Haverbeke",
        isReading: false,
        wantToRead: false,
        read: true
    },

];

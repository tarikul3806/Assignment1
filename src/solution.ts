

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    }

    return !value;

}

 




function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}





class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("Alice", 30);




interface Item {
    name: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}

const items: Item[] = [
    { name: "Item 1", rating: 5 },
    { name: "Item 2", rating: 3 },
    { name: "Item 3", rating: 4 }
];





interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

const users: User[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: true },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
]





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(books: Book[]): void {
    books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${book.isAvailable}`);
    });
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails([myBook]);



function getUniqueValues<T extends string | number>(
    array1: T[],
    array2: T[]
): T[] {
    const result: T[] = [];

    for (const value of array1) {
        let exists = false;

        for (const item of result) {
            if (item === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(value);
        }
    }

    for (const value of array2) {
        let exists = false;

        for (const item of result) {
            if (item === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(value);
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];





interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => {
        const productPrice = product.price * product.quantity;
        const discount = product.discount ?? 0;
        const finalPrice = productPrice - (productPrice * discount / 100);

        return total + finalPrice;
    }, 0);
}





























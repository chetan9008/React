let book = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book1.jpg',
        id: 1
    }
    , {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
        , id: 2
    }
]

let getBook = (id) => {
    let item = book.find((object) => object.id === id)
    return item;
}

export { book };

export {getBook};
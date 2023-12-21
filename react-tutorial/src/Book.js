
function Book({ img, author, title, functionExample, id }) {
    let findBook = () => {
        let input = document.querySelector('.inputBook').value;
        console.log(functionExample(input));
        if (functionExample(input) !== undefined) {
            console.log(`${input} is find`);
        }
        else {
            console.log(`${input} is not find`);
        }
    }
    let findBookById = () => {
        console.log(functionExample(id));
    }
    return <>
        <article className="book">
            Enter the book name :<input className='inputBook'></input>
            <button onClick={findBook}>Find Book</button>
            <button onClick={findBookById}>Find Book By Id</button>
            <button onClick={() => {
                console.log(functionExample(id));
            }}>Find Book By Another Approch</button>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h2>{author}</h2>
        </article>
    </>
}

export default Book;
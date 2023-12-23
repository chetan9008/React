
function Book({ img, author, title, functionExample, id }) {
    return <>
        <article className="book">
            <p># {id}</p>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h2>{author}</h2>
        </article>
    </>
}

export default Book;
let Book =  (props)=>{
    let title =  props.title;
    let Author = props.Author;

    return <>
    <h2>{title}</h2>
    <p>{Author}</p>
    </>
}

export { Book } ;
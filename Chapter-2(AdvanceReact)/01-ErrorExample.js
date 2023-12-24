
function App() {
    let count = 0
    let incrementFunction = () => {
        count++;
        console.log(count);
    }
    return (
        <>
            <h1>Count :  {count}</h1>
            <button onClick={incrementFunction}>Increment Me</button>
        </>
    )
}

export default App

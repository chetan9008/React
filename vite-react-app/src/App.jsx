import { people } from './data'
const App = () => {
  return (
    <>
      {people.map((value, index) => {
        return <Person {...value} key={index} />
      })}
    </>
  )
}

let Person = ({ name ,nickName ,image }) => {
  console.log(image);
  return <>
    <h2>{name} {nickName}</h2>
    {/* <p>{url}</p> */}
  </>
}
export default App
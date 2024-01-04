import { people, defaultAvatar } from './data'
const App = () => {
    return (
        <>
            {people.map((value, index) => {
                return <Person {...value} key={index} />
            })}
        </>
    )
}

let Person = ({ name, nickName = "chintu", image }) => {
    // let url = image && image[0] && image[0].small && image[0].small.url;
    // let url  = image?.[0]?.small?.url || defaultAvatar;
    let url = image?.[0]?.small?.url ?? defaultAvatar;

    return <>
        <h2>{name} {nickName}</h2>
        <img src={url} alt={name} style={{ width: '100px' }}></img>
    </>
}
export default App
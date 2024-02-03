import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  let object = useLoaderData();
  // let [object, setObject] = useState([]);
  // useEffect(() => {
  //   let fetchData = async () => {
  //     let response = await fetch("https://api.github.com/users/shradha-khapra");
  //     let data = await response.json();
  //     setObject(data);
  //   };
  //   object = fetchData();
  // }, []);
  console.log(object);
  let { followers, avatar_url, name } = object;
  return (
    <>
      <div className="text-3xl text-center bg-orange-500 p-4 grid justify-center items-center ">
        Github Followers : {followers}
        <img
          className="mt-4 mb-4 ml-20 rounded-full w-40 h-40"
          src={avatar_url}
          alt={name}
        />
        <h1>{name}</h1>
      </div>
    </>
  );
};
export default Github;

export const githubLoader = async () => {
  let response = await fetch("https://api.github.com/users/shradha-khapra");
  return response.json();
};

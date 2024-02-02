import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  return (
    <div className="bg-gray-400 p-4 text-center text-3xl">User : {id}</div>
  );
};
export default User;

import UserContainer from "./UserContainer";
let Navlink = ({ user, logOut }) => {
  return (
    <>
      <UserContainer user={user} logOut={logOut} />
    </>
  );
};
export default Navlink;


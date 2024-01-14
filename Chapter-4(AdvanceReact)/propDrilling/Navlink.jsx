import UserContainer from './UserContainer';
const Navlink = ({user,logout}) => {
  return (
    <>
      <div className="navlink">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Carrer</li>
        </ul>
      </div>
      <UserContainer user={user} logout={logout} />
    </>
  );
};
export default Navlink;

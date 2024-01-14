const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <h2>Hello {user?.name?.toUpperCase()}</h2>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <h2>Please login</h2>
      )}
    </div>
  );
};
export default UserContainer;

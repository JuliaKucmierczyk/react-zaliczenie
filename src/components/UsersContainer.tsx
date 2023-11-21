import UsersCard from "./UsersCard";
import "../styles/style.css"

const UsersContainer = () => {
  return (
    <section>
      <h2>Users</h2>
      <div className="grid grid--1x2 grid--1x3">
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
      
    </section>
  );
};

export default UsersContainer;

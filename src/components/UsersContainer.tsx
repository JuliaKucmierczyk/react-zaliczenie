import UsersCard from "./UsersCard";

const UsersContainer = () => {
  return (
    <section>
      <h2>Users</h2>
      <div className="grid grid--1x2 grid--1x3">
        <UsersCard />
      </div>
    </section>
  );
};

export default UsersContainer;

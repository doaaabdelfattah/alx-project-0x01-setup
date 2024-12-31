import { UserCard } from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import React from "react";

const Users: React.FC<UserProps> = ({ users }) => {
  // console.log(users);
  return (
    <div className="mx-8 p-3">
      <div className=" flex justify-center items-center bg-slate-400  my-3 rounded-lg">
        <h1 className="font-bold text-3xl text-white py-5">All Users</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        {users?.map((user: UserProps) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

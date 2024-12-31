import { UserProps } from "@/interfaces";

export const UserCard: React.FC<UserProps> = ({ user, key }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4" key={key}>
      <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.username}</p>
      <p className="text-sm text-gray-600">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Address:</strong>{" "}
        {`${user.address.street}, ${user.address.city}`}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Website:</strong> {user.website}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

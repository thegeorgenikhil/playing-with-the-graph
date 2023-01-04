import { GetAllUsersQuery, User } from "../../__generated__/graphql";

type UsersProps = {
  loading: boolean;
  data: GetAllUsersQuery;
};

export const Users: React.FC<UsersProps> = ({ loading, data }) => {
  return (
    <div>
      {!loading ? (
        <div className="m-10 flex flex-col gap-4">
          {data?.users.map((user) => (
            <div className="rounded-lg shadow-sm border-2 border-blue-400">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.address}
                </h3>
                <div className="text-sm flex items-center gap-2 text-gray-600">
                  <div className="text-blue-500">Balance:</div>
                  <div className="font-semibold text-lg">{user.balance / 10 ** 18}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

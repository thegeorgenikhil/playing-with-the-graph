import { Navbar, Tabs, Transactions, Users } from "./components";
import { useQuery } from "@apollo/client";
import { GET_ALL_TRANSACTIONS, GET_ALL_USERS } from "./graphql/queries";
import { useState } from "react";

function App() {
  const { loading, data } = useQuery(GET_ALL_TRANSACTIONS, {});
  const { loading: userLoading, data: userData } = useQuery(GET_ALL_USERS, {});
  const [tab, setTab] = useState<"transactions" | "users">("transactions");
  return (
    <div className="App">
      <Navbar />
      <div>
        <Tabs tab={tab} setTab={setTab} />
        <div>
          {tab === "transactions" && (
            <Transactions loading={loading} data={data!} />
          )}
          {tab === "users" && <Users loading={userLoading} data={userData!} />}
        </div>
      </div>
    </div>
  );
}

export default App;

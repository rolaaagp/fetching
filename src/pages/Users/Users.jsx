import { useFetch } from "../../providers/useFetch.js";
import { UseMutatorUser } from "./useMutatorUser";
import UserList from "./UserList";
import { SectionDouble } from "./SectionDouble.js";
import { useEffect, useState } from "react";

export default function Users() {
  const url = "http://localhost:3000/categories";
  const options = {
    method: "GET",
    headers: {},
  };

  const { data } = useFetch(url, options);

  const [updatedData, setUpdatedData] = useState(data);

  const handleUpdateData = (newData) => {
    setUpdatedData((prevData) => [newData, ...prevData]);
  };

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  return (
    <>
      <SectionDouble>
        <UseMutatorUser handleUpdateData={handleUpdateData} />

        <UserList data={updatedData}></UserList>
      </SectionDouble>
    </>
  );
}

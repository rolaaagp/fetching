/* eslint-disable react/prop-types */
import { Table, TableTD, TableTH } from "../../components/Table.js";
// import { useMutator } from "../../providers/useMutator.js";

import Modal from "../../components/Modal.jsx";

export default function UserList({ data }) {
  // const method = "PUT";
  // const url = "http://localhost:3000/categories";

  // const { onSubmit, status } = useMutator(url, method, data);

  return (
    <Table>
      <thead>
        <tr>
          <TableTH>Names</TableTH>
          <TableTH>Options</TableTH>
        </tr>
      </thead>
      <tbody>
        {data?.map((r, index) => (
          <tr key={index}>
            <TableTD>{r.name}</TableTD>
            <TableTD>
              <Modal key_modal={index} key={index} title={"+Edit"}>
                {<p>{r.name}</p>}
              </Modal>
            </TableTD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

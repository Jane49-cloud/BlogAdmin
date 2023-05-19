import { People, DeleteOutlined, Edit } from "@mui/icons-material";
import React, { useState } from "react";
import { usersData } from "../../TestData/blogs";

const Users = () => {
  const [users, setUsers] = useState(usersData);
  return (
    <main>
      <div>
        {/* header */}
        <div className="m-2 d-flex justify-content-between">
          <div></div>
          <div className="btn btn-primary m-2">
            <People />
            New user
          </div>
        </div>
        {/* end header */}
        {/* start pending posts */}

        <div className="container">
          <section>
            <h3 className="text-left font-weight-bold mb-2">Users</h3>

            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">firstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Created</th>
                    <th scope="col">Role</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="table-row-gray">
                      <td>{user.firstName.substring(0, 22)}</td>
                      <td>{user.lastName}</td>
                      <td>2/22/23</td>
                      <td>{user.role}</td>
                      <td>
                        <Edit
                          className="text-success"
                          style={{
                            fontSize: "24px",
                          }}
                        />
                      </td>
                      <td>
                        <DeleteOutlined
                          className="text-danger"
                          style={{ fontSize: "24px" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4 mb-5">
              <a className="black-text font-weight-bold" href="#!">
                Browse from home<i className="fa fa-angle-right"></i>
              </a>
            </div>
          </section>
        </div>

        {/* end pending posts */}

        {/* start of denied posts */}
      </div>
    </main>
  );
};

export default Users;

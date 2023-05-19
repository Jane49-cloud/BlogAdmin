import React, { useState } from "react";
import { DeleteOutlined, Edit, PlusOneOutlined } from "@mui/icons-material";
import { topicData } from "../../TestData/blogs";

const Topics = () => {
  const [allTopics, SetAllTopics] = useState(topicData);
  const [openForm, setOpenForm] = useState(false);

  return (
    <main>
      <div>
        {/* header */}
        <div className="m-2 d-flex justify-content-between">
          <div></div>
          <div
            className="btn btn-primary m-2"
            onClick={() => setOpenForm(true)}
          >
            <PlusOneOutlined />
            New Topic
          </div>
        </div>
        {/* end header */}
        {/* newtopic form */}

        {openForm && (
          <form
            className="container section p-3 mx-auto m-0"
            style={{ height: "auto" }}
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                className="form-control"
                id="title"
                placeholder="Enter Title of the Topic"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary mt-3"
                type="submit"
                style={{ width: "100px" }}
              >
                Submit
              </button>
              <button
                onClick={() => setOpenForm(false)}
                className="btn btn-danger mt-3"
                style={{ width: "100px" }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* end of topic form */}
        {/* start pending posts */}

        <div className="container">
          <section>
            <h3 className="text-left font-weight-bold mb-2">Topics</h3>

            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    {/* <th scope="col">LastName</th> */}
                    <th scope="col">Created</th>
                    {/* <th scope="col">Role</th> */}
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {allTopics.map((topic) => (
                    <tr key={topic.id} className="table-row-gray">
                      <td>{topic.title.substring(0, 22)}</td>
                      {/* <td>{topic.lastName}</td> */}
                      <td>2/22/23</td>
                      {/* <td>{topic.role}</td> */}
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

export default Topics;

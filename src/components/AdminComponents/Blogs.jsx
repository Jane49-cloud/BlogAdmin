import React, { useEffect, useState } from "react";
import { blogs } from "../../TestData/blogs";
import { DeleteOutlined, Edit, LibraryAdd } from "@mui/icons-material";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState(blogs);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const pendingBlogs = allBlogs.filter((blog) => blog.status === "pending");
    setPending(pendingBlogs);
  }, [allBlogs]);
  console.log(pending);

  return (
    <main>
      <div>
        {/* header */}
        <div className="m-2 d-flex justify-content-between">
          <div></div>
          <div className="btn btn-primary m-2">
            <LibraryAdd />
            New Blog
          </div>
        </div>
        {/* end header */}
        {/* start pending posts */}

        <div className="container">
          <section>
            <h3 className="text-left font-weight-bold mb-2">Posts</h3>

            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Heading</th>
                    <th scope="col">Author</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {allBlogs.map((blog) => (
                    <tr key={blog.id} className="table-row-gray">
                      <td>{blog.title.substring(0, 22)}...</td>
                      <td>{blog.author}</td>
                      <td>2/22/23</td>
                      <td>{blog.status}</td>
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

export default Blogs;

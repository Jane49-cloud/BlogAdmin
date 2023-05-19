import React, { useEffect } from "react";
import { blogs } from "../../TestData/blogs";
import { useState } from "react";
import {
  DoNotDisturb,
  LibraryBooks,
  Pending,
  PeopleOutline,
  Publish,
  Topic,
} from "@mui/icons-material";

import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Chart,
  PieSeries,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const Dashboard = () => {
  const now = 70;
  const now1 = 20;
  const now2 = 10;
  const [published, setPublished] = useState(null);
  const [pending, setPending] = useState(null);
  const [posts, setPosts] = useState(blogs);

  const data = [
    { argument: "users", value: 80 },
    { argument: "writers", value: 20 },
  ];

  return (
    <main className="d-flex flex-column mx-auto m-0">
      <div className="row">
        <h6 className="container m-3">General Statistics</h6>
        <div className="col-md-3 d-flex justify-content-between dash-item">
          <div>
            <LibraryBooks style={{ fontSize: "36" }} />
            <p>Total Posts</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-between dash-item">
          <div>
            <Publish style={{ fontSize: "36" }} />
            <p>Published Posts</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex  justify-content-between dash-item">
          <div>
            <Pending style={{ fontSize: "36" }} />
            <p>Pending Posts</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex  justify-content-between dash-item">
          <div>
            <Topic style={{ fontSize: "36" }} />
            <p>Topics</p>
          </div>
          <div>
            <h3>26</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex  justify-content-between dash-item">
          <div>
            <DoNotDisturb style={{ fontSize: "36" }} />
            <p>Denied Posts</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-between dash-item">
          <div>
            <PeopleOutline style={{ fontSize: "36" }} />
            <p>Users</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-between dash-item">
          <div>
            <PeopleOutline style={{ fontSize: "36" }} />
            <p>Writers</p>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </div>
      </div>
      <div className="row centered">
        {/* <div className="section"> */}

        <div className="col-md-6 section">
          <h6 className="container m-3">Posts Statistics</h6>
          <div className="m-2">
            <ProgressBar
              animated
              variant="success"
              now={now}
              label={`${now}%`}
              visuallyHidden
            />
            <p>published</p>
          </div>
          <div className="m-2">
            <ProgressBar
              now={now1}
              animated
              variant="warning"
              label={`${now}%`}
              visuallyHidden
            />
            <p>pending</p>
          </div>
          <div className="m-2">
            <ProgressBar
              now={now2}
              animated
              variant="danger"
              label={`${now}%`}
              visuallyHidden
            />
            <p>Denied</p>
          </div>
        </div>
        <div className="col-md-1"></div>

        <div
          className="col-md-2 section "
          style={{ height: "300px", maxWidth: "350px", width: "350px" }}
        >
          <div className="bg-yellow">
            <h6 className="container m-3">Users Statistics</h6>

            <Chart
              data={data}
              width={300}
              height={200}
              style={{
                marginLeft: "2rem",
              }}
            >
              <PieSeries valueField="value" argumentField="argument" />
              <Legend />
              <Animation />
            </Chart>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Dashboard;

import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditPage from "./components/editPage";
import NavBar from "./components/navBar";
import StudentCard from "./components/studentCard";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  const handleGetData = (data) => {
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <Router>
      <NavBar />
      <Route
        path="/student-card"
        exact
        render={(props) => <StudentCard data={data} {...props} />}
      />
      <Route
        path="/student-card/edit"
        render={(props) => (
          <EditPage data={data} getData={handleGetData} {...props} />
        )}
      />
    </Router>
  );
}

export default App;

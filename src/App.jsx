import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditPage from "./components/editPage";
import NavBar from "./components/navBar";
import StudentCard from "./components/studentCard";

function App() {
  const [data, setData] = useState();

  const handleGetData = (data) => {
    setData(data);
  };

  return (
    <Router>
      <NavBar />
      <Route
        path="/"
        exact
        render={(props) => <StudentCard data={data} {...props} />}
      />
      <Route
        path="/edit"
        render={(props) => (
          <EditPage data={data} getData={handleGetData} {...props} />
        )}
      />
    </Router>
  );
}

export default App;

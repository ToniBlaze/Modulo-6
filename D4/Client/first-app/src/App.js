import "./App.css";
import axios from "axios";

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import ErrorPage from "./pages/ErrorPage";

import MyNav from "./components/MyNav";
import Posts from "./components/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        // console.log({res})
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <MyNav />
                <Posts data={data} />
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

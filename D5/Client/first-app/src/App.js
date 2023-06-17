import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import ErrorPage from "./pages/ErrorPage";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";

// COMPONENTS
import MyNav from "./components/MyNav";
import Posts from "./components/Posts";
import Newsletter from "./components/Newsletter";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <MyNav />
                <Newsletter />
                <Posts />
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/newpost" element={<NewPost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

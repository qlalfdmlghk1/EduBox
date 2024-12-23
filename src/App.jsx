// import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Redirect from "./components/Redirect";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 1;
    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/photos",
    // }).then((response) => setPosts(response.data));
    // 2.
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => setPosts(response.data));
    // 3.
    // try {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/photos"
    //   );
    //   setPosts(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  });

  return (
    <>
      {/* <div>{posts.length}</div> 
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;

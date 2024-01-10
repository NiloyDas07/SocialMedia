import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  // const [selectedTab, setSelectedTab] = useState("CreatePost");

  return (
    <PostListProvider>
      <div className="app-container">
        <div className="layout-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content-container">
            <Header></Header>
            {selectedTab === "CreatePost" && <CreatePost></CreatePost>}

            <PostList></PostList>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </PostListProvider>
  );
}

export default App;

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <div className="layout-container">
          <Sidebar></Sidebar>
          <div className="content-container">
            <Header></Header>
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </PostListProvider>
  );
}

export default App;

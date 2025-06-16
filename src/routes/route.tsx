import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Header } from "../components/layout/header";
import { Post } from "../pages/post";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:username" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="post/:postIndex" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

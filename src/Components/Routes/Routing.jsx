import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Layout from "../Layout/Layout";
import Gst1 from './gst/Gst1';
import Gst2 from './gst/Gst2';
import Gst3B from './gst/Gst3B';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/layout" element={<Layout />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/gst1" element={<Gst1 />} />
        <Route path="/gst2" element={<Gst2 />} />
        <Route path="/gst3b" element={<Gst3B />} />
      </Routes>
    </BrowserRouter>
  );
}

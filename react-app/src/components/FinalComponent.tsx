import { Routes, Route } from "react-router-dom";
import BookRoutes from "./BookRoutes";
import NavBar from "./NavBar";
import Home from "./Home";
import NotFound from "./NotFound";

const FinalComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default FinalComponent;

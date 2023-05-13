import { Routes, Route } from "react-router-dom";
import TestTwo from "./TestTwo";
import TestList from "./TestList";
import Books from "./Books";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Books />} />
          <Route path="test" element={<TestTwo />} />
          <Route path=":id" element={<TestList />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;

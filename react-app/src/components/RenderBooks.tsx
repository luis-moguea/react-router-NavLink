import { Link, useSearchParams } from "react-router-dom";

const RenderBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const number = searchParams.get("number");
  console.log(searchParams);
  return (
    <>
      <ul>
        <li>
          <Link to="/books/1">First book</Link>
        </li>
        <li>
          <Link to="/books/2">Second Book</Link>
        </li>
        <li>
          <Link to={`/books/:${number}`}>Book {number}</Link>
        </li>
        <li>
          <Link to="/books/:id">Choose your prefered book!</Link>
        </li>
      </ul>
      <input
        type="number"
        onChange={(e) => setSearchParams({ number: e.target.value })}
        value={number}
      />
    </>
  );
};

export default RenderBooks;

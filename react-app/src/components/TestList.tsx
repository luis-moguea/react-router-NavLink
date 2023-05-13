import { useParams } from "react-router-dom";

const TestList = () => {
  const { id }: any = useParams();
  return <h1>Test {id}</h1>;
};

export default TestList;

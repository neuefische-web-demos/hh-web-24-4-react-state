import { useState } from "react";

export default function App() {
  return (
    <>
      <h1>React State!</h1>
      <Button start={10} step={1} />
      <Button start={20} step={5} />
    </>
  );
}

function Button({ start, step }) {
  const [page, setPage] = useState(start);
  return (
    <button
      style={{ fontSize: "x-large" }}
      onClick={() => {
        setPage(page + step);
      }}
    >
      {page}
    </button>
  );
}

import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { books } = useContext(GlobalContext);
  return (
    <div>
      {books.length === 0 ? (
        "Wczytuję"
      ) : (
        <>
          {books.map((book) => (
            <p key={book._id}>{book.title}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;

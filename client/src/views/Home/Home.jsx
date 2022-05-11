import { useContext } from "react";
import { LoadingProgress } from "../../common/index";
import { BookList, Sidebar } from "../../components/";

import { GlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { books } = useContext(GlobalContext);
  const loading = books.length === 0;
  return (
    <div style={{ color: "white" }}>
      {loading ? (
        <LoadingProgress />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <BookList />
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
};

export default Home;

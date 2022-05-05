import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AdminHeader } from "./admin";
import Pages from "./components/Pages.jsx";
import Header from "./views/Header/Header";

function App() {
  const [adminPanel, setAdminPanel] = useState(false);
  const location = useLocation();
  const path = location.pathname.substring(0, 6);

  useEffect(() => {
    if (path === "/admin") {
      setAdminPanel(true);
    } else {
      setAdminPanel(false);
    }
  }, [location]);

  return (
    <div>
      {adminPanel ? <AdminHeader /> : <Header />}
      <Pages />
    </div>
  );
}

export default App;

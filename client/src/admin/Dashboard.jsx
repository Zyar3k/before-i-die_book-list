import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Stack,
  Tooltip,
  IconButton,
  CardHeader,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LoadingProgress from "../common/LoadingProgress/LoadingProgress";
import { Filter, Search, Sort } from "../components/index";
import { GlobalContext } from "../context/GlobalProvider";

const Dashboard = () => {
  const { books, isAdmin, all, searched, filtered } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);
  useEffect(() => {
    if (searched) {
      setDisplayData(searched);
    } else if (all === true) {
      setDisplayData(books);
    } else if (all !== true) {
      setDisplayData(filtered);
    }
  }, [books, searched, all, filtered]);
  useEffect(() => {
    if (!isAdmin) window.location.href = "/";
  }, [isAdmin]);
  return (
    <Stack spacing={2}>
      {books.length === 0 ? (
        <LoadingProgress />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Sort />
            <Search />
            <Filter />
          </Box>
          <Box
            spacing={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displayData.map((book) => (
              <Link
                to={`/admin/books/${book._id}`}
                key={book._id}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    width: "360px",
                    margin: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <CardHeader
                    title={book.title}
                    subheader={`${book.author.name} ${book.author.lastName}`}
                    action={
                      isAdmin && (
                        <Tooltip title="Edit">
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )
                    }
                  />
                </Card>
              </Link>
            ))}
          </Box>
        </>
      )}
    </Stack>
  );
};

export default Dashboard;

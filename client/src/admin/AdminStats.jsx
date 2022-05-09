import { useContext } from "react";
import { Box, Card, CardHeader, Stack, Typography } from "@mui/material";
import { percents, availableBooks, readedBooks } from "../helpers/stats";
import { CustomProgress } from "../common/index";

import { GlobalContext } from "../context/GlobalProvider";

const AdminStats = () => {
  const { lists } = useContext(GlobalContext);

  return (
    <Stack m={2} justifyContent="center">
      <Typography variant="h4" textAlign="center">
        Stats
      </Typography>
      <Box
        padding={2}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Object.keys(lists).map((key) => (
          <Card sx={{ margin: "10px", width: "340px" }} key={key}>
            <CardHeader
              title={key}
              subheader={`Books: ${lists[key].length}`}
              sx={{ textTransform: "capitalize" }}
            />
            <Box
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Typography component="div" variant="body1">
                Readed: {readedBooks(lists[key])}
              </Typography>
              <CustomProgress
                value={percents(readedBooks(lists[key]), lists[key].length)}
              />
            </Box>
            <Box
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Typography variant="body1">
                Available: {availableBooks(lists[key])}
              </Typography>
              <CustomProgress
                value={percents(availableBooks(lists[key]), lists[key].length)}
              />
            </Box>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};

export default AdminStats;

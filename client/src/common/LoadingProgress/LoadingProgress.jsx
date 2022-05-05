import { Stack, CircularProgress } from "@mui/material";

const LoadingProgress = () => {
  return (
    <Stack
      width="100%"
      height="80vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default LoadingProgress;

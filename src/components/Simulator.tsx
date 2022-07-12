import { Grid } from "@mui/material";
import { Navigation } from "./Navigation";

export const Simulator = () => {
  return (
    <main className="container">
      <div>
        <Navigation />
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={5}>
          Task
        </Grid>
        <Grid item xs={6}>
          Your desition
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </main>
  );
};

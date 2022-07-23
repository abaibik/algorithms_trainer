import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, Grid, OutlinedInput } from "@mui/material";
import { Navigation } from "./Navigation";
import { TaskList } from "../tasks/task";

interface SimulatorProps {
  taskList: TaskList;
}

export const Simulator = (props: SimulatorProps) => {
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
        <Grid item xs={5}>
          {props.taskList[0].description}
        </Grid>
        <Grid item xs={6}>
          <OutlinedInput
            sx={{ width: "100%" }}
            placeholder="Please enter text"
          />
          <Button
            variant="contained"
            color="success"
            endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </main>
  );
};

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function TodoItem({ todo, id, fetchDetailsOfCurrentTodo }) {
  return (
    <>
      <Card
        sx={{
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <CardContent>
          <Typography color={"#a0acac"} variant="h5">
            {todo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => fetchDetailsOfCurrentTodo(id)}
            sx={{
              backgroundColor: "#a0acac",
              color: "#000",
              opacity: "0.7",
              "&:hover": {
                backgroundColor: "#a0acac",
                color: "#000",
                opacity: "1",
              },
            }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default TodoItem;

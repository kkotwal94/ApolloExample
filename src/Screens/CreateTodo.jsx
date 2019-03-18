import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import { graphql, Mutation, compose } from "react-apollo";
import { addTodo } from "../Graphql/Todo";
import { useMutation } from "react-apollo-hooks";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class CreateTodo extends Component {
  state = {
    author: "",
    todo: "",
    isComplete: false
  };

  updateInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updateCheckbox = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  createTodo = async () => {
    const { addTodo } = this.props;
    const { author, todo, isComplete } = this.state;
    const newTodo = await addTodo({
      variables: {
        author,
        todo,
        isComplete
      }
    });
    console.log(newTodo);
  };
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Create TODO
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                fullWidth
                onChange={this.updateInput("author")}
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="todo"
                name="todo"
                label="Todo"
                fullWidth
                onChange={this.updateInput("todo")}
                autoComplete="todo"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="isComplete"
                    value="false"
                    onChange={this.updateCheckbox("isComplete")}
                  />
                }
                label="Is Complete"
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                this.createTodo();
              }}
            >
              Create TODO
            </Button>
          </div>
        </Paper>
      </main>
    );
  }
}

export default compose(
  withStyles(styles),
  graphql(addTodo, { name: "addTodo" })
)(CreateTodo);

/** TODO: React hooks example */

// const CreateTodo = ({ classes }) => {
//   const [author, updateAuthor] = useState("");
//   const [todo, updateTodo] = useState("");
//   const [isComplete, toggleComplete] = useState(false);
//   const createTodo = useMutation(addTodo, {
//     variables: { author, todo, isComplete }
//   });

//   const handleUpdateAuthor = e => updateAuthor(e.target.value);
//   const handleUpdateTodo = e => updateTodo(e.target.value);
//   const handleUpdateComplete = e => toggleComplete(e.target.checked);

//   return (
//     <main className={classes.layout}>
//       <Paper className={classes.paper}>
//         <Typography variant="h6" gutterBottom>
//           Create TODO
//         </Typography>
//         <Grid container spacing={24}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="author"
//               name="author"
//               label="Author"
//               fullWidth
//               onChange={handleUpdateAuthor}
//               autoComplete="author"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="todo"
//               name="todo"
//               label="Todo"
//               fullWidth
//               onChange={handleUpdateTodo}
//               autoComplete="todo"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   color="secondary"
//                   name="isComplete"
//                   value="false"
//                   onChange={handleUpdateComplete}
//                 />
//               }
//               label="Is Complete"
//             />
//           </Grid>
//         </Grid>
//         <div className={classes.buttons}>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             onClick={async () => {
//               const { data } = await createTodo();
//               const { addTodo } = data;
//               console.log(addTodo);
//             }}
//           >
//             Create TODO
//           </Button>
//         </div>
//       </Paper>
//     </main>
//   );
// };

// export default withStyles(styles)(CreateTodo);

// TODO: Mutation component example

// class CreateTodo extends Component {
//   state = {
//     author: "",
//     todo: "",
//     isComplete: false
//   };

//   updateInput = name => event => {
//     this.setState({
//       [name]: event.target.value
//     });
//   };

//   updateCheckbox = name => event => {
//     this.setState({
//       [name]: event.target.checked
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { author, todo, isComplete } = this.state;
//     return (
//       <Mutation mutation={addTodo}>
//         {(addTodo, { data }) => (
//           <main className={classes.layout}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6" gutterBottom>
//                 Create TODO
//               </Typography>
//               <Grid container spacing={24}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="author"
//                     name="author"
//                     label="Author"
//                     fullWidth
//                     onChange={this.updateInput("author")}
//                     autoComplete="author"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="todo"
//                     name="todo"
//                     label="Todo"
//                     fullWidth
//                     onChange={this.updateInput("todo")}
//                     autoComplete="todo"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         color="secondary"
//                         name="isComplete"
//                         value="false"
//                         onChange={this.updateCheckbox("isComplete")}
//                       />
//                     }
//                     label="Is Complete"
//                   />
//                 </Grid>
//               </Grid>
//               <div className={classes.buttons}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   className={classes.button}
//                   onClick={async () => {
//                     const createdTodo = await addTodo({
//                       variables: {
//                         author,
//                         todo,
//                         isComplete
//                       }
//                     });
//                   }}
//                 >
//                   Create TODO
//                 </Button>
//               </div>
//             </Paper>
//           </main>
//         )}
//       </Mutation>
//     );
//   }
// }

// export default compose(withStyles(styles))(CreateTodo);

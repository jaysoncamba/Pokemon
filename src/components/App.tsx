import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  heading: {
    margin: "auto"
  },
  lineup: {},
  pokedex: {}
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        <GridListTile  key="heading" cols={3}> 
          <Typography className={classes.heading} variant="h5" align="center">Pokemon Lineup</Typography>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 1 </h2>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 2 </h2>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 3 </h2>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 4 </h2>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 5 </h2>
        </GridListTile>
        <GridListTile key="lineup" cols={1} > 
          <h2> pokemon 6 </h2>
        </GridListTile>
        <GridListTile  key="pokedex" cols={3}> 
          <Typography className={classes.heading} variant="h5" align="center">Pokemon Descripion</Typography>
        </GridListTile>
      </GridList>
      <GridList className={classes.gridList} cols={3}>
      <GridListTile  key="heading" cols={3}> 
          <Typography className={classes.heading} variant="h5" align="center">PokeDex</Typography>
        </GridListTile>
      </GridList>
    </div>
  );
}

export default App;
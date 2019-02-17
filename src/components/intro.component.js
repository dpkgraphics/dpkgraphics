import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  intro: {
    flexGrow: 1,
    color: '#afafaf',
    fontWeight: '500',
    lineHeight: 1.6,
    fontSize: '0.95rem'
  },
  strong: {
    color: '#5e5f61',
    fontWeight: '800'
  }
};

class Intro extends Component {
  render() {
    const { classes } = this.props;

    return(
      <div className={ classes.root }>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Typography variant="body1" className={ classes.intro } gutterBottom>
              We provide <span className={ classes.strong }>creative solutions</span> to a variety of companies by <span className={ classes.strong }>enhancing print & online experiences</span> through <span className={ classes.strong }>design & development</span> using today’s newest technologies.
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Intro);

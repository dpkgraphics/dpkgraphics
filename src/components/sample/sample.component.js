import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SectionHead from '../../shared/sectionHead.component.js';
import Work from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1,
    textTransform: 'uppercase',
    marginBottom: '30px'
  },
  block: {
    marginTop: '-20px',
    marginBottom: '20px'
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  tag: {
    fontWeight: '800',
    color: '#76c7e9',
    fontSize: '1.76rem',
    lineHeight: 0.96,
  },
  hr: {
    boxShadow: '0px 1px 1px white',
    width: '5%',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '2px',
    marginRight: '2px'
  },
  description: {
    color: '#afafaf',
    fontWeight: '800',
  },
};

const header = {
  icon: <Work/>,
  title: 'Some of the work created'
}

class Sample extends Component {
  renderSample = (sample, index) => {
    const { classes } = this.props;
    return (
      <Grid item xs={12} key={ index }>
        <div>
          <img
            src={ sample.image }
            className={ classes.imgFluid }
            alt="DPKgraphics :: A Digital Company"/>
        </div>
        <div className={ classes.block }>
          <Typography
            variant="h6"
            className={ classes.description }
            >
            { sample.project }
          </Typography>
          <Typography
            variant="h5"
            className={ classes.tag }
            >
            { sample.client }
          </Typography>
          <Typography
            variant="subtitle2"
            className={ classes.description }
            >
            <Divider className={ classes.hr } />
            { sample.description }
            <Divider className={ classes.hr } />
          </Typography>
        </div>
      </Grid>
    )
  }

  renderSamples() {
    const { data } = this.props;
    return data.map(this.renderSample)
  }

  render() {
    const { classes } = this.props;
    const {
      title,
      icon
    } = header;

    return (
      <div className={ classes.root }>
        <Grid container justify="center">
          <Grid item xs={8}>
            <SectionHead
              icon={ icon }
              title={ title }
            />
            <Grid container justify="center">
              { this.renderSamples() }
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Sample);

import { withStyles } from "@mui/styles";

import { useStyles } from "../control/ThemeControl"
import { globalSize } from "../property/SizeProperty";
import ModelImage from "../resource/model.png"

const Overview = (props) => {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <h2 className={classes.h2}> A Melody-Unsupervision Model <br/> for Singing Voice Synthesis </h2>
      <p className={classes.p}>
        We propose a singing voice synthesis model
        requires only audio & lyrics pairs without temporal alignment in training time
        to solve melody labeling issue, which is a time-exhausting manual work.
      </p>
      <div className={classes.divImg}>
        <img src={ModelImage} alt="" style={{ width: 'calc(100% - ' + 2*parseInt(globalSize.marginMedium) + 'px)', margin: globalSize.marginMedium }}/>
      </div>
      <div className={classes.divBottom}/>
    </div>
  )
}

export default withStyles(useStyles, { withTheme: true})(Overview);
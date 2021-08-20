import {Box, Grid, Typography, withWidth } from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMeteor, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import { makeStyles } from '@material-ui/core/styles';


function App({ width }) {
    const isSmallScreen = /xs|sm/.test(width);
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh'}}
        >
            <Box display="flex" justifyContent="center">
                <FontAwesomeIcon
                    size={"10x"}
                    icon={faMeteor}
                />
            </Box>
            <Box marginTop={"2%"} display="flex" justifyContent="center">
              <Typography variant={!isSmallScreen ? "h4" : "h6"} >
                  LuNoHo Software Company, Inc.
              </Typography>
            </Box>
            <Box marginTop={"2%"}>
                <Typography display="flex" justifyContent="center">
                    {isSmallScreen ? "Full-stack software development" : "Full-stack software development for revolutionary start ups."}
                </Typography>
            </Box>
            <Box marginTop={"2%"} width="25%" display="flex" justifyContent="space-around">
                <a href="https://www.twitter.com/crispheaney" style={{color: "#49a1eb"}}>
                    <FontAwesomeIcon
                        size={isSmallScreen ? "2x" : "3x"}
                        icon={faTwitter}
                    />
                </a>
                <a href="mailto:chris@lunoho.company" style={{color: "black"}}>
                    <FontAwesomeIcon
                      size={isSmallScreen ? "2x" : "3x"}
                      icon={faEnvelope}
                    />
                </a>
            </Box>
        </Grid>
    );
}

export default withWidth()(App);

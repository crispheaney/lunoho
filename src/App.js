import {Box, Grid, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMeteor, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";


function App() {
  return (
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh'}}
      >
          <Box >
              <FontAwesomeIcon
                  size={"10x"}
                  icon={faMeteor}
              />
          </Box>
          <Box marginTop={"2%"}>
              <Typography variant="h4" >
                  LuNoHo Software Company, Inc.
              </Typography>
          </Box>
          <Box marginTop={"2%"}>
              <Typography variant="h8" >
                  Full-stack software development for revolutionary start ups.
              </Typography>
          </Box>
          <Box marginTop={"2%"} width="15%" display="flex" justifyContent="space-around">
              <a href="https://www.twitter.com/crispheaney" style={{color: "#49a1eb"}}>
                  <FontAwesomeIcon
                      size={"3x"}
                      icon={faTwitter}
                  />
              </a>
              <a href="mailto:chris@lunoho.company" style={{color: "black"}}>
                  <FontAwesomeIcon
                      size={"3x"}
                      icon={faEnvelope}
                  />
              </a>
          </Box>
      </Grid>
  );
}

export default App;

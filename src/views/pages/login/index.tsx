import HomeIcon from "@mui/icons-material/Home";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginComponent() {
  return (
    <div className="text-center text-white ml-20 h-[100vh] flex justify-center items-center">
      <div className="w-[400px] flex-col h-[450px] bg-gray-900 flex justify-between items-center rounded-xl">
        <div className="bg-[#29395f] rounded-xl w-full h-[200px] items-center flex justify-center">
            <div className="bg-[#253a63] rounded-full p-6 w-20 items-center flex justify-center h-auto">
            <HomeIcon fontSize="large" />
            </div>
        </div>
        <div className="mt-40 absolute flex justify-center items-center">
          <Card className="w-80 bg-white text-black rounded-lg">
            <CardContent>
              <Typography variant="h5">Login</Typography>
              <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" defaultValue="my@mail.com" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Password" defaultValue="password" />
                </Grid>

                <Grid className="text-white" item xs={12}>
                  <Button fullWidth  variant="containe" className="!bg-primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import AddForm from '../components/addDepartement';
import Drawer from '../components/drawer';
import Box from '@mui/material/Box';
import Breadcrumb from '../components/breadcrumb';
export default function home(){
    return(
        <Box sx={{ display: 'flex' }}>
        <Drawer role='Admin' pageTitle={'Nouveau Département'}/>
        <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    marginTop: "5%",
    marginLeft: "0%",
    marginRight: "0%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add the boxShadow property
  }}
>
<Breadcrumb pageLabel="Nouveau Département"/>
<>&nbsp;</>
<AddForm />
</Box>

      </Box>
    )
}
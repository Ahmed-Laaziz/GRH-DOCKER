import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'; // Import Axios
import { useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/joy/Button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
import { useProf } from '../../context/ProfContext';
import AddIcon from '@mui/icons-material/Add';

const backLink = process.env.REACT_APP_BACK_LINK
const columns = [
  {
    field: 'prenom',
    headerName: 'Prénom',
    editable: true,
  },
  {
    field: 'nom',
    headerName: 'Nom',
    editable: false,
  },
  {
    field: 'cadre',
    headerName: 'Cadre',
    sortable: true,
  },
  
  {
    field: 'departement',
    headerName: 'Service',
    editable: false,
  },
  {
    field: 'moreActions',
    headerName: 'Autres Actions',
    sortable: false,
    renderCell: (params) => {
      return <MoreActionsCell rowParams={params} />;
    },
  },
];

function CustomMenu({ onHistoriqueClick, onProfileClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="soft"
        aria-label="profile"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={onProfileClick}
        style={{ marginRight: '0.5vw' }}
      >
        Profil
      </Button>
    </div>
  );
}



function MoreActionsCell({ rowParams }) {
  const navigate = useNavigate();
  const { updateProf, updateHist } = useProf();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHistoriqueClick = async () => {
    const hists = await axios.post(
      backLink+`/hist/prof-hist`, {"prof": rowParams.row._id} // Replace with your actual API endpoint
    );
    
    updateHist(hists.data);
    
    navigate("/historiques");
    handleMenuClose();
  };

  const handleProfileClick = async () => {
    updateProf(rowParams.row);

    const hists = await axios.post(
      backLink+`/hist/prof-hist`, {"prof": rowParams.row._id} // Replace with your actual API endpoint
    );
    
    updateHist(hists.data);
    
    navigate("/prof-profile");
    handleMenuClose();
  };

  return (
    <CustomMenu
  onHistoriqueClick={handleHistoriqueClick}
  onProfileClick={handleProfileClick}
/>
  );
}


export default function DataGridDemo() {
  const [professeurs, setProfesseurs] = useState([]);
  const navigate = useNavigate();
  function handleAddUser(){
      navigate('/add-fonctionnaire')
  }
  
  const fetchProfessor = async () => {
    try {
        const response = await axios.get(
          backLink+`/prof/professeurs-FCT` // Replace with your actual API endpoint
        );
        setProfesseurs(response.data);
    } catch (error) {
      console.error('Error fetching title:', error);
    }
  };

  console.log(professeurs)

  useEffect(() => {
    // Fetch the title from the backend API

    fetchProfessor(); // Call the fetchTitle function when the component mounts
  }, []);

  const handleExportExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    // Exclude password column from export
    const dataForExport = professeurs.map(({ password, ...rest }) => rest);

    const ws = XLSX.utils.json_to_sheet(dataForExport);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], { type: fileType });
    const fileName = 'professeurs' + fileExtension;
    saveAs(data, fileName);
  };

  const theme = useTheme();


  // Adjust column widths based on screen size
  const responsiveColumns = columns.map((column) => ({
    ...column,
    width: 'auto', // Set width to 'auto'
    flex: 1, // Set flex property for each column
  }));

  return (
    <Box sx={{ height: 500, width: '99%' }}>
    <Button variant="outlined" onClick={handleExportExcel}> 
<DownloadIcon/> Exporter sous Excel
      </Button>
      &nbsp;
        &nbsp;
      
      <Button variant="solid" onClick={handleAddUser}>
        <AddIcon /> Nouveau fonctionnaire
      </Button>
      <div>
      &ensp;
      </div>
      <DataGrid
        rows={professeurs} // Use the fetched data for rows
        columns={responsiveColumns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

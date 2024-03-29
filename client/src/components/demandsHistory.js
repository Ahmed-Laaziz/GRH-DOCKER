import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const backLink = process.env.REACT_APP_BACK_LINK;

export default function ColumnPinningDynamicRowHeight({prof}) {

  const [showEditDelete, setShowEditDelete] = React.useState(true);
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
        
      { field: '__t', headerName: 'Type', width: 310, editable: false },
      {
        field: 'statut',
        headerName: 'Statut',
        width: 260,
        renderCell: (params) => (
          <Stack spacing={1} sx={{ width: 1, py: 1 }}>
             {/* Display the value of the 'statut' field */}
            <React.Fragment>
              <Button
              size="small"
              sx={{
                borderRadius: 28,
                borderColor: (() => {
                  switch (params.value) {
                    case 'En attente':
                      return 'orange';
                    case 'En Cours':
                      return 'blue';
                    case 'Validée':
                      return 'green';
                    case 'Rejetée':
                        return 'red';
                    default:
                      return 'orange'; // Default color (you can change this)
                  }
                })(),
                color: (() => {
                  switch (params.value) {
                    case 'En attente':
                      return 'orange';
                    case 'En Cours':
                      return 'blue';
                    case 'Validée':
                      return 'green';
                    case 'Rejetée':
                      return 'red';
                    default:
                      return 'orange'; // Default color (you can change this)
                  }
                })(),
                }}
                variant="outlined"
              >
                {params.value} {/* Add your button content here */}
              </Button>
            </React.Fragment>
          </Stack>
        ),
      },
      { field: 'createdAt', headerName: 'Date Demande', width: 310, type: 'Date',valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString('en-US');
      },editable: false },
      { field: 'updatedAt', headerName: 'Dernière modification',width: 310, type: 'Date', valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString('en-US');
      },editable: true },
    ],
  );

  const [demandes, setDemandes] = useState([]);
  function separateByCapitalLetters(str) {
    // Remove "Demande" from the beginning of the string and then separate the remaining text by capital letters
    return str.replace(/^Demande/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  
  const fetchDemandes = async () => {
    try {
      const response = await axios.get(
        backLink+`/demandes/allDemandes` // Replace with your actual API endpoint
      );
      // setDemandes(response.data);
      const demandData = response.data;


      // Fetch and store professor names based on the demand's professor ID
      const professorNames = {};
      // for (const demand of demandData) {
      //   try {
      //     const professorResponse = await axios.get(backLink+`/agent/agents/${demand.professeur}`);
      //     professorNames[demand.professeur] = professorResponse.data.nom.split('|')[0] + " " + professorResponse.data.prenom.split('|')[0]; // Replace 'nom' with the actual professor name field
      //   } catch (error) {
      //     console.error('Error fetching professor name:', error);
      //   }
      // }
  
      // Attach professor names to demand objects
      const demandsWithProfessorNames = demandData.map((demand) => ({
        ...demand,
        professorName: professorNames[demand.professeur] || 'N/A', // Provide a default value if name not found
        __t: separateByCapitalLetters(demand.__t),
      }));
  
      setDemandes(demandsWithProfessorNames);
      // console.log(demandsWithProfessorNames)
    } catch (error) {
      console.error('Error fetching demandes:', error);
    }
  };

  useEffect(() => {
    // Fetch the title from the backend API

    fetchDemandes(); // Call the fetchTitle function when the component mounts
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ height: 500 }}>
        <DataGrid
          rows={demandes}
          columns={columns}
          getRowId={(row) => row._id}
          getRowHeight={() => 'auto'}
          initialState={{ pinnedColumns: { left: ['name'], right: ['actions'] } }}
        />
      </div>
    </div>
  );
}


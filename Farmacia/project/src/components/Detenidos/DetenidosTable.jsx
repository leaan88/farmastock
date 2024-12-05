import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

function DetenidosTable({ detenidos, onSincronizar }) {
  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<SyncIcon />}
          onClick={onSincronizar}
        >
          Sincronizar Detenidos
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Unidad Sanitaria</TableCell>
              <TableCell>Medicamentos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {detenidos.map((detenido) => (
              <TableRow key={detenido.id}>
                <TableCell>{detenido.nombre}</TableCell>
                <TableCell>{detenido.unidadSanitariaId}</TableCell>
                <TableCell>
                  {detenido.medicamentos.map(med => med.nombre).join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DetenidosTable;

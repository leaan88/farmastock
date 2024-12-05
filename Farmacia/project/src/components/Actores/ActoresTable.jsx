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

function ActoresTable({ actores, onSincronizar }) {
  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<SyncIcon />}
          onClick={onSincronizar}
        >
          Sincronizar Datos
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>US Asignadas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actores.map((actor) => (
              <TableRow key={actor.id}>
                <TableCell>{actor.nombre}</TableCell>
                <TableCell>{actor.apellido}</TableCell>
                <TableCell>{actor.dni}</TableCell>
                <TableCell>
                  {actor.unidadesSanitarias.join(', ') || 'Ninguna'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ActoresTable;

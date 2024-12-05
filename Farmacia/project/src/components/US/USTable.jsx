import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useActores } from '../../hooks/useActores';

function USTable({ unidadesSanitarias }) {
  const { actores, vincularActor, desvincularActor } = useActores();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre US</TableCell>
            <TableCell>Actor Asignado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unidadesSanitarias.map((us) => (
            <TableRow key={us.id}>
              <TableCell>{us.nombre}</TableCell>
              <TableCell>
                {us.actorId 
                  ? actores.find(a => a.id === us.actorId)?.nombre
                  : 'Sin asignar'}
              </TableCell>
              <TableCell>
                {us.actorId ? (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => desvincularActor(us.id)}
                  >
                    Desvincular
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => vincularActor(us.id)}
                  >
                    Vincular
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default USTable;

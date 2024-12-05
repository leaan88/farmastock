import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Box,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SaveIcon from '@mui/icons-material/Save';
import { useDetenidos } from '../hooks/useDetenidos';
import { useAuth } from '../hooks/useAuth';
import { es } from 'date-fns/locale';

function TablaMedicados() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();
  const { detenidos, loading, error, registrarMedicacion } = useDetenidos(user?.unidadSanitariaId);

  const handleEntregaMedicamento = (detenidoId, medicamentoId, cantidad) => {
    registrarMedicacion({
      detenidoId,
      medicamentoId,
      fecha: selectedDate.toISOString(),
      cantidadEntregada: Number(cantidad),
    });
  };

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Tabla de Medicados
      </Typography>
      <Box sx={{ mb: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <DatePicker
            label="Seleccionar fecha"
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Paper sx={{ p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Detenido</TableCell>
                <TableCell>Medicamento</TableCell>
                <TableCell>Dosis Diaria</TableCell>
                <TableCell>Cantidad Entregada</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detenidos.map((detenido) =>
                detenido.medicamentos.map((medicamento) => (
                  <TableRow key={`${detenido.id}-${medicamento.id}`}>
                    <TableCell>{detenido.nombre}</TableCell>
                    <TableCell>{medicamento.nombre}</TableCell>
                    <TableCell>{medicamento.cantidadDiaria}</TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        size="small"
                        inputProps={{ min: 0, max: medicamento.cantidadDiaria }}
                        onChange={(e) =>
                          handleEntregaMedicamento(
                            detenido.id,
                            medicamento.id,
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <SaveIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default TablaMedicados;
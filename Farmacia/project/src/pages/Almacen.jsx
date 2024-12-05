import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useStock } from '../hooks/useStock';
import { useAuth } from '../hooks/useAuth';

function Almacen() {
  const { user } = useAuth();
  const { stock, loading, error, registrarIngreso } = useStock(user?.unidadSanitariaId);
  const [nuevoIngreso, setNuevoIngreso] = useState({
    medicamentoId: '',
    cantidad: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarIngreso({
      ...nuevoIngreso,
      unidadSanitariaId: user.unidadSanitariaId,
      fechaIngreso: new Date().toISOString(),
    });
    setNuevoIngreso({ medicamentoId: '', cantidad: '' });
  };

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Almacén
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Registrar Ingreso de Medicamentos
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Medicamento"
                    value={nuevoIngreso.medicamentoId}
                    onChange={(e) =>
                      setNuevoIngreso({
                        ...nuevoIngreso,
                        medicamentoId: e.target.value,
                      })
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Cantidad"
                    value={nuevoIngreso.cantidad}
                    onChange={(e) =>
                      setNuevoIngreso({
                        ...nuevoIngreso,
                        cantidad: e.target.value,
                      })
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Registrar Ingreso
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Stock Actual
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Medicamento</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell>Último Ingreso</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stock.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.medicamentoId}</TableCell>
                      <TableCell align="right">{item.cantidad}</TableCell>
                      <TableCell>
                        {new Date(item.fechaIngreso).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Almacen;
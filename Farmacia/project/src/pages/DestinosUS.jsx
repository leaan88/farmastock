import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import USTable from '../components/US/USTable';
import { useUS } from '../hooks/useUS';

function DestinosUS() {
  const { unidadesSanitarias, loading, error } = useUS();

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Destinos US (Unidades Sanitarias)
      </Typography>
      <Paper sx={{ p: 2, mt: 2 }}>
        <USTable unidadesSanitarias={unidadesSanitarias} />
      </Paper>
    </Container>
  );
}

export default DestinosUS;
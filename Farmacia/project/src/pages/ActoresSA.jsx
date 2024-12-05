import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import ActoresTable from '../components/Actores/ActoresTable';
import { useActores } from '../hooks/useActores';

function ActoresSA() {
  const { actores, loading, error, sincronizarActores } = useActores();

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        SA (Actores)
      </Typography>
      <Paper sx={{ p: 2, mt: 2 }}>
        <ActoresTable 
          actores={actores} 
          onSincronizar={sincronizarActores}
        />
      </Paper>
    </Container>
  );
}

export default ActoresSA;

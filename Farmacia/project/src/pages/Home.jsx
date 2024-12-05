import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Stack, Box } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sistema de Farmacia
        </Typography>
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/destinos-us')}
          >
            Destinos US
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/actores-sa')}
          >
            SA (Actores)
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Home;
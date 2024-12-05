import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema de Farmacia
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => navigate('/')}>
            Inicio
          </Button>
          {user ? (
            <>
              <Button color="inherit" onClick={() => navigate('/tabla-medicados')}>
                Tabla de Medicados
              </Button>
              <Button color="inherit" onClick={() => navigate('/almacen')}>
                Almacén
              </Button>
              <Button color="inherit" onClick={logout}>
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <Button 
              color="inherit" 
              onClick={() => navigate('/login')}
              sx={{ display: location.pathname === '/login' ? 'none' : 'block' }}
            >
              Iniciar Sesión
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
import axios from 'axios';
import { API_URL } from '../config';

export async function fetchStock(unidadSanitariaId) {
  const response = await axios.get(
    `${API_URL}/stock?unidadSanitariaId=${unidadSanitariaId}`
  );
  return response.data;
}

export async function registrarIngreso(data) {
  const response = await axios.post(`${API_URL}/stock/ingreso`, data);
  return response.data;
}
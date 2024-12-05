import axios from 'axios';
import { API_URL } from '../config';

export async function fetchDetenidos(unidadSanitariaId) {
  const response = await axios.get(
    `${API_URL}/detenidos?unidadSanitariaId=${unidadSanitariaId}`
  );
  return response.data;
}

export async function registrarMedicacion(data) {
  const response = await axios.post(`${API_URL}/medicaciones`, data);
  return response.data;
}
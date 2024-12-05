import axios from 'axios';
import { API_URL } from '../config';

export async function fetchUnidadesSanitarias() {
  const response = await axios.get(`${API_URL}/unidades-sanitarias`);
  return response.data;
}

export async function updateUnidadSanitaria(data) {
  const response = await axios.put(
    `${API_URL}/unidades-sanitarias/${data.id}`,
    data
  );
  return response.data;
}
import axios from 'axios';
import { API_URL } from '../config';
import * as XLSX from 'xlsx';

export async function fetchActores() {
  const response = await axios.get(`${API_URL}/actores`);
  return response.data;
}

export async function sincronizarActores() {
  // Aquí iría la lógica para descargar y procesar el archivo Excel
  const excelUrl = `${API_URL}/actores/excel`;
  const response = await axios.get(excelUrl, { responseType: 'arraybuffer' });
  
  const workbook = XLSX.read(response.data, { type: 'array' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);

  // Procesar y actualizar los actores
  const actoresActualizados = data.map(row => ({
    nombre: row.nombre,
    apellido: row.apellido,
    dni: row.dni,
  }));

  // Enviar los datos actualizados al servidor
  await axios.post(`${API_URL}/actores/sync`, actoresActualizados);
}

import axios from 'axios';
import * as XLSX from 'xlsx';
import { API_URL } from '../config';

export async function sincronizarDetenidos() {
  const excelUrl = `${API_URL}/detenidos/excel`;
  const response = await axios.get(excelUrl, { responseType: 'arraybuffer' });
  
  const workbook = XLSX.read(response.data, { type: 'array' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);

  const detenidosActualizados = data.map(row => ({
    nombre: row.nombre,
    unidadSanitariaId: row.unidadSanitariaId,
  }));

  await axios.post(`${API_URL}/detenidos/sync`, detenidosActualizados);
}
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  fetchDetenidos,
  registrarMedicacion as registrarMedicacionApi,
} from '../services/detenidosService';

export function useDetenidos(unidadSanitariaId) {
  const queryClient = useQueryClient();

  const { data: detenidos, isLoading, error } = useQuery(
    ['detenidos', unidadSanitariaId],
    () => fetchDetenidos(unidadSanitariaId)
  );

  const registrarMedicacionMutation = useMutation(registrarMedicacionApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['detenidos', unidadSanitariaId]);
      queryClient.invalidateQueries(['stock', unidadSanitariaId]);
    },
  });

  return {
    detenidos: detenidos || [],
    loading: isLoading,
    error: error?.message,
    registrarMedicacion: registrarMedicacionMutation.mutate,
  };
}
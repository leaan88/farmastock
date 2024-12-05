import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  fetchStock,
  registrarIngreso as registrarIngresoApi,
} from '../services/stockService';

export function useStock(unidadSanitariaId) {
  const queryClient = useQueryClient();

  const { data: stock, isLoading, error } = useQuery(
    ['stock', unidadSanitariaId],
    () => fetchStock(unidadSanitariaId)
  );

  const registrarIngresoMutation = useMutation(registrarIngresoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['stock', unidadSanitariaId]);
    },
  });

  return {
    stock: stock || [],
    loading: isLoading,
    error: error?.message,
    registrarIngreso: registrarIngresoMutation.mutate,
  };
}
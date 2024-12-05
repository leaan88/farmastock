import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchUnidadesSanitarias, updateUnidadSanitaria } from '../services/usService';

export function useUS() {
  const queryClient = useQueryClient();

  const { data: unidadesSanitarias, isLoading, error } = useQuery(
    'unidadesSanitarias',
    fetchUnidadesSanitarias
  );

  const updateMutation = useMutation(updateUnidadSanitaria, {
    onSuccess: () => {
      queryClient.invalidateQueries('unidadesSanitarias');
    },
  });

  return {
    unidadesSanitarias: unidadesSanitarias || [],
    loading: isLoading,
    error: error?.message,
    updateUS: updateMutation.mutate,
  };
}
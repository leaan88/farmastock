import { useMutation, useQueryClient } from 'react-query';
import { sincronizarDetenidos } from '../services/detenidosExcelService';

export function useDetenidosSync() {
  const queryClient = useQueryClient();

  const sincronizarMutation = useMutation(sincronizarDetenidos, {
    onSuccess: () => {
      queryClient.invalidateQueries('detenidos');
    },
  });

  return {
    sincronizar: () => sincronizarMutation.mutate(),
    loading: sincronizarMutation.isLoading,
    error: sincronizarMutation.error?.message,
  };
}
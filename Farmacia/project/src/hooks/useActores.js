import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchActores, sincronizarActores as sincronizar } from '../services/actoresService';

export function useActores() {
  const queryClient = useQueryClient();

  const { data: actores, isLoading, error } = useQuery(
    'actores',
    fetchActores,
    {
      select: (data) => data?.map(actor => ({
        ...actor,
        unidadesSanitarias: actor.unidadesSanitarias || [],
      })),
    }
  );

  const sincronizarMutation = useMutation(sincronizar, {
    onSuccess: () => {
      queryClient.invalidateQueries('actores');
    },
  });

  return {
    actores: actores || [],
    loading: isLoading,
    error: error?.message,
    sincronizarActores: () => sincronizarMutation.mutate(),
  };
}

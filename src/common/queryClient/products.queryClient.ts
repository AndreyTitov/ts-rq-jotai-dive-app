/**
 * @file Contains Product query client.
 */
import { useQuery, useQueryClient } from 'react-query';
import productsService from '../services/products.service';

const GetProductsQuery = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['products'],
    queryFn: async () =>  await productsService.getProducts(),
    enabled: !queryClient.getQueryData(['products']),
  })
};

const productsQueryClient = {
  GetProductsQuery,
};

export default productsQueryClient;

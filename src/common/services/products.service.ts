/**
 * @file Contains products service.
 */

import { pureClient } from './apiClient.service';
import { PRODUCTS_ENDPOINT } from '../constants/api.constant';

const getProducts = async ():Promise<Array<any>> => {
  const { data } = await pureClient.get(PRODUCTS_ENDPOINT);
  return data;
};

const productsService = {
  getProducts,
};
export default productsService;

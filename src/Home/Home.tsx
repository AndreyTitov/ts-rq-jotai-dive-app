/**
 * @file Contains Home component.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import productsQueryClient from '../common/queryClient/products.queryClient';

const Home = () => {

  const navigate = useNavigate();

  const { data } = productsQueryClient.GetProductsQuery();

  return (
    <div>
      Home
      <button onClick={() => navigate('/products')}>Go to products</button>
    </div>
  )
};

export default Home;

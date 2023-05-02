/**
 * @file Contain Product component.
 */

import React, { useEffect, useState } from 'react';
import { ProductContainer } from './Product.style';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import productsQueryClient from '../common/queryClient/products.queryClient';

const Product = () => {

  const { productId } = useParams();

  const navigate = useNavigate();

  const {data, isLoading, isSuccess} = productsQueryClient.GetProductsQuery();
  console.log(data);
  return (
    <ProductContainer>
      <p>{productId}</p>
      {isLoading && (
        <div>
          Loading.......
        </div>
      )}
      <button onClick={() => navigate('/products')}>Go to products</button>
    </ProductContainer>
  )
};

export default Product;

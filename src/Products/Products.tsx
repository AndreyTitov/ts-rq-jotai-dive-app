/**
 * @file Contains Products component.
 */

import React from 'react';
import {
  ProductsWrapper,
  ProductContainer,
  ProductImageWrapper,
  ProductDescriptionWrapper,
} from './Products.style';
import { useNavigate } from 'react-router-dom';
import productsQueryClient from '../common/queryClient/products.queryClient';

const Products = () => {

  const navigate = useNavigate();

  const {data, isLoading, isSuccess} = productsQueryClient.GetProductsQuery();

  const selectProduct = (id: string): any => {
    navigate(`/products/${id}`);
  };

  return (
    <ProductsWrapper>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        isSuccess && data.map((product) => (
            <ProductContainer key={product.id}>
              <ProductImageWrapper>
                <img src={product.image}/>
              </ProductImageWrapper>
              <ProductDescriptionWrapper>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={() => selectProduct(product.id)}>See details</button>
              </ProductDescriptionWrapper>
            </ProductContainer>
          ))
      )}
    </ProductsWrapper>
  )
};

export default Products;

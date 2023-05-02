/**
 * @file Contains Products component styles
 */

import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProductContainer = styled.div`
  //width: calc(50% - 10px);
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

export const ProductImageWrapper = styled.div`
  max-width: 100px;
  padding: 0 20px;
  
  img {
    width: 100%;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  padding: 20px;
`;

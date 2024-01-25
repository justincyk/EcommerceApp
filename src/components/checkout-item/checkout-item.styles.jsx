import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 22.4%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Quantity = styled.div`
  width: 22%;
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const Price = styled.div`
  width: 22%;
`;

export const Name = styled.span`
  width: 22%;
`;

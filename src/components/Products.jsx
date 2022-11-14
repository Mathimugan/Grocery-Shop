import React from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import styled from "styled-components";
const Products = () =>
{
    const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;   
return(<Container>
{popularProducts.map(item => <ProductItem item={item} key={item.id}/>)}    
</Container>);
} 
export default Products;
import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Products from "../components/Products";
const Product = () =>
{
    const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;
       
return(<Container>
<Navbar/>  
<Title>Groceries</Title>
<FilterContainer> 
<Filter>
<FilterText>Filter  Products</FilterText>
<Select>
<Option>Vegetable</Option> 
<Option>Oils</Option>   
<Option>Masala</Option>  
</Select>
 </Filter> 
 
 <Filter>
 <FilterText>Sort  Products</FilterText>
 <Select>
  <Option>Sort Price By Desc</Option>
  <Option>Sort Price By Asc</Option>
  <Option>Newest</Option>
 </Select>
 </Filter>    
 </FilterContainer> 
 <Products/>
 <Footer/>
</Container>);
}
export default Product;

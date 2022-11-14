import styled from "styled-components";
const CategoryItem = ({item}) =>
{
      
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  background-color:#fbf0f4;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;


    cursor: pointer;
    font-weight: 600;
`;
return(<Container>
<Img src={item.img}/>
<Info>
<Title>{item.title}</Title> 
<Button>Shop Now</Button>   
</Info>
</Container>);
}
export default CategoryItem; 
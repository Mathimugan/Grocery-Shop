import Styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const Navbar = () =>
{
const Component= Styled.div`
height:60px;
`; 
const Wrapper = Styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center; 
`;
const Left = Styled.div`
flex:1;
display:flex;
align-items:center; 
`;

const SearchContainer = Styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input = Styled.input`
border:none;
`;
const Center = Styled.div`
flex:1;
text-align:center
`;
const Logo = Styled.h1`
font-weight:bold;
`;
const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end`;

const Menus = Styled.div`
font-size:14px;
margin-left:25px;

`;

return(<Component>
    <Wrapper>
    <Left>Left Side
     <SearchContainer>
        <SearchIcon style={{color:"gray",fontSize:14}}/>
        <Input/>
        </SearchContainer>   
    </Left>

        <Center>
        <Logo>Murugan Shop</Logo>
        </Center>

    <Right>
            <Menus>
            Register||Sign In
            <Badge badgeContent={4} color="primary">
            <AddShoppingCartOutlinedIcon/>
            </Badge>
            </Menus>
        </Right>
    </Wrapper>
    </Component>);
}
export default Navbar;
import React,{useState} from "react"; 
import Styled from "styled-components";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {sliderItems} from "../data";
const Slider = () =>
{
    const [slideIndex,setSlideIndex]=useState(0);
const handleArrow = (direction) =>
{
   
if(direction === "left")
{
    
setSlideIndex(slideIndex >  0 ? slideIndex -1 :2)
}
else if(direction === "right")
{
    setSlideIndex(slideIndex < 2 ? slideIndex +1  :0)
}

}    
const SliderContainer = Styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`;
const Arrow=Styled.div`
width:50px;
z-index:2;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
`; 
const Wrapper = Styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw)`
;

const Slide=Styled.div`
display:flex;
align-items:center;
height:100vh;
width:100vw;
background-color:#${props=>props.bg}
`;
const ImgContainer=Styled.div`
height:100%;
flex:1`;
const InfoContainer=Styled.div`
flex:1;
padding:10px`;

const Img=Styled.img`
height:80%;
`;

const Title=Styled.h1`
font-size:70px;`;
const Desc=Styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;
const  Button= Styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;`;
return(<SliderContainer>
<Arrow direction="left" onClick={()=>handleArrow("left")}>
<KeyboardArrowLeftOutlinedIcon>
</KeyboardArrowLeftOutlinedIcon>
</Arrow>
<Wrapper slideIndex={slideIndex}>

{sliderItems.map(item =>
    <Slide bg={item.bg} key={item.bg}>   
<ImgContainer>
<Img src={item.img}></Img>
</ImgContainer> 
<InfoContainer>
 <Title>{item.title}</Title>
 <Desc>{item.desc}</Desc>
 <Button>Shop Now</Button>   
</InfoContainer>
</Slide>
)}
</Wrapper>
<Arrow direction="right" onClick={()=>handleArrow("right")}>
<KeyboardArrowRightOutlinedIcon>
</KeyboardArrowRightOutlinedIcon>
</Arrow>
</SliderContainer>);
}
export default Slider;
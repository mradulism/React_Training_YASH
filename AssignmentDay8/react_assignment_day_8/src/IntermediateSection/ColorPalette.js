import React from 'react'
import { Container, Button} from 'reactstrap';
import { useNavigate } from "react-router-dom";
const ColorPalette = () => {


  const navigate = useNavigate();
  
  const clickHandler =(color) =>{

    console.log(color);
    navigate("/colouredText",{state:{color:color}})}
  
  return (
    <div>
        <Container>
        <br></br>
        <Button onClick={()=>clickHandler("#F56EB3")} style={{"backgroundColor":"#F56EB3", "border": "none","padding": "15px 32px"}} > </Button>            
        <Button onClick={()=>clickHandler("#7F167F")} style={{"backgroundColor":"#7F167F", "border": "none","padding": "15px 32px"}} > </Button>            
        <Button onClick={()=>clickHandler("#CB1C8D")} style={{"backgroundColor":"#CB1C8D", "border": "none","padding": "15px 32px"}}> </Button>            
        <Button onClick={()=>clickHandler("#460C68")} style={{"backgroundColor":"#460C68", "border": "none","padding": "15px 32px"}}> </Button>            
        <Button onClick={()=>clickHandler("#2D033B")} style={{"backgroundColor":"#2D033B", "border": "none","padding": "15px 32px"}}> </Button>            
        <Button onClick={()=>clickHandler("#810CA8")} style={{"backgroundColor":"#810CA8", "border": "none","padding": "15px 32px"}}> </Button>            
        <Button onClick={()=>clickHandler("#C147E9")} style={{"backgroundColor":"#C147E9", "border": "none","padding": "15px 32px"}}> </Button>  
                  
        </Container>
    </div>
  )
}

export default ColorPalette
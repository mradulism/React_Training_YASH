import React from 'react'
import { useLocation } from "react-router-dom";
import { Container} from 'reactstrap';

const ColouredText = (props) => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
        <Container>
            <h1 style={{"color": location.state.color}}>The Sample Header h1 Text</h1>
        </Container>

    </div>
  )
}

export default ColouredText
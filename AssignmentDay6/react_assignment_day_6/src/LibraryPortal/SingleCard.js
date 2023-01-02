import React, { useState } from 'react'

import { Container, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap'

const SingleCard = (props) => {
    const [visible, setVisible] = useState(false);
    const makeCardVisible = () =>{
        setVisible(!visible)
    }
  return (
        <Card className="m-2" style={{'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <CardBody>
              <CardTitle tag="h5">
                {props.book.title}
              </CardTitle>
              <CardText>
                Author : {props.book.Author}
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                Genre : {props.book.genre}
              </ListGroupItem>
              {visible && <ListGroupItem>
                Summary : {props.book.summary}
              </ListGroupItem>}
             
            </ListGroup>
            <CardBody>
            <Button color="success" onClick={()=>makeCardVisible()}>View Summary</Button>
             
            </CardBody>
          </Card>
  )
}

export default SingleCard
import React,{ useState } from 'react'
import { Container, Button, Alert } from 'reactstrap';


const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <div>
            <Container>
            <br/>
                <div>
                    <Button
                        color="primary"
                        onClick={increment}
                    >
                        Increment
                    </Button>
                    
                    <span>" -------------------- "</span>

                    <Button
                        color="danger"
                        onClick={decrement}
                    >
                        Decrement
                    </Button>

                </div><br/>

                <Alert color="primary">
                    {count}
                </Alert>
            </Container>
    </div>
  )
}

export default Counter
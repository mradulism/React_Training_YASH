import React from 'react'
import {FormGroup, Input, Label, Button } from 'reactstrap'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const AddDefect = () => {
    // const [addDefectDeatil,setAddDefectDetail]=useState({userId:'',defectCategory:'',defectPriority:'', description:'', status:''});
    
    //handling inputs
    const [inputVal,setInputVal]=useState({category:'',description:'',priority:0})
    //console.log(inputVal);
    //setting priority value
    //let p=0;
    // setInputVal({...inputVal,priority:p})
    // console.log('inputs',inputVal)
    const handleDefectChange = (e)=>{
        let input = inputVal
        input  = {...input,category:e.target.value}
        switch(e.target.value){
            case '': 
            setInputVal({...input,priority:''})
            break;
            case 'UI':
            setInputVal({...input,priority:1})
            break;
            case 'Functional':
            setInputVal({...input,priority:2})
            break;
            case 'Change Request':
            setInputVal({...input,priority:3})
            break;
            case 'other':
            setInputVal({...input,priority:4})
            break;
            default :
            break;
        }
        
    }
    const saveDefect = async (e) => {
        console.log(inputVal)
        e.preventDefault();
        await fetch('http://localhost:5000/addedDefects', {
            method: 'POST',
            body: JSON.stringify({description:inputVal.description,defectPriority:inputVal.priority,defectCategory:inputVal.category, userId:sessionStorage.getItem('authenticatedUserId'),status:'open'}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div>

            <Form className='container w-50 h-auto d-flex my-5'>
                <div style={{ width:'100%',"border": "solid 0.5px #C0C0C0", "padding": "15px", "alignContent": "center", "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

                    {/*Form Header Div*/}
                    <div style={{
                        "backgroundColor": "#00A8CC", "margin": "0px 0px 25px 0px", "width": "100%", "height": "40px",
                        "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px", "textAlign": "center"
                    }}>
                        <h5 style={{ "color": "white", "padding-top": "5px" }}> Add Defect</h5>
                    </div>

                    {/*Form Components*/}
                    <FormGroup className='d-flex'>
                        <div className='p-2'>
                            <Label for="defectType" >Defect Category</Label>
                        </div>
                        <Form.Select name="defectType" value={inputVal.category} onChange={(e)=>{handleDefectChange(e)}} >
                            <option value="">Select</option>
                            <option value="UI">UI</option>
                            <option value="Functional">Fuctional</option>
                            <option value="Change Request">Change Request</option>
                            <option value="other">Others</option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <div className='p-2'>
                            <Label for="description"> Description </Label>
                        </div>
                        <Form.Control as="textarea" name='description' value={inputVal.description} rows={3} 
                        placeholder="Enter Your Defect Descripton" 
                        onChange={(e)=>{setInputVal({...inputVal,description:e.target.value})}}  />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <div className='p-2'>
                            <Label for="priority">Priority</Label>
                        </div>
                        <Input id="priority" name="priority" value={inputVal.priority} placeholder="Priority" type="text" disabled/>
                    </FormGroup>
                    <Button style={{ "backgroundColor": "#00A8CC" }} disabled={inputVal.category==='' || inputVal.description===''} onClick={saveDefect}>Add Defect</Button>
                </div>

            </Form>

        </div>
    )
}

export default AddDefect
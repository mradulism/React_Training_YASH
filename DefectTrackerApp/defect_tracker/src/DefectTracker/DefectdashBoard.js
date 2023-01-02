import React, { useEffect } from 'react'
import { Container, Table, Form } from 'reactstrap'
import { useState } from 'react'
const DefectdashBoard = () => {
    const userRole = sessionStorage.getItem('userRole')
    console.log({userRole})
    const [addedDefects, setAddedDefects] = useState([]);

    const [filter,setFilter] = useState({category:"",priority:""})

    const [filteredData, setFilteredData] = useState([]);

    //getting the userId from session storage
    let userId = sessionStorage.getItem('authenticatedUserId');

    //fetching all defects
    const fetchAddedDefects = async () => {
        const data = await fetch('http://localhost:5000/addedDefects');
        let response = await data.json();
        if(userRole === 'user'){
           response =  response.filter(d=>d.userId == userId)
        }
        setAddedDefects(response);
        setFilteredData(response);
        
    }


    console.log('added defects', addedDefects)

    //filtering the addedDefects based on userID
    // const filterDefectBasedOnUser = () =>{
    //     let tempArr=[];
    //     addedDefects.forEach( defects => {
    //         console.log('defectuserId',defects.userId,typeof defects.userId)

    //         if(defects.userId == userId){
    //             tempArr.push(defects);
    //         }
    //     });
    //     setDesiredDefects(tempArr);
    //     console.log(desiredDefects);
    // }

    //calling above function on useEffect
    useEffect(() => {
        fetchAddedDefects();
    }, [])

    const filterData=()=>{
        if(!filter.category && !filter.priority){
            return setFilteredData(addedDefects)
        }
        else if(filter.priority){

            const data = addedDefects.filter(defect=>
                defect.defectPriority == filter.priority
        )
        setFilteredData(data);
        }
        else if(filter.category){
            const data = addedDefects.filter(defect=>
                defect.defectCategory === filter.category
        )
        setFilteredData(data);
        }
    }

    const closeDefect = async(defect) => {
        if(userRole == 'admin' )
        {
            const updatedData = await fetch(`http://localhost:5000/addedDefects/${defect.id}`,{
                method: 'PUT', // or 'PUT'
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({...defect,status:"close"}),
            })
            const data = await updatedData.json()
            fetchAddedDefects();
        }
        else if(userRole == 'user' )
        {
            const updatedData = await fetch(`http://localhost:5000/addedDefects/${defect.id}`,{
                method: 'DELETE', // or 'PUT'
            })
            const data = await updatedData.json()
            fetchAddedDefects();
        }
    }

    //console.log('filtered Defects',desiredDefects);
    return (
        <div>

            <Container className='border my-5'>

                <h2>Defect Dashboard</h2><hr />
                <h5> Filter Details</h5>

                <b>Category</b>
                <div className="dropdown">
                    <select onChange={(e)=>{setFilter({...filter,category:e.target.value});}} style={{width:"150px",borderRadius:"5px",margin:"2px",padding:"2px"}} >
                        <option value="">Select</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                        <option value="other" >Others</option>
                    </select>
                </div>
                <div><span>or</span></div>
                <b>Priority</b>
                <div className="dropdown">
                    <select onChange={(e)=>{setFilter({...filter,priority:e.target.value});
                                                }} style={{width:"150px",borderRadius:"5px",margin:"2px",padding:"2px"}}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4" >4</option>
                    </select>
                </div><br/>
                <button className="btn btn-primary" onClick={()=>{filterData()}}>Apply Filter</button>
                <br /><hr />
                <span style={{color:"red",fontSize:"12px"}}>Search results : {filteredData.length} </span>
                <h5> Defect Details</h5>
                <hr />
                <Table
                    borderless
                    hover
                    responsive
                    size=""
                >
                    <thead>
                        <tr>
                            <th>
                                Defect Category
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Priority
                            </th>

                            <th>
                                Status
                            </th>

                            <th>
                                Change Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((d) => {
                                    return <tr>

                                        <td>
                                            {d.defectCategory}
                                        </td>
                                        <td>
                                            {d.description}
                                        </td>
                                        <td>
                                            {d.defectPriority}
                                        </td>
                                        <td>
                                            {d.status}
                                        </td>
                                        <td>
                                            {d.status === 'open' && <span className="actionButton" onClick={()=>closeDefect(d)}>{userRole==='user'?'Delete Defect':'Close Defect'}</span>}
                                            {d.status === 'close' && <span className="noAction" >Defect Closed</span>}
                                        </td>
                                    </tr>
                            })}
                    </tbody>
                </Table>

            </Container>

        </div>
    )
}

export default DefectdashBoard
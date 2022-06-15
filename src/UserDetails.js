import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DetailsCard from './DetailsCard'
import Grid from '@mui/material/Grid' 

function UserDetails() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [item, setItem] = useState(null)
    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/` + id)
            .then(res => {
                setIsLoaded(true)
                setItem(res.data)
            })
            .catch(error => {
                setIsLoaded(true)
            })
    }, [id])

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
                <Grid item xs={12}>
        <Grid justifyContent="center" container spacing={3}>
                <DetailsCard item={item}/>
            </Grid>
            </Grid>
        );
    }
}

export default UserDetails;
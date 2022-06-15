import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import UserCards from './UserCards'

function Home() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [result, setResult] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setIsLoaded(true)
                setResult(res.data)
            })
            .catch(error => {
                setIsLoaded(true)
                setError(error)
            })
    }
        , [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
                <Grid item xs={12}>
        <Grid justifyContent="center" container spacing={3}>
                {result.map(item => (
                    <UserCards item={item} />
                ))}
            </Grid>
            </Grid>
        );
    }
}


export default Home;
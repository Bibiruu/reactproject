import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {useNavigate} from 'react-router-dom';

function DetailsCard(props){
    
    const navigate = useNavigate();

return (
    <Grid key={props.item.id} item alignItems={'flex-start'}>
            <Card sx={{ minWidth: 600 }}>
                <CardContent>
                    <Typography>Name : {props.item.name}</Typography>
                    <Typography>UserName : {props.item.username}</Typography>
                    <Typography>Email : {props.item.email}</Typography>
                    <Typography>Phone : {props.item.phone}</Typography>
                    <Typography>Company : {props.item.company.name}</Typography>
                    <Typography>Website : <Link>{props.item.website}</Link></Typography>
                    <Typography>Address : 
                        <Typography>Street : {props.item.address.street}</Typography>
                        <Typography>Suite : {props.item.address.suite}</Typography>
                        <Typography>City : {props.item.address.city}</Typography>
                        <Typography>ZipCode : {props.item.address.zipcode}</Typography>
                    </Typography>
<br />
                    <Button size="small" variant="contained" onClick={() => {navigate('/')}}>Back</Button>
                </CardContent>
            </Card>
            
        </Grid>
)
}
export default DetailsCard;
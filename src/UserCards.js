import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import stringAvatar from './AvatarService';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {useNavigate} from 'react-router-dom';


function UserCards(props) {

    const navigate = useNavigate();
    return (
        <Grid key={props.item.id} item textAlign={'center'}>
            <Card sx={{ minWidth: 300 }}>
                <CardContent>
                    <Stack alignItems={'center'} justifyContent={'center'} direction="row" spacing={2}>
                        <Avatar {...stringAvatar(props.item.name)} variant="rounded" alt={props.item.name}  />
                    </Stack>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {props.item.name}
                    </Typography>
                    <Typography sx={{ mb: 1 }} color="text.secondary">
                        {`@` + props.item.username}
                    </Typography>
                    <Link target={'_blank'} href={props.item.website}>{props.item.website}</Link>
<br />
<br />
                    <Button size="small" variant="contained" onClick={() => {navigate(`/userdetails/` + props.item.id)}}>More Details</Button>
                </CardContent>
            </Card>
            
        </Grid>
    )
}



export default UserCards;
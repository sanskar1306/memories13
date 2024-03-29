import React,{useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {getPosts} from './actions/posts'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(0)
    useEffect(()=>{
       dispatch(getPosts());
    },[currentId,dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading}  variant="h3" align="center">Memories</Typography>
                <img src={memories} className={classes.image} alt = "memories" height={60}  />

            </AppBar>
            <Grow in>
                <Container >
                    <Grid container justify="space-between" alignItems="stretch" 
                    spacing={3}>
                        <Grid item xs={12} sm={7} >
                          <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                         </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Pic1 from '../images/pic1.jpeg'


const useStyles = makeStyles((theme) =>({
   
img:{
    width:'100%',
    height:'400px'
}

}))
const Home = () => {
    const classes = useStyles()
    return (
        <div>

         <Grid item xs={12} >
             <img  className={classes.img}  src= {Pic1} alt='banner' />
             
             </Grid>   
        </div>
    )
}

export default Home

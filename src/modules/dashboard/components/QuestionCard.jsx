import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';
import FormDialog from './Form';

//  as the name suggest it is a single question card  which will get called in questions jsx file 

export default function QuestionCard({question}) {
    const [lock ,setLock] = React.useState(false)
    const [data ,setData] = React.useState()
    
    const shareData ={
        heading:"Share with your friends",
        button: "Share",
      
    }
    const unlockData ={
      heading:"Unlock it to play",
      button: "UNLOCK",
      input:[1]
  }

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,position:"relative"  , height:"350px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="./vite.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {question}
        </Typography>
        
      </CardContent>
      <CardActions sx={{position:"absolute" , bottom:0 , right:0}}>
        <Button aria-modal="true" size="small" onClick={()=>{setLock((prev)=>!prev); setData(shareData)}}    >Share</Button>
        <Button aria-modal="true" size="small"  onClick={()=>{setData(unlockData); setLock((prev)=>!prev);    }} > {lock ?"OPENED" :"Locked"  }</Button>
      </CardActions>
    </Card>
    
    <Form visible= {lock} setVisible={setLock} formdata={data} question={question} />

    </div>
  );
}
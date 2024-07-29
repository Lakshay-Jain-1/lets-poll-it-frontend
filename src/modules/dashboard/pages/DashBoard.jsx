import * as React from 'react';
import Questions from '../components/Questions';
import { Create } from '../components/Create';



function Dashboard() {


  return (
    <div style={{ position: "relative" }}>

      <Create />
      <Questions />

    </div>
  )
}


export default Dashboard


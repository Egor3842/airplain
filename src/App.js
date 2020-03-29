import React from 'react';
import s from './App.module.scss';
import Header from './Header';
import PhotoSesion from './PhotoSesion';
import Organization from './Organization';
import TakePhoto from './TakePhoto';
import SimpleMap from './Map.js';


const App=()=>{
  return(
    <div>
    <Header/>
    <PhotoSesion/>
    <Organization/>
    <TakePhoto/>
    <SimpleMap/>
    </div>
  )
}
export default App;

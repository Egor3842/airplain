import React from 'react';
import s from './App.module.scss';
import Header from './Header';
import PhotoSesion from './PhotoSesion';
import Organization from './Organization';
import TakePhoto from './TakePhoto';
import SimpleMap from './Map.js';
import Review from './Review';


const App=()=>{
  return(
    <div>
    <Header/>
    <PhotoSesion/>
    <Organization/>
    <TakePhoto/>
    <SimpleMap/>
    <Review/>
    </div>
  )
}
export default App;

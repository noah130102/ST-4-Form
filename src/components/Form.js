import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import cricketer from './cricketer.jpg';
import cup from './cup.png'


export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [address, setaddress] = useState('');
  const [rating, setrating] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = address, d=rating;
    Cricketers.push({ a, b, c ,d});
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div className='background'>
      <div><h1 className ='school '>Student Rankings</h1></div>
      {/* <h1 className ='school '>School Rankings</h1> */}
      <form className='container'>
      <label>Name Of Student</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label>Address</label><br></br>
        <input type="text"   placeholder='Enter Address' onChange={(e) => setaddress(e.target.value)} required></input><br></br>
        <label>Rank</label><br></br>
        <input type="number"   placeholder='Enter Rank' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        
        <label >Marks Aquired</label><br></br>
        <input type="number" placeholder='Enter Marks' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      {/* <img className='imagecup' src={cup}></img> */}
      {/* <img className='image' src={cricketer}></img> */}

    </div>
  )
}

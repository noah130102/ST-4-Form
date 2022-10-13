import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cricketers from './Cricketers';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1 className='school'>Student Rankings</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name of Students</th>
            <th>Address</th>
            <th>Marks</th>
          </tr>

        </thead>
        <tbody>
          {
            Cricketers.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>
                  <td>{item.d}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}


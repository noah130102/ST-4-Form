import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Schools from './Schools';
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
            Schools.map((item)=>{
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


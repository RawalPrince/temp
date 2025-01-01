import React from 'react'
import './App.css'
import Eatin from './assets/EatIn.jpeg'
import TakeAway from './assets/TakeAway.avif'
export default function App() {
  return (
    <div id='main_div'>
      <div id='sub_main_div'>
        <div id='logo'></div>
        <div id='sub_div_1'>
          Where would you like to eat?
        </div>
        <div id='sub_div_2'>
          <div className='sub_div'>
            <div className='sub_sub_1'>Eat In</div>
            <div className='sub_sub_2'>
              <img src={Eatin} alt='Eatin' style={{width:'100%', height:'100%', objectFit:'cover', scale:'1.2'}}/>
            </div>
          </div>
          <div className='sub_div'>
            <div className='sub_sub_1'>Take Away</div>
            <div className='sub_sub_2'>
            <img src={TakeAway} alt='Takeaway' style={{width:'100%', height:'100%', objectFit:'cover', scale:'1.2'}}/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

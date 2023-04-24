import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assests/borabora.jpg'
import BoraBora2 from '../../assests/borabora2.jpg'
import Maldives from '../../assests/maldives.jpg'
import Maldives2 from '../../assests/maldives2.jpg'
import Maldives3 from '../../assests/maldives3.jpg'
import KeyWest from '../../assests/keywest.jpg'
import SelectsImg from '../Selectsimg/SelectsImg'


function Selects() {
  return (
    <div name='views' className='selects'>
        <div className='container'>
   
      <SelectsImg bgImg={BoraBora} text='Bora Bora' />
      <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
      <SelectsImg bgImg={Maldives} text='Maldives' />
      <SelectsImg bgImg={Maldives2} text='Grenada' />
      <SelectsImg bgImg={Maldives3} text='Barbados' />
      <SelectsImg bgImg={KeyWest} text='Key West' />
               
      </div>
    </div>
  )
}

export default Selects

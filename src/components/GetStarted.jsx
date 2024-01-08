import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer` }>
    <div className={`${styles.flexCenter} flex-col  rounded-full`}>
<div className={`${styles.flexStart} flex-row`}>
  <p className='font-popping text-[18px] leading-[23px] font-medium'>
    <span className='text-white mr-2'>Get</span>
    
  </p>
  <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow'></img>
</div>
<p className='font-popping text-[18px] leading-[23px] font-medium'>
    <span className='text-white'>Started</span>
   
  </p>
    </div>
    </div>
  )
}

export default GetStarted

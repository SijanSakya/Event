import React from 'react'
import MasterLayout from '../../../components/Masterlayout/Master'
import FreqAsked from '../../../components/HomePage/freqAsked'

const index = () => {
  return (
     <>
     <MasterLayout>
      <div className='bg-black'>
      <div className='h-[100px]'></div>
      <FreqAsked />
      </div>
     
        </MasterLayout>
       
     </>
  )
}

export default index
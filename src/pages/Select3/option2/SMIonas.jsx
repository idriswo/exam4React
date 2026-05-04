import  { memo } from 'react'
import Section1Smionas from './Section1SMIonas/Section1Smionas'
import Section2SMIonas from './Section2SMIonas/Section2SMIonas'

const SMIonas = memo(() => {
  return (
   <>
   <Section1Smionas/>
   <Section2SMIonas/>
   </>
  )
})

export default SMIonas
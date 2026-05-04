import  { memo } from 'react'
import Section1Komanda from './Section1Komanda/Section1Komanda'
import Section3Komanda from './Section3Komanda/Section3Komanda'
import Section2Komanda from './Section2Komanda/Section2Komanda'

const Komanda = memo(() => {
  return (
   <>
   <Section1Komanda />
   <Section2Komanda/>
   <Section3Komanda/>
   </>
  )
})

export default Komanda
import { memo } from 'react'
import Secction2IQ from '../option2/Secction2IQ/Secction2IQ'
import Section2 from '../../Select2/option4/Section2/Section2'
import Section4Vse from '../../Select2/option4/Section4Vse/Section4Vse'
import Section12 from '../../Home/Section12/Secrion12'
import Section5Villages from '../option1/Section5Village/Section5Villages'
import Section1Usadi from './Section1Usadi/Section1Usadi'

const usadi = memo(() => {
  return (
    <>
      <Section1Usadi />
      <Secction2IQ />
      <Section5Villages />
      <Section2 />
      <Section4Vse />
      <Section12 />
    </>
  )
})

export default usadi
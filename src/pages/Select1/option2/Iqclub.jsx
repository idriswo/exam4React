import { memo } from 'react'
import Section2 from '../../Select2/option4/Section2/Section2'
import Section4Vse from '../../Select2/option4/Section4Vse/Section4Vse'
import Section12 from '../../Home/Section12/Secrion12'
import Section7Village from '../option1/Section7Village/Section7Village'
import Section8Village from '../option1/Section8Village/Section8Village'
import Section5Villages from '../option1/Section5Village/Section5Villages'
import Section1IQ from './Section1IQ/Section1IQ'
import Secction2IQ from './Secction2IQ/Secction2IQ'

const Iqclub = memo(() => {
  return (
    <>
      <Section1IQ />
      <Secction2IQ />
      <Section5Villages />
      <Section8Village />
      <Section7Village />
      <Section2 />
      <Section4Vse />
      <Section12 />
    </>
  )
})

export default Iqclub
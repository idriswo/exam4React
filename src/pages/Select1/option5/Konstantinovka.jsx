import { memo } from 'react'
import Secction2IQ from '../option2/Secction2IQ/Secction2IQ'
import Section5Villages from '../option1/Section5Village/Section5Villages'
import Section2 from '../../Select2/option4/Section2/Section2'
import Section4Vse from '../../Select2/option4/Section4Vse/Section4Vse'
import Section12 from '../../Home/Section12/Secrion12'
import Section1Konstantinovka from './Section1Konstantinovka/Section1Konstantinovka'

const Konstantinovka = memo(() => {
  return (
    <>
      <Section1Konstantinovka />
      <Secction2IQ />
      <Section5Villages />
      <Section2 />
      <Section4Vse />
      <Section12 />
    </>
  )
})

export default Konstantinovka
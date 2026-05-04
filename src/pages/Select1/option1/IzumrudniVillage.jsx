import { memo } from 'react'
import Section1Village from './Section1Village/Section1Village'
import Section2Village from './Section2Village/Section2Village'
import Section3Village from './Section3Village/Section3Village'
import Section4Village from './Section4Village/Section4Village'
import Section5Villages from './Section5Village/Section5Villages'
import Section6Village from './Section6Village/Section6Village'
import Section7Village from './Section7Village/Section7Village'
import Section8Village from './Section8Village/Section8Village'
import Section2 from '../../Select2/option4/Section2/Section2'
import Section12 from '../../Home/Section12/Secrion12'
import Section4Vse from '../../Select2/option4/Section4Vse/Section4Vse'

const IzumrudniVillage = memo(() => {
  return (
    <>
      <Section1Village />
      <Section2Village />
      <Section3Village />
      <Section4Village />
      <Section5Villages />
      <Section6Village />
      <Section8Village />
      <Section7Village />
      <Section2 />
      <Section4Vse />
      <Section12 />
    </>
  )
})

export default IzumrudniVillage
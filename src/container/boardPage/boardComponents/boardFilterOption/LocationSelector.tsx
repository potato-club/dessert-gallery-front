import React from 'react'
import { LocationSelectorWrap,CityWrap, DistrictWrap } from './LocationSelector.style'

export default function LocationSelector() {
  return (
    <LocationSelectorWrap>
      <CityWrap></CityWrap>
      <DistrictWrap></DistrictWrap>
    </LocationSelectorWrap>
  )
}

import React, { useState, ChangeEvent, useEffect  } from 'react'
import { LocationSelectorWrap,CityWrap, City, DistrictWrap, CheckboxInput, CheckboxLabel } from './LocationSelector.style'
import { regionsCoordData } from '../../../../constants/regionsCoord';
import type { locationCoordData,selectLocationCoordOptionData } from '../../../../types/componentsData';
import type { locationCoordSelectorProps } from '../../../../types/componentsProps';
import { findCoordLocation } from '../../../../utils/findLocation';

export default function LocationSelector({onChangeLocation}: locationCoordSelectorProps) {
  const [selectOption, setSelectOption] = useState<locationCoordData[]>([]);

  const onChangeSelectCity = (e: ChangeEvent<HTMLInputElement>) => {
    const data = findCoordLocation(e.target.value)
    setSelectOption(data)
  }

  const onChangeDistrict = ({location, idx}: selectLocationCoordOptionData) => {
    onChangeLocation(location.child[idx].lat, location.child[idx].lng)
  }

  return (
    <LocationSelectorWrap>
      <CityWrap>
        <City>
          {
            regionsCoordData.map(e => (
                <CheckboxLabel key={e.city}>
                {e.city}
                
                <CheckboxInput onChange={onChangeSelectCity} key={e.city} name='city' id={e.city} value={e.city}/>
              </CheckboxLabel>
            ))
          }
        </City>
      </CityWrap>
      <DistrictWrap>
        {
          selectOption.length !== 0 && selectOption[0].child.map((e,idx) => (
              <CheckboxLabel key={e.title}>
              {e.title}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e.title} name='district' id={e.title} value={e.title}/>
            </CheckboxLabel>
          ))
        }
      </DistrictWrap>
    </LocationSelectorWrap>
  )
}

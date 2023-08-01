import React, { useState, ChangeEvent  } from 'react'
import { LocationSelectorWrap,CityWrap, DistrictWrap, CheckboxInput, CheckboxLabel } from './LocationSelector.style'
import { regionsData } from '../../../../constants/regions'
import type { locationData,selectLocationOptionData } from '../../../../types/componentsData';
import type { locationSelectorProps } from '../../../../types/componentsProps';

export default function LocationSelector({onChangeLocation}: locationSelectorProps) {
  const [selectOption, setSelectOption] = useState<locationData[]>([]);

  const onChangeSelectCity = (e: ChangeEvent<HTMLInputElement>) => {
    const data = regionsData.filter(ob=> ob.city === e.target.value)
    setSelectOption(data)
  }

  const onChangeDistrict = ({location, idx}: selectLocationOptionData) => {
    let str = '';
    if(idx === 0){
      str = location.city;
    }else{
      str = location.city + ' '+ location.child[idx]
    }
    onChangeLocation(str)
  }

  return (
    <LocationSelectorWrap>
      <CityWrap>
          {
            regionsData.map(e => (
              <CheckboxLabel key={e.city}>
                {e.city}
                <CheckboxInput onChange={onChangeSelectCity} key={e.city} name='city' id={e.city} value={e.city}/>
              </CheckboxLabel>
            ))
          }
        
      </CityWrap>
      <DistrictWrap>
        {
          selectOption.length !== 0 && selectOption[0].child.map((e,idx) => (
            <CheckboxLabel key={e}>
              {e}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e} name='district' id={e} value={e}/>
            </CheckboxLabel>
          ))
        }
      </DistrictWrap>
    </LocationSelectorWrap>
  )
}

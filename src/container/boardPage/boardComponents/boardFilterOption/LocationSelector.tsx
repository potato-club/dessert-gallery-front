import React, { useState, ChangeEvent, useEffect  } from 'react'
import { LocationSelectorWrap,CityWrap, DistrictWrap, CheckboxInput, CheckboxLabel } from './LocationSelector.style'
import { regionsData } from '../../../../constants/regions'
import type { locationData,selectLocationOptionData } from '../../../../types/componentsData';
import type { locationSelectorProps } from '../../../../types/componentsProps';
import { findLocation } from '../../../../utils/findLocation';

export default function LocationSelector({selectedLocation, onChangeLocation}: locationSelectorProps) {
  const [selectOption, setSelectOption] = useState<locationData[]>([]);
  const [districtOption, setDistrictOption] = useState<string>("")

  useEffect(()=>{
    let data = selectedLocation.split(" ")
    if(data.length === 1){
      if(data[0] !== ''){
        setSelectOption(findLocation(data[0]))
        setDistrictOption(data[0]+" 전체")
      }else{
        setSelectOption([])
        setDistrictOption("")
      }
    }else{
      setSelectOption(findLocation(data[0]))
      setDistrictOption(data[1])
    }
  }, [selectedLocation])


  const onChangeSelectCity = (e: ChangeEvent<HTMLInputElement>) => {
    const data = findLocation(e.target.value)
    setSelectOption(data)
  }

  const onChangeDistrict = ({location, idx}: selectLocationOptionData) => {
    setDistrictOption(location.child[idx]);
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
              selectOption.length !== 0 && selectOption[0].city === e.city? (
                <CheckboxLabel key={e.city}>
                {e.city}
                <CheckboxInput onChange={onChangeSelectCity} key={e.city} name='city' id={e.city} value={e.city} checked={true}/>
              </CheckboxLabel>
              ):(
                <CheckboxLabel key={e.city}>
                {e.city}
                
                <CheckboxInput onChange={onChangeSelectCity} key={e.city} name='city' id={e.city} value={e.city}/>
              </CheckboxLabel>
              )
            ))
          }
        
      </CityWrap>
      <DistrictWrap>
        {
          selectOption.length !== 0 && selectOption[0].child.map((e,idx) => (
            districtOption === e? (
              <CheckboxLabel key={e}>
              {e}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e} name='district' id={e} value={e} checked={true}/>
            </CheckboxLabel>
            ):(
              <CheckboxLabel key={e}>
              {e}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e} name='district' id={e} value={e}/>
            </CheckboxLabel>
            )
          ))
        }
      </DistrictWrap>
    </LocationSelectorWrap>
  )
}

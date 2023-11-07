import React, { useState, ChangeEvent, useEffect  } from 'react'
import { LocationSelectorWrap,CityWrap, City, DistrictWrap, CheckboxInput, CheckboxLabel } from './LocationSelector.style'
import { regionsCoordData } from '../../../../constants/regionsCoord';
import type { locationCoordData,selectLocationCoordOptionData } from '../../../../types/componentsData';
import type { locationCoordSelectorProps } from '../../../../types/componentsProps';
import { findCoordLocation } from '../../../../utils/findLocation';

export default function LocationSelector({selectedLocation, onChangeLocation}: locationCoordSelectorProps) {
  const [selectOption, setSelectOption] = useState<locationCoordData[]>([]);
  const [districtOption, setDistrictOption] = useState<string>("")

  useEffect(()=>{
    let data = selectedLocation.split(" ")
    if(data.length === 1){
      if(data[0] !== ''){
        setSelectOption(findCoordLocation(data[0]))
        setDistrictOption(data[0]+" 전체")
      }else{
        setSelectOption([])
        setDistrictOption("")
      }
    }else{
      setSelectOption(findCoordLocation(data[0]))
      setDistrictOption(data[1])
    }
  }, [selectedLocation])


  const onChangeSelectCity = (e: ChangeEvent<HTMLInputElement>) => {
    const data = findCoordLocation(e.target.value)
    setSelectOption(data)
  }

  const onChangeDistrict = ({location, idx}: selectLocationCoordOptionData) => {
    setDistrictOption(location.child[idx].title);
    let str = '';
    if(idx === 0){
      str = location.city;
    }else{
      str = location.city + ' '+ location.child[idx]
    }
    onChangeLocation(str, location.child[idx].lat, location.child[idx].lng)
  }

  return (
    <LocationSelectorWrap>
      <CityWrap>
        <City>
          {
            regionsCoordData.map(e => (
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
        </City>
      </CityWrap>
      <DistrictWrap>
        {
          selectOption.length !== 0 && selectOption[0].child.map((e,idx) => (
            districtOption === e.title? (
              <CheckboxLabel key={e.title}>
              {e.title}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e.title} name='district' id={e.title} value={e.title} checked={true}/>
            </CheckboxLabel>
            ):(
              <CheckboxLabel key={e.title}>
              {e.title}
              <CheckboxInput onChange={()=>onChangeDistrict({location: selectOption[0], idx: idx})} key={e.title} name='district' id={e.title} value={e.title}/>
            </CheckboxLabel>
            )
          ))
        }
      </DistrictWrap>
    </LocationSelectorWrap>
  )
}

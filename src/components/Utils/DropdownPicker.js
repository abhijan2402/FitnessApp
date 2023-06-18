import React,{useState} from 'react';
import { View,StyleSheet } from 'react-native';
import { Dropdown  } from 'react-native-element-dropdown';
import UserSvg from '../../../assets/icons/User.svg';
import { FONTS } from '../../constants/Fonts';
import { SIZES } from '../../constants/Size';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
function DropdownPicker({data=[],placeholder="Select Item",value,setValue}) {
    return (
        <View style={styles.container}>
        <Dropdown
          data={data}
          maxHeight={300} 
          selectedTextStyle={styles.placeholderStyle}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          iconStyle={styles.iconStyle}
          onChange={item => setValue(item.value)}
          renderLeftIcon={() => (
            <View style={{marginLeft:20}}>
            <UserSvg width={20} height={20} />
            </View>
          )}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  container:{
        height:SIZES.INPUT_HEIGHT,
        justifyContent:'center',
        overflow:'hidden',
        borderRadius:15,
        backgroundColor:'#F7F8F8',
        marginBottom:15
  },
  placeholderStyle:{
    marginLeft:15,
    fontSize:SIZES.INPUT_FONT_SIZE,
    fontFamily:FONTS.FONT_POPPINS_MEDIUM
  },
  iconStyle:{
    marginRight:10
  },
  dropdown:{
    fontFamily:FONTS.FONT_POPPINS_MEDIUM
  },
  
})
export default DropdownPicker;
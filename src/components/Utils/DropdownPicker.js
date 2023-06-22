import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Dropdown  } from 'react-native-element-dropdown';

import { FONTS } from '../../constants/Fonts';
import { SIZES } from '../../constants/Size';


function DropdownPicker({data=[],placeholder="Select Item",value,setValue,
    containerStyle,
    placeholderStyle,
    selectedTextStyle,
    iconStyle,
    icon}) {
    return (
        <View style={[styles.container,containerStyle]}>
        <Dropdown
          data={data}
          maxHeight={300} 
          selectedTextStyle={{...styles.placeholderStyle,...selectedTextStyle}}
          placeholderStyle={{...styles.placeholderStyle,...placeholderStyle}}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          iconStyle={{...styles.iconStyle,...iconStyle}}
          onChange={item => setValue(item.value)}
          renderLeftIcon={() => (
            <View style={{marginLeft:icon?20:0}}>
            {icon}
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
import React,{useState} from 'react';
import { TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


function TimePicker({setTime,label}) {
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
      const handleConfirm = (time) => {
        setTime({hr:time.getHours(),min:time.getMinutes()})
        hideTimePicker();
      };
    return (
        <View style={{marginBottom:15}}>
            <TouchableOpacity onPress={showTimePicker}>
                {label}
            </TouchableOpacity>
           
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideTimePicker}
            /> 
        </View>
    );
}

export default TimePicker;
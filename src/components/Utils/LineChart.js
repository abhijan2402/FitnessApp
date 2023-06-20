import { LineChart } from "react-native-gifted-charts"
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/Fonts";


function AnimatedLineChart(){
    const data = [
    {value: 10,label:'Sun'}, 
    {value: 50,label:'Mon'}, 
    {value: 10,label:'Tue'}, 
    {value: 20,label:'Wed'},
    {value: 10,label:'Thr'},
    {value: 50,label:'Fri'},
    {value: 50,label:'Sat'},
    ];
    return <LineChart 
    
    curved 
    data={data}
    scrollToEnd
    isAnimated
    xAxisLabelTextStyle={{fontFamily:FONTS.FONT_POPPINS_MEDIUM}}
    yAxisTextStyle={{fontFamily:FONTS.FONT_POPPINS_MEDIUM}}
    xAxisThickness={0}
    yAxisThickness={0}
    thickness1={3}
    color1={COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1}
    />
    
        
};

export default AnimatedLineChart;
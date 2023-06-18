import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextH4 from './src/components/Text/TextH4';
import SmallText from './src/components/Text/SmallText';
import PrimaryButton from './src/components/Button/PrimaryButton';
import SecondaryLabel from './src/components/Label/SecondaryLabel';
import Input from './src/components/Form/Input';
import Heading from './src/components/Text/Heading';

function App() {
    return (
      <View style={styles.container}>
        <TextH4>Let’s complete your profile</TextH4>
        <SmallText>It will help us to know more about you!</SmallText>
        <PrimaryButton title={'Register'} onPress={()=>console.log('Hello')}/>
        <SecondaryLabel title={'KG'} containerStyle={{width:60,height:60,borderRadius:15}}/>
        <Input/>
        <Heading heading={'What is your goal ?'} subheading={'It will help us to choose a best program for you'}/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
});

export default App;

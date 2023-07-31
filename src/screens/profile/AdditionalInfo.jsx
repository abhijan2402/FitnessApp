import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Input from '../../components/Form/Input'
import Email from '../../../assets/icons/email.svg';
import FormLabel from '../../components/profile/FormLabel';
import { ScrollView } from 'react-native';
import TextMedium from '../../components/Text/TextMedium';
import PrimaryButton from '../../components/Button/PrimaryButton';
const { height, width } = Dimensions.get("window")
const AdditionalInfo = () => {
    const [Name, setName] = useState(null)
    const [Height, setHeight] = useState(null)
    const [Weight, setWeight] = useState(null)
    const [Age, setAge] = useState(null)
    const [Waist, setWaist] = useState(null)
    const [LifeStyle, setLifeStyle] = useState(null)
    const [DietaryHabits, setDietaryHabits] = useState(null)
    const [Dislikes, setDislikes] = useState(null)
    const [FoodAllergy, setFoodAllergy] = useState(null)
    const [PhysicalActivity, setPhysicalActivity] = useState(null)
    const [MedicalActivity, setMedicalActivity] = useState(null)
    const [AnyHerbs, setAnyHerbs] = useState(null)
    const [SkipMeal, setSkipMeal] = useState(null)
    const [FastFood, setFastFood] = useState(null)
    const [OfficeTiming, setOfficeTiming] = useState(null)
    const [Occupation, setOccupation] = useState(null)
    const [EmailId, setEmailId] = useState(null)
    const [Location, setLocation] = useState(null)
    const [HealthGoals, setHealthGoals] = useState(null)
    return (
        <>
            <View style={styles.AddiitonalInfoView}>
                <Header title="Additional Info" />
                <ScrollView style={{ marginBottom: "30%" }}>
                    <View style={{ alignItems: "center", marginVertical: 10 }}>
                        <TextMedium>Please Fill all the information for better health</TextMedium>
                    </View>
                    <View style={{ marginHorizontal: 20, padding: 7 }}>
                        <View style={styles.InputView}>
                            <Input placeholder={"Name"} onChangeText={(value) => setName(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Email id"} onChangeText={(value) => setEmailId(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Height (in ft)"} onChangeText={(value) => setHeight(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} keyboardType='numeric' />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Weight (in kg)"} onChangeText={(value) => setWeight(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} keyboardType='numeric' />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Age"} onChangeText={(value) => setAge(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} keyboardType='numeric' />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Waist (in cm)"} onChangeText={(value) => setWaist(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} keyboardType='numeric' />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"LifeStyle"} onChangeText={(value) => setLifeStyle(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Dietary habits"} onChangeText={(value) => setDietaryHabits(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Dislikes"} onChangeText={(value) => setDislikes(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Any Food Allergy"} onChangeText={(value) => setFoodAllergy(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Physical Activity"} onChangeText={(value) => setPhysicalActivity(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Any Medical History"} onChangeText={(value) => setMedicalActivity(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <FormLabel labelName={"Do you take any supplements or herbs ?"} />
                            <Input placeholder={"Yes or No"} onChangeText={(value) => setAnyHerbs(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <FormLabel labelName={"Do you skip your meal ?"} />
                            <Input placeholder={"Yes or No"} onChangeText={(value) => setSkipMeal(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <FormLabel labelName={"Fast Food or any outer food frequency ?"} />
                            <Input placeholder={"Yes or No"} onChangeText={(value) => setFastFood(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Office Timing (eg 9AM to 6PM)"} onChangeText={(value) => setOfficeTiming(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={"Occupation"} onChangeText={(value) => setOccupation(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>

                        <View style={styles.InputView}>
                            <Input placeholder={"Location"} onChangeText={(value) => setLocation(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <Input placeholder={" Health Goals"} onChangeText={(value) => setHealthGoals(value)} customStyle={{ borderColor: '#92A3FD', borderWidth: 1 }} />
                        </View>
                        <View style={styles.InputView}>
                            <PrimaryButton title={"Submit Infomation"} onPress={() => { console.log("hi") }} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AdditionalInfo

const styles = StyleSheet.create({
    AddiitonalInfoView: {
        backgroundColor: "white",
        height: height

    },
    InputView: {
        marginVertical: 10
    }
})
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';
import DatePicker from 'react-native-datepicker'

const radioButtonData = [
    { id:1, label:"Male", value:"Male"},
    { id:2, label:"Female", value:"Female"}
]
const FormScreen = () =>{
    const [radioButton, setRadioButton] = useState(radioButtonData)
    const [englishCheckBox , setEnglish] = useState(false)
    const [gujaratiCheckBox , setGujarati] = useState(false)
    const [hindiCheckBox , setHindi] = useState(false)
    const [birthDate, setBirthDate] = useState()

    function onPressRadioButton(radioButtonArray){
        setRadioButton(radioButtonArray);
        
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter name' />

            <TextInput style={styles.input} placeholder='Enter age' />

            <RadioGroup
                containerStyle={styles.radioButton}
                
                radioButtons={radioButton}
                onPress={onPressRadioButton}
                layout='row'
            />

            <View style={styles.checkBoxView}>
                <View style={styles.checkBoxItemView}>
                    <Checkbox 
                        style={styles.checkBox}
                        value={englishCheckBox}
                        onValueChange={() => setEnglish(!englishCheckBox)}
                        color={ englishCheckBox ? "grey" : undefined}
                    />
                    <Text style={styles.checkBoxLabel}>English</Text>
                </View>
                
                <View style={styles.checkBoxItemView}>
                    <Checkbox 
                    style={styles.checkBox}
                        value={gujaratiCheckBox}
                        onValueChange={() => setGujarati(!gujaratiCheckBox)}
                        color={ gujaratiCheckBox ? "grey" : undefined}
                    />
                    <Text style={styles.checkBoxLabel}>Gujarati</Text>
                </View>

                <View style={styles.checkBoxItemView}>
                    <Checkbox 
                    style={styles.checkBox}
                        value={hindiCheckBox}
                        onValueChange={() => setHindi(!hindiCheckBox)}
                        color={ hindiCheckBox ? "grey" : undefined}
                    />
                    <Text  style={styles.checkBoxLabel}>Hindi</Text>
                </View>
            </View>
            <View style={styles.datePicker}>
                <DatePicker 
                    style={{width:'100%'}}
                    date={birthDate}
                    mode="date"
                    placeholder='Select birth date'
                    format='DD-MM-YYYY'
                    minDate={'01-01-1990'}
                    maxDate={'31-12-2050'}
                    confirmBtnText="Select"
                    cancelBtnText='Cancel'
                    customStyles={{
                        dateIcon: {
                            display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(birthDate) => setBirthDate(birthDate)}
                />
            </View>

            <View style={styles.button}>
                <Button  title='Submit' onPress={ () => alert("Done")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'stretch',
      },
    input:{
        margin:15,
        marginBottom:10,
        padding:10,
        borderWidth:0.8,
        fontSize:18
    },
    radioButton:{
        margin:15,
        justifyContent:'flex-start',
        borderWidth:0.8,
        padding:10, 
    } ,
    checkBoxView:{
        borderWidth:0.8,
        margin:15,
        padding:5,
    },
    checkBoxItemView:{
        flexDirection:'row',
        padding:5
    },
    checkBoxLabel:{
        paddingLeft:20
    },
    datePicker:{
        borderWidth:0.8,
        margin:15,
        padding:10,
        alignItems:'stretch'
    },
    button:{
        margin:15,
        padding:10
    }
});

export default FormScreen;
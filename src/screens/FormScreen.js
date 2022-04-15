import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Modal, ActivityIndicator } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';
import DatePicker from 'react-native-datepicker'
import DropdownComponent from './components/DropdownComponent';



const radioButtonData = [
    { id:1, label:"Male", value:"Male"},
    { id:2, label:"Female", value:"Female"}
]

const FormScreen = () =>{
     
    const [modalVisibility, setModalVisibility] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [radioButton, setRadioButton] = useState(radioButton)
    const [englishCheckBox , setEnglish] = useState(false)
    const [gujaratiCheckBox , setGujarati] = useState(false)
    const [selectRadio, setSelectRadio] = useState()
    const [hindiCheckBox , setHindi] = useState(false)
    const [birthDate, setBirthDate] = useState("")
    const [country, setCountry] = useState("");

    
    function modal(){
        
        setTimeout(() => {
            // After 5 seconds set the show value to false
            setModalVisibility(false)
            alert("Success");
        }, 5000)
    
    }
    function onPressRadioButton(radioBtnArray){
        setRadioButton(radioBtnArray);
    }
    useEffect(()=>{
         setSelectRadio(!!radioButton ? radioButton.find(a=> a.selected).label:null)
    },[radioButton])

    function onButtonCLick(){
        
        let isValid = true;
        !!selectRadio ? null : isValid=false
        if(!name.trim()){
            alert("Enter name")
            isValid = false;
            return;
        }
        if(!age.trim()){
            
            alert("Enter age")
            isValid = false;
            return;
        }
        if(!birthDate.trim()){
            alert("Select birthdate")
            isValid = false;
            return;
        }
       
        if(!(englishCheckBox || hindiCheckBox ||gujaratiCheckBox)){
            alert("Select language")
            isValid = false;
            return;
        }
        if(!country.trim()){
            alert("Select country")
            isValid = false;
            return;
        }
        if(isValid){
            
            setModalVisibility(true)
            modal()
        }
     }
    return(<>
        <Modal style={{flex:1, height:'100%', width:'100%', justifyContent:'center', alignItems:"center"}} animationType = {"fade"} transparent = {true}
               visible = {modalVisibility}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {{height:'100%', justifyContent:'center'}}>
               <ActivityIndicator size="large" color="#0000ff"  />
                  
               </View>
            </Modal>
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>      
            <TextInput 
                style={styles.input} 
                placeholder='Enter name' 
                keyboardType='name-phone-pad' 
                onChangeText={(newText) => setName(newText)}
                />

            <TextInput 
                style={styles.input} 
                placeholder='Enter age' 
                keyboardType='number-pad' 
                onChangeText={(newAge) => setAge(newAge)}
                error={""}/>
            
            <RadioGroup
                containerStyle={styles.radioButton}
                radioButtons={radioButtonData}
                onPress={onPressRadioButton}
                layout='row'
            />
          
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

            <DropdownComponent country={country} setCountry={setCountry}/>
            

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

            
            <View style={styles.button}>
                <Button  title='Submit'  onPress={()=>onButtonCLick()}/>
            </View>
            
        </View>
        </ScrollView>
   </> )
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
    },
    spinner:{
        // backgroundColor:'red',
        // width:'100%',
        // height:'100%',
        // flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FormScreen;
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const data = [
    { label: 'America', value: 'America' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Egypt', value: 'Egypt' },
    { label: 'Canada', value: 'Canada' },
    { label: 'India', value: 'India' },
    { label: 'Ireland', value: 'Ireland' },
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Spain', value: 'Spain' },
  ];

const DropdownComponent = (props) =>{
    // const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    return(
        <View>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select country' : '...'}
                searchPlaceholder="Search..."
                value={props.country}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    props.setCountry(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.8,
      margin:15,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default DropdownComponent;
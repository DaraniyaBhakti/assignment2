import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const userData = [
    { id:1, name : 'John', gender : 'male', age : 20 },
    { id:2, name : 'Jenny', gender : 'female', age : 25 },
    { id:4, name : 'Bob', gender : 'male', age : 22 },
    { id:5, name : 'Henry', gender : 'male', age : 21 },
    { id:6, name : 'Ruby', gender : 'female', age : 32 },
    { id:7, name : 'Sofia', gender : 'female', age : 27 },
    { id:8, name : 'David', gender : 'male', age : 20 },
    { id:9, name : 'Alice', gender : 'female', age : 19 },
    { id:10, name : 'James', gender : 'male', age : 25  }
  ];
const _listener = (navigation) => {
    //  alert("clicked");
    console.log("clicked")
    navigation.navigate("FormScreen")
}

const ListScreen = (props) => {
    return(
    <View style={styles.container}>
     <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={userData => userData.name}
        data={userData} 
        renderItem={ ( {item} ) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Form")}
              >
              <View style={styles.item}>                
                        <Text style={{}}>Name : {item.name}</Text>
                        <Text style={{}}>Gender : {item.gender}</Text>
                        <Text style={{}}>Age : {item.age}</Text>
              </View>
            </TouchableOpacity>
          )
          } }
      />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    item:{
      borderWidth:2,
      borderColor:'grey',
      margin:5,
      backgroundColor:'#d5d5d5',
      padding:10,
      borderRadius:2
    }
  });

  export default ListScreen;
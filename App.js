import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Transaction from './screens/transaction';
import Search from './screens/search';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  
});

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon :()=>{
      const routeName=navigation.state.routeName;
      
      if(routeName === 'Transaction'){
        return(<Image source ={require("./assets/assets/transbook.png")} style={{
          width:40,height:40
        }}/>
        )
      }
      else if(routeName ==="Search"){
        return (<Image source ={require("./assets/assets/searchingbook.png")} style={{
          width:40,height:40
        }}/>)
      }
    }
  })
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
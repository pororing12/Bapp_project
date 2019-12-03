import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image
} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons'

import HomeScreen from './App/Screens/HomeScreen';
import FeedScreen from './App/Screens/FeedScreen';
import FundiGoScreen from './App/Screens/FundiGoScreen';
import StoreScreen from './App/Screens/StoreScreen';
import ProfileScreen from './App/Screens/ProfileScreen';
import SearchList from './App/Screens/SearchList';
import SeoulScreen from './App/Screens/SeoulScreen';
import LoginScreen from './App/Screens/LoginScreen';
import FundiGo1 from './App/Screens/FundiGo1';
import FundiGo2 from './App/Screens/FundiGo2';
import SignScreen from './App/Screens/SignScreen';
import Samsung from './App/Screens/Samsung';
import GyeongjuScreen from './App/Screens/GyeongjuScreen'
import MalaysiaScreen from './App/Screens/MalaysiaScreen';
import LaosScreen from './App/Screens/LaosScreen';
import CambodiaScreen from './App/Screens/CambodiaScreen';
import SingaporeScreen from './App/Screens/SingaporeScreen';
import Store1Screen from './App/Screens/Store1';
import Store2Screen from './App/Screens/Store2';
import Store3Screen from './App/Screens/Store3';
import Store4Screen from './App/Screens/Store4';
import FeedWriteScreen from './App/Screens/FeedWriteScreen';
import FeedTest from './App/Screens/FeedTest';
import FeedTestScreen from './App/Screens/FeedTestScreen'
import fundiGoConsumer from './App/Screens/FundiGoconsumer'
import FundiGo1Detail from './App/Screens/FundiGo1Detail';




const HomeStack = createStackNavigator({
  HomeTab: {
    screen: HomeScreen,
  },
  SearchList: {
    screen: SearchList
  },
  Seoul: {
    screen: SeoulScreen
  },
  Gyeongju: {
    screen: GyeongjuScreen
  },
  Malaysia: {
    screen: MalaysiaScreen
  },
  Laos: {
    screen: LaosScreen
  },
  Cambodia: {
    screen: CambodiaScreen
  },
  Singapore: {
    screen: SingaporeScreen
  }
}, {
  headerMode: "none",
})

const FeedStack = createStackNavigator({
  FeedTab: {
    screen: FeedTestScreen
  },
  FeedWrite: {
    screen: FeedWriteScreen
  }
}, {
  headerMode: "none",
})

const FundiGoStack = createStackNavigator({
  FundiGoHome: {
    screen: FundiGoScreen
  },
  FundiGo1: {
    screen: FundiGo1
  },
  FundiGo2: {
    screen: FundiGo2
  },
  FundiGoConsumer: {
    screen: fundiGoConsumer
  },
  FundiGoDetail: {
    screen: FundiGo1Detail
  }
}, {
  headerMode: "none"
})

const StoreStack = createStackNavigator({
  Store: {
    screen: StoreScreen
  },
  Store1: {
    screen: Store1Screen
  },

  Store2: {
    screen: Store2Screen
  },
  Store3: {
    screen: Store3Screen
  },
  Store4: {
    screen: Store4Screen
  }
}, {
  headerMode: "none"
})

const ProfileStack = createStackNavigator({
  ProfileTab: {
    screen: ProfileScreen
  }
}, {
  headerMode: "none",
})

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Sign: {
    screen: SignScreen
  }
})




const AppTabNavigator = createBottomTabNavigator({
  "Home": {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" color={tintColor} size={32} />
      )
    }
  },
  "Feed": {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Feed",
      tabBarIcon: ({ tintColor }) => (
        <Feather name="layout" color={tintColor} size={32} />
      )
    }
  },
  "FundiGo": {
    screen: FundiGoStack,
    navigationOptions: {
      tabBarLabel: "FundiGo",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/Slice.png")}
          style={{
            resizeMode: "stretch",
            height: 70,
            width: 70
          }}
        />
      )
    }
  },
  "Store": {
    screen: StoreStack,
    navigationOptions: {
      tabBarLabel: "Store",
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="store" color={tintColor} size={32} />
      )
    }
  },
  "Profile": {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Feather name="user" color={tintColor} size={32} />
      )
    }
  },
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: "white",
          elevation: 0,
        }
      })
    },
    iconStyle: { height: 70 },
    activeTintColor: "#56D1F3",
    inactiveTintColor: '#d1cece',
    upperCaseLabel: true,
    showLabel: false,
    showIcon: true,

  }
});


const RootSwitch = createStackNavigator({
  "Login": {
    screen: LoginStack
  },
  Main: {
    screen: AppTabNavigator
  }
}, {
  initialRouteName: "Login", headerMode: "none"
})

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class App extends Component {
  render() {
    return <AppTabContainet />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

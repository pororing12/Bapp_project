import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { ListItem } from 'react-native-elements'
import axios from 'axios'
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'




const { width, height } = Dimensions.get("window");

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width - 25;



export default class FundiGo1 extends Component {
  constructor() {
    super()
    this.state = {
      lists: [],
      gpss: []
    }
  }
  async componentDidMount() {

    let lists = await axios.get('http://35.223.204.78:8880/getEveryList')
      .then(response => (response.data));
    this.setState({ lists });
    if (this.state.lists == "0") {
      Alert.alert("참여자 없음")
    }
    console.log(lists)
    let gpss = await axios.get('http://35.223.204.78:8880/getGpsList')
      .then(response => (response.data));

    this.setState({ gpss });
  }
  _gps = () => {
    const { gpss } = this.state
    return gpss.map(gps => {
      return <View key={gps.id}>
      </View>
    })
  }

  render() {
    const { lists, gpss } = this.state;
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View>
          <TouchableOpacity
            style={{
              marginLeft: 330

            }}
            onPress={() => this.props.navigation.navigate("FundiGoConsumer")}>
            <AntDesign
              name="form"
              size={28}
              color="#56D1F3"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text style={styles.title}>fundiGo 참여자들</Text>
        </View>

        <ScrollView>
          {lists ? lists.map(list => (

            <View key={list.id}>
              <TouchableOpacity
                style={{

                  borderWidth: 2,
                  marginLeft: 20,
                  marginToP: 30,
                  borderLeftColor: "#56D1F3",
                  borderRightColor: "#56D1F3",
                  borderTopColor: "#56D1F3",
                  borderBottomColor: "white",

                  width: SCREEN_WIDTH / 1.1,
                  height: SCREEN_HEIGHT / 8,
                }}
                onPressIn={() => this.props.navigation.navigate("FundiGoDetail")}>
                <Text style={{ marginLeft: 20, marginTop: 20 }}>Pororing</Text>
                <Text style={styles.font}>{list.GPS}</Text>
                <Text style={{
                  marginLeft: 20,
                  marginTop: 20,
                }}>{list.LOCATION}</Text>
              </TouchableOpacity>
            </View>
          )
          ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",

                }}></View>
            )}
          {gpss ? gpss.map(gps => (
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderTopColor: "white",
                borderLeftColor: "#56D1F3",
                borderRightColor: "#56D1F3",
                borderBottomColor: "#56D1F3",
                width: SCREEN_WIDTH / 1.1,
                height: SCREEN_HEIGHT / 11,
                marginLeft: 20,
                marginTop: -20
              }}

              onPressIn={() => this.props.navigation.navigate("FundiGoDetail")}>
              <View
                key={gps.id}>
                <Text style={styles.fonts}>{gps.latitude}</Text>
                <Text style={{
                  marginLeft: 20,
                  marginTop: 10
                }}>{gps.longitude}</Text>
              </View>
            </TouchableOpacity>
          )) : (
              <View></View>
            )}
        </ScrollView>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    borderWidth: 3,
    borderColor: "#56D1F3",
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "700",


  },

  font: {
    marginLeft: 20,
  },
  fonts: {
    marginTop: 30,
    marginLeft: 20
  }
});


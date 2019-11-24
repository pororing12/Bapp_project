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
} from "react-native";

import { ListItem } from 'react-native-elements'

import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'




const { width, height } = Dimensions.get("window");

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width - 25;

const list = [
  {
    id: 1,
    name: "pororing",
    location: "안국역 2번출구",
    gps: "37.577528" + "," + " " + "126.986071",
    pr_Image: "../../assets/pets-4415649_1920.jpg"
  },
  {
    id: 2,
    name: "cake",
    location: "한국 미술 박물관",
    gps: "37.580992" + "," + " " + "126.988913",
    pr_Image: "../../assets/volvo-xc40.jpg"
  }
]

function Item({ pr_Image, name, location, gps }) {

  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text
            style={{
              fontWeight: "700",
              marginBottom: 10
            }}>{name}</Text>
          <Text
            style={{
              marginBottom: 10
            }}>{location}</Text>
          <Text>{gps}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default class FundiGo1 extends Component {
  render() {

    return (

      <View
        style={{
          flex: 1,
          marginTop: 50
        }}>
        <SafeAreaView />
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            marginBottom: 50
          }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20
            }}
          >FundiGo 참여자들</Text>
        </View>

        <FlatList
          data={list}
          renderItem={(
            { item }) => <Item name={item.name}

              location={item.location}
              gps={item.gps} />}
          keyExtractor={item => item.id}

        />


      </View>
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
    fontSize: 32,
  },
});


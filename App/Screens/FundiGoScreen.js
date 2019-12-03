import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions, Alert, ImageBackground } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import axios from 'axios';
import * as Permissions from 'expo-permissions'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        latitude: null,
        longitude: null,
        date: '',
    }

    componentWillMount() {
        var that = this;
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
            //Setting the value of the date time
            date:
                year + '/' + month + '/' + date + ' ' + hours + ':' + min + ':' + sec,
        });

        console.log(date)

    }



    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => console.log('State:', this.state)),
            (error) => console.log('Error', error)
        )

    }

    async componentDidUpdate() {
        axios.post('http://35.223.204.78:8880/getGps', {

            "latitude": `${this.state.latitude}`,
            "longitude": `${this.state.longitude}`,
            "time": `${this.state.date}`
        })
            .then(res => {
                prettyPrint(res.data)
            })
            .then(req => {
                console.log(req)
            })
    }




    render() {
        const { latitude, longitude } = this.state;
        if (latitude) {
            return (
                <View
                    style={{
                        height: "200%"
                    }}>
                    <StatusBar barStyle="dark-content"></StatusBar>

                    <MapView

                        style={{ flex: 0.5 }}
                        showsUserLocation
                        userLocationAnnotationTitle="대구수목원"



                        initialRegion={{
                            latitude,
                            longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,

                        }}>
                        <View
                            style={{
                                alignItems: "center"
                            }}>

                        </View>
                        {/* <MapView.Marker
                            coordinate={{ latitude, longitude }}>
                            <ImageBackground source={require("../../assets/markerimage.png")}
                                style={{
                                    resizeMode: "cover",
                                    height: SCREEN_HEIGHT / 9,
                                    width: SCREEN_WIDTH / 5,
                                    marginBottom: 75,
                                    marginLeft: 20
                                }}>
                                <Image source={require("../../assets/south-korea-3648252_1280.jpg")}
                                    style={{
                                        resizeMode: "cover",
                                        height: SCREEN_HEIGHT / 13.8,
                                        width: SCREEN_WIDTH / 5.3,
                                        borderRadius: 10,
                                        marginTop: 2,
                                        marginLeft: 1
                                    }} />
                            </ImageBackground>
                        </MapView.Marker> */}


                    </MapView>

                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: "700",
                            colo석: "#47525E",
                            marginBottom: 20,
                            marginLeft: 20,
                            marginTop: 20
                        }}
                    >
                        지금 뜨는 FundiGo
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("FundiGo1")}
                        // onPress={() => Alert.alert("위치 인증이 완료되었습니다!")}
                        >
                            <Image
                                source={
                                    (require("../../assets/Location1.jpeg"))
                                }
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT / 4,
                                    width: SCREEN_WIDTH / 2,
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}

                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("FundiGo2")}>
                            <Image
                                source={
                                    (require("../../assets/bukchon-3905234_1920.jpg"))
                                }
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT / 4,
                                    width: SCREEN_WIDTH / 2,
                                    borderRadius: 10,
                                    marginLeft: 20
                                }}

                            />
                        </TouchableOpacity>



                        <Image
                            source={
                                (require("../../assets/scenery-1214950_1920.jpg"))
                            }
                            style={{
                                resizeMode: "stretch",
                                height: SCREEN_HEIGHT / 4,
                                width: SCREEN_WIDTH / 2,
                                borderRadius: 10,
                                marginLeft: 20
                            }}
                        />
                    </ScrollView>

                </View>



            )
        }




        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content"></StatusBar>

                <View style={{ alignItems: "center" }} >
                    <TouchableOpacity

                        style={{
                            backgroundColor: "white",
                            height: 48,
                            width: "90%",
                            borderRadius: 20,
                            marginTop: 50,
                            justifyContent: "center",
                            placehoder: "미션 장소를 검색하세요."

                        }}>
                    </TouchableOpacity>
                </View>


                <View
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        marginTop: 30,

                        marginLeft: 20
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: "700",
                            color: "#47525E",
                            marginBottom: 20
                        }}
                    >
                        지금 뜨는 FundiGo
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("FundiGo1")}>
                            <Image
                                source={
                                    (require("../../assets/Location1.jpeg"))
                                }
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT - 600,
                                    width: SCREEN_WIDTH - 200,
                                    borderRadius: 10,
                                    marginLeft: 15
                                }}

                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("FundiGo2")}>
                            <Image
                                source={
                                    (require("../../assets/bukchon-3905234_1920.jpg"))
                                }
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT - 600,
                                    width: SCREEN_WIDTH - 200,
                                    borderRadius: 10,
                                    marginLeft: 15
                                }}

                            />
                        </TouchableOpacity>


                        <Image
                            source={
                                (require("../../assets/korea-1095361_1920.jpg"))
                            }
                            style={{
                                resizeMode: "stretch",
                                height: SCREEN_HEIGHT - 600,
                                width: SCREEN_WIDTH - 200,
                                borderRadius: 10,
                                marginLeft: 15
                            }}
                        />
                        <Image
                            source={
                                (require("../../assets/scenery-1214950_1920.jpg"))
                            }
                            style={{
                                resizeMode: "stretch",
                                height: SCREEN_HEIGHT - 600,
                                width: SCREEN_WIDTH - 200,
                                borderRadius: 10,
                                marginLeft: 15
                            }}
                        />
                    </ScrollView>
                </View>
            </View>

        );
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
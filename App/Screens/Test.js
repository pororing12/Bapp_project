import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions, Alert, TextInput, ImageBackground } from 'react-native'
import MapView from 'react-native-maps'
import axios from 'axios';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height


export default class FeedWriteScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        latitude: null,
        longitude: null,
        date: '',
        datemin: '',
        title: "",
        image: null,
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
            datemin:
                year + '.' + month + '.' + date,
        });

        console.log(date)

    }

    componentDidMount() {
        this.getPermissionAsync();
        console.log('HI')
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };




    render() {
        const { latitude, longitude, title } = this.state;
        let { image } = this.state;
        if (latitude) {
            return (
                <View
                    style={{
                        height: "150%"
                    }}>
                    <ScrollView>
                        <ImageBackground
                            source={
                                (require("../../assets/bukchon-3905234_1920.jpg"))
                            }
                            style={{
                                resizeMode: "cover",
                                height: SCREEN_HEIGHT / 2,
                                widht: SCREEN_WIDTH,
                            }}
                        >
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    marginTop: 30,
                                    marginRight: 10,
                                }}>
                                <TouchableOpacity
                                    style={{
                                        height: SCREEN_HEIGHT / 26,
                                        width: SCREEN_WIDTH / 4.5,
                                        backgroundColor: "#5D5D5D",
                                        borderRadius: 5,
                                        flexDirection: "row",

                                        alignItems: "center"
                                    }}
                                    onPress={this._pickImage}>

                                    <Image
                                        source={
                                            require("../../assets/625af9fe29ee40dea5b4b71ba1a25f5a.png")
                                        }
                                        style={{
                                            resizeMode: "contain",
                                            width: 21,
                                            height: 21,
                                            marginLeft: 5,
                                            alignItems: 'center'
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: "white",
                                            alignItems: 'center'
                                        }}>커버편집</Text>

                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    marginLeft: 20,
                                    marginTop: 200
                                }}>
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "800",
                                        marginBottom: 5
                                    }}>{this.state.datemin}</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: "center"
                                }}>
                                <TextInput
                                    style={{
                                        placehorder: "제목을 입력하세요...",
                                        borderRadius: 5,
                                        borderWidth: 2,
                                        borderColor: "white",
                                        width: SCREEN_WIDTH / 1.1,
                                        height: SCREEN_HEIGHT / 14,
                                        color: "white"

                                    }}></TextInput>
                            </View>

                        </ImageBackground>
                    </ScrollView>

                </View>





            )
        }
        return (

            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />

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

                </View>
            </View>


        )
    }
}

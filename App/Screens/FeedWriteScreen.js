import * as React from 'react';
import { Platform, View, Button, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions, Alert, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import axios from "axios";

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default class FeedWriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null,
            date: "",
            fulldate: "",
            title: "",
            image: null,
            content: "",
            auth: "",

        };
    }

    componentWillMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        this.setState({
            date:
                year + '.' + month + '.' + date,
            fulldate:
                year + '/' + month + '/' + date + ' ' + hours + ':' + min + ':' + sec,

        })

        console.log(date);
    }

    _titleUpload = (text) => {
        this.setState({
            title: text,
        });
    }

    _imageeUpload = (text) => {
        this.setState({
            image: text,
        });
    }

    _contentUpload = (text) => {
        this.setState({
            content: text,
        });
    }

    // _FinalUpload = () => {

    //     axios.post('http://35.223.204.78:8880/saveFeed', {
    //         "TITLE": `${this.state.title}`,
    //         "IMAGE": `${this.state.image}`,
    //         "TEXT": `${this.state.content}`,
    //     })
    //         .then(res => {
    //             prettyPrint(res.data)
    //         })

    // }
    _auth = async () => {
        let result = await axios.post('http://35.223.204.78:8880/auth', {

            "latitude": `${this.state.latitude}`,
            "longitude": `${this.state.longitude}`,
            "time": `${this.state.fulldate}`
        })
            .then(res => {
                console.log(res.data)
                return res.data;
            })


        const formData = new FormData();

        const image = this.state.image;
        const uri = this.state.image;

        const imageSplitArray = image.split('/');


        const filepath = imageSplitArray[imageSplitArray.length - 1];
        const [filename, type] = filepath.split('.');
        console.log(filename)

        formData.append("file", {
            name: filename,
            type: type,
            uri: uri,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;'
            },

            // uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        });

        this.setState({ auth: result });
        if (this.state.auth == "auth success") {

            await axios.post('http://35.223.204.78:8880/saveFeed', {
                "TITLE": `${this.state.title}`,
                "TEXT": `${this.state.content}`,
                "IMAGE": filename + '.' + type
            })
                .then(res => {
                    console.log(res.data)
                    return res.data;

                })
            Alert.alert("위치 인증이 확인되었습니다.")


        } else {
            Alert.alert("Fail")
        }

        await fetch('http://35.223.204.78:8880/uploadImage', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;'
            },


        })
            .then((response) => response)
            .then(response => {
                console.log('upload succes', response);
                alert('Upload success!');
                console.log(formData)

            })
            .catch(error => {
                console.log(error)
                console.log('upload error', error);
                alert('Upload failed!');
            });
        return this.props.navigation.navigate("FeedTab")


    }

    Feed = (title, image, content, ) => {
        console.log("title :" + title,
            "image :" + image,
            "text :" + content)
    };

    render() {
        let { image, title, content } = this.state;

        return (

            <View>

                <View
                    style={{
                        flex: 1
                    }}>

                    {image &&
                        <ImageBackground source={{ uri: image }} style={{
                            resizeMode: "cover",
                            height: SCREEN_HEIGHT / 2,
                            width: SCREEN_WIDTH,

                        }}
                            onchangeText={this._imageeUpload}>

                        </ImageBackground>}
                </View>

                <View
                    style={{
                        alignItems: "flex-end",
                        marginTop: 30,
                        marginRight: 10,
                        flex: 2,
                        zIndex: 120,
                    }}>
                    <TouchableOpacity
                        style={{
                            height: SCREEN_HEIGHT / 26,
                            width: SCREEN_WIDTH / 4.5,
                            backgroundColor: "#5D5D5D",
                            borderRadius: 5,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 30
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
                                alignItems: 'center',
                                marginLeft: 5
                            }}>커버편집</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 290
                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "800",
                            marginBottom: 5
                        }}>{this.state.date}
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: "center",

                    }}>
                    <TextInput
                        style={{
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: "white",
                            width: SCREEN_WIDTH / 1.1,
                            height: SCREEN_HEIGHT / 14,
                            color: "white",
                            marginBottom: 20,


                        }}
                        // placeholder="  제목을 입력하세요..."
                        placeholderTextColor="white"
                        onChangeText={this._titleUpload}>
                    </TextInput>
                </View>
                <View
                    style={{
                        flex: 1,
                        marginTop: 50
                    }}>
                    <TextInput
                        style={{
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: "white",
                            width: SCREEN_WIDTH / 1.1,
                            height: SCREEN_HEIGHT / 14,
                            marginLeft: 20


                        }}
                        // placeholder="  내용을 입력하세요..."
                        placeholderTextColor="#bbb"
                        onChangeText={this._contentUpload}>
                    </TextInput>

                </View>
                <View
                    style={{
                        marginTop: 50
                    }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            flxe: 1,
                            marginLeft: 20,
                            marginTop: 100,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#56D1F3",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 12,
                            borderRadius: 10,
                            marginBottom: 20,
                            alignItems: "center",
                            justifyContent: "center"


                        }}
                        onPress={this._auth.bind(this)}>

                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "700",
                                color: "white"

                            }}>
                            등록하기
                        </Text>
                    </TouchableOpacity>
                </View>




            </View >
        );
    }

    async componentDidMount() {
        this.getPermissionAsync();
        console.log('hi');

        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => console.log('State:', this.state)),
            (error) => console.log('Error', error)
        )
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
}
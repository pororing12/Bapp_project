import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    Alert,
    StatusBar,
    SafeAreaView,

} from "react-native"
import axios from "axios"
import { AntDesign, Foundation, Feather, Entypo } from "@expo/vector-icons"
import { Fonts } from "../../src/Fonts"

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default class FeedTestScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: [],

        }
        state = {
            heartPut: false
        }
    }
    /**
     * /event           POST
     * /event           GET
     * /event/<:id>     GET
     * /event/<:id>     PUT
     */


    async componentDidMount() {

        let feeds = await axios.get('http://35.223.204.78:8880/getFeed')
            .then(response => (response.data));
        this.setState({ feeds });
        if (this.state.feeds == "0") {
            Alert.alert("내용이 없음")
        }
        console.log(feeds)
    }

    async componentWillUpda() {
        this.setState({ feeds })
        console.log(feeds)
    }

    _heartPut = () => {
        this.setState({
            heartPut: true
        })
    }

    render() {
        const { feeds, heartPut } = this.state;

        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView />
                <View
                    style={{
                        marginTop: 30,
                        marginLeft: 20,
                        flexDirection: "row"
                    }}>
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 32,

                        }}>FEED</Text>
                    <TouchableOpacity
                        style={{
                            marginLeft: 265

                        }}
                        onPress={() => this.props.navigation.navigate("FeedWrite")}>
                        <AntDesign
                            name="form"
                            size={28}
                            color="#56D1F3"
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {feeds ? feeds.map(feed => (

                        <View key={feed.id}
                            style={{
                                marginTop: 70,
                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                            <TouchableOpacity
                                style={{
                                    flxe: 1,
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowOpacity: 0.8,
                                    elevation: 5,
                                    shadowRadius: 10,
                                    backgroundColor: "#FFFFFF",
                                    shadowOffset: {
                                        width: 1, height: 13
                                    },
                                    width: SCREEN_WIDTH - 40,
                                    height: SCREEN_HEIGHT / 1.7,
                                    borderRadius: 10,
                                    marginBottom: 20,
                                }}

                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginBottom: 10,
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: "#bbb",

                                    }}>
                                    <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                        style={{
                                            resizeMode: "cover",
                                            width: SCREEN_WIDTH / 16,
                                            height: SCREEN_HEIGHT / 30,
                                            borderRadius: 10,
                                            marginLeft: 20,
                                            marginTop: 20,
                                            marginBottom: 10,

                                        }}
                                    />

                                    <Text
                                        style={{
                                            marginLeft: 20,
                                            marginTop: 25,
                                            marginBottom: 20,
                                            fontWeight: "700"
                                        }}
                                    >
                                        pororing
                                    </Text>


                                </View>
                                <View
                                    style={{
                                        marginTop: -10

                                    }}
                                >
                                    <Image source={{ uri: `http://35.223.204.78:8880/${feed.PATH}` }}
                                        style={{
                                            resizeMode: "stretch",
                                            height: SCREEN_HEIGHT / 3,
                                            width: SCREEN_WIDTH / 1.11,
                                        }}
                                    />
                                    <View
                                        style={{
                                            justifyContent: "flex-end",
                                            flexDirection: "row",
                                            marginRight: 20,
                                            marginTop: 10,

                                        }}>
                                        {heartPut ?

                                            <Entypo name="heart" size={28} color={"#FFA7A7"} />


                                            : <View>
                                                <TouchableOpacity
                                                    onPressOut={() => this._heartPut() + Alert.alert("0.5lil 지급되었습니다.")}
                                                >
                                                    <Entypo name="heart-outlined" size={28} color={"#FFA7A7"} />
                                                </TouchableOpacity>
                                            </View>}
                                        <Feather name="message-square" size={28} color={"#56D1F3"}
                                            style={{
                                                marginLeft: 20
                                            }} />
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 20,
                                            marginBottom: 15,
                                            flexDirection: "row"
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "700",
                                                marginRight: 15


                                            }}
                                        >
                                            pororing
                                    </Text>
                                        <Text
                                            style={{
                                                fontWeight: "500"
                                            }}>
                                            {feed.TITLE}
                                        </Text>
                                    </View>


                                    <View
                                        style={{
                                            marginLeft: 20,
                                            flexDirection: "row"
                                        }}>

                                        <Text
                                            style={{
                                                fontWeight: "500",

                                                marginTop: 2
                                            }}>
                                            {feed.TEXT}
                                        </Text>
                                    </View>


                                </View>

                            </TouchableOpacity>

                        </View>


                    )) : (<View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}><Text>리스트가 없습니다.</Text></View>)}
                </ScrollView>
            </View>
        )
        return feeds.map(feed => {
            return (

                <View key={feed.id}
                    style={{
                        marginTop: 70,
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                        style={{
                            flxe: 1,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOpacity: 0.8,
                            elevation: 5,
                            shadowRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowOffset: {
                                width: 1, height: 13
                            },
                            width: SCREEN_WIDTH - 40,
                            height: SCREEN_HEIGHT / 2,
                            borderRadius: 10,
                            marginBottom: 20,


                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#bbb",

                            }}>
                            <Image source={require("../../assets/pets-4415649_1920.jpg")}
                                style={{
                                    resizeMode: "cover",
                                    width: SCREEN_WIDTH / 16,
                                    height: SCREEN_HEIGHT / 30,
                                    borderRadius: 10,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 10,

                                }}
                            />

                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            >
                                {feed.NAME}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F8F8F8",
                                    width: 68,
                                    height: 32,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "42%",
                                    marginTop: 15,

                                }}
                            >
                                <Image
                                    source={
                                        require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")
                                    }
                                    style={{
                                        resizeMode: "contain",
                                        width: 23,
                                        height: 23,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#7C7C7C",
                                        fontWeight: "400"
                                    }}
                                >
                                    대구
                            </Text>
                            </TouchableOpacity>

                        </View>
                        <View
                            style={{
                                marginTop: -10

                            }}
                        >
                            <Image source={require("../../assets/south-korea-3616701_1920.jpg")}
                                style={{
                                    resizeMode: "stretch",
                                    height: SCREEN_HEIGHT / 3,
                                    width: SCREEN_WIDTH / 1.121,
                                }}
                            />

                            <View
                                style={{

                                }}>
                                <Text>
                                    {feed.TEXT}
                                </Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                </View>


            )
        })

    }
}
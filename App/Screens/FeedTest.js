import React, { Component } from "react"
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
}
    from "react-native"
import axios from "axios";



export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            content: "",
            name: "",
            userImage: ""


        }
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

    _textUpload = (text) => {
        this.setState({
            content: text,
        });
    }

    _nameeUpload = (text) => {
        this.setState({
            name: text,
        });
    }

    _userImageUpload = (text) => {
        this.setState({
            userImage: text,
        });
    }

    _FinalUpload = () => {

        axios.post('http://35.223.204.78:8880/saveFeed', {
            "TITLE": `${this.state.title}`,
            "IMAGE": `${this.state.image}`,
            "TEXT": `${this.state.content}`,
            "NAME": `${this.state.name}`,
            "USERIMAGE": `${this.state.userImage}`
        })
            .then(res => {
                prettyPrint(res.data)
            })

    }

    Feed = (title, image, content, name, userImage) => {
        console.log("title :" + title,
            "image :" + image,
            "text :" + content,
            "name :" + name,
            "userImage :" + userImage)
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        height: "5%",
                        width: "90%",


                    }}
                    placeholder="제목"
                    onChangeText={this._titleUpload}>

                </TextInput>

                <TextInput
                    style={{
                        borderWidth: 1,
                        height: "5%",
                        width: "90%",

                    }}
                    placeholder="이미지"
                    onChangeText={this._imageeUpload}>
                </TextInput>

                <TextInput
                    style={{
                        borderWidth: 1,
                        height: "5%",
                        width: "90%",

                    }}
                    placeholder="내용"
                    onChangeText={this._textUpload}
                >

                </TextInput>

                <TextInput
                    style={{
                        borderWidth: 1,
                        height: "5%",
                        width: "90%",

                    }}
                    placeholder="닉네임"
                    onChangeText={this._nameeUpload}>

                </TextInput>

                <TextInput
                    style={{
                        borderWidth: 1,
                        height: "5%",
                        width: "90%",

                    }}
                    placeholder="유저이미지"
                    onChangeText={this._userImageUpload}>

                </TextInput>




                <TouchableOpacity
                    onPress={() => this._FinalUpload(
                        this.state.title,
                        this.state.image,
                        this.state.content,
                        this.state.name,
                        this.state.userImage)}>
                    <Text>업로드</Text>
                </TouchableOpacity>


            </View>
        )
    }
}
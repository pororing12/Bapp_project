import React, { Component } from 'react'
import{
    View,
    Text,
    TextInput,
    Touchable,
    StyleSheet
} from 'react-native'

export default class SignScreen extends Component{
    render() {
        return (
        <View >
            <View
                >
                <Text style = {{
                    marginLeft: 25,
                    marginTop: 25,
                    marginBottom: 25
                }}>
                    회원가입
                </Text>
            </View>
            <View>
                <Text
                    style = {{
                        marginLeft: 25,
                        marginTop: 25,
                        marginBottom: 25
                    }}>
                    아이디
                </Text>
                <TextInput
                    placeholder = "아이디를 입력해주세요." 
                    placeholderTextColor = "#bbb">
                </TextInput>
            </View>
            <View>
                <Text
                    style = {{
                        marginLeft: 25,
                        marginTop: 25,
                        marginBottom: 25
                    }}>
                    비밀번호
                </Text>
                <TextInput
                    placeholder = "비밀번호를 입력해주세요." 
                    placeholderTextColor = "#bbb">
                </TextInput>
            </View>
            <View>
                <Text>
                    닉네임
                </Text>
                <TextInput
                    placeholder = "닉네임을 입력해주세요." 
                    placeholderTextColor = "#bbb">
                </TextInput>
            </View>
        </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainText: {
        marginLeft: 25,
        marginTop: 25
    }
})
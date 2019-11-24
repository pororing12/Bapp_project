import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from "firebase"
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook';
import { SocialIcon } from 'react-native-elements'
import * as Google from 'expo-google-app-auth';




const firebaseConfig = {
  apiKey: "AIzaSyBPKL-8INmiU1FMoe2ZuqAE6fX11ECxIms",
  authDomain: "fundi-315b3.firebaseapp.com",
  databaseURL: "https://fundi-315b3.firebaseio.com",
  projectId: "fundi-315b3",
  storageBucket: "",

};

firebase.initializeApp(firebaseConfig);



export default class App extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isKakaoLogginig: false,
      token: "token has not fetched"
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }
  //eamil, password sign
  signUpUser = (email, password) => {

    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }

  }
  //email, password login
  loginUser = (email, password) => {

    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
      this.props.navigation.navigate("Main")
    }
    catch (error) {
      console.log(error.toString())
    }

  }
  //facebook login
  async loginWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync
      ('887975311580745', {
        permissions: ['public_profile'],
      });

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      this.props.navigation.navigate("Main")

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }
  //twitter


  //google
  sUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential).then(function (result) {
            console.log("user singed in")
            firebase
              .database()
              .ref("/user/" + result.user.uid)
              .set({
                gmail: result.user.email,
                profile_picture: result.additionalUserInfo.profile.picture,
                locate: result.additionalUserInfo.profile.locale,
                first_name: result.additionalUserInfo.profile.given_name,
                last_name: result.additionalUserInfo.profile.family_name
              })
              .then(function (snapshot) {

              })
          }.bind(this))
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: '752999601679-e0blr9q1uengipi5t0qnfuf6ii2pl2mm.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.props.navigation.navigate("Main")
        this.onSignIn(result)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <View style={styles.Logincontainer}>

        <View>
          <Text style={styles.idpwSNS}>아이디</Text>
          <TextInput
            placeholder="  아이디를 입력해주세요."
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.idpwPlaceholder}
            onChangeText={(email) => this.setState({ email })}>
          </TextInput>
        </View>

        <View>
          <Text style={styles.idpwSNS}>비밀번호</Text>
          <TextInput
            placeholder="  비밀번호를 입력해주세요."
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.idpwPlaceholder}
            onChangeText={(password) => this.setState({ password })}>
          </TextInput>
        </View>

        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.loginUser(this.state.email, this.state.password)}>
            <Text
              style={styles.LoginText}
            >
              펀디고 로그인
              </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            // onPress = {() => this.signUpUser(this.state.email, this.state.password)}
            onPress={() => this.props.navigation.navigate("Sign")}
            style={{ fontSize: 15 }}
          >
            회원가입
        </Text>
        </View>

        <View style={styles.SNScontainer}>
          <Text style={styles.idpwSNS}>SNS 로그인</Text>
        </View>
        <View style={styles.SNSLoginContainer}>
          <SocialIcon style={{ marginBottom: 20 }}
            onPress={() => this.loginWithFacebook()}
            type='facebook'
            light
          />

          <SocialIcon style={{ marginBottom: 20 }}
            onPress={() => this.loginWithFacebook()}
            type='twitter'
            light
          />

          <SocialIcon style={{ marginBottom: 20 }}
            onPress={() => this.signInWithGoogleAsync()}
            type='google'
            light

          />

          <SocialIcon style={{ marginBottom: 20 }}
            onPress={() => this.loginWithFacebook()}
            type='instagram'
            light
          />


        </View>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  Logincontainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  SNScontainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 50
  },
  loginButton: {
    width: "90%",
    marginLeft: 20,

    borderRadius: 5,
    height: 50,
    backgroundColor: "#56D1F3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20
  },
  LoginText: {
    color: "white",
    fontSize: 15
  },
  SNSButton: {
    width: "90%",
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#bbb",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  idpwSNS: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 10
  },
  idpwPlaceholder: {
    width: "90%",
    marginLeft: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#bbb",
    marginBottom: 10
  },
  SNSLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
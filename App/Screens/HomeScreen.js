import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  Animated,
  SafeAreaView,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Ionicons,
  Feather
} from '@expo/vector-icons'

import { Fonts } from '../../src/Fonts'


let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

let images = [
  { id: 1, src: require("../../assets/korea-3838656_1920.jpg") },
  { id: 2, src: require("../../assets/south-korea-3616701_1920.jpg") },
  { id: 3, src: require("../../assets/KakaoTalk_Photo_2019-10-30-15-35-46.png") }
]

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      activeImage: null
    }
  }
  componentWillMount() {
    this.allImages = {}
    this.oldPosition = {}
    this.position = new Animated.ValueXY()
    this.dimensions = new Animated.ValueXY()
    this.animation = new Animated.Value(0)
    this.activeImageStyle = null
  }

  openImage = (index) => {

    this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
      this.oldPosition.x = pageX
      this.oldPosition.y = pageY
      this.oldPosition.width = width
      this.oldPosition.height = height

      this.position.setValue({
        x: pageX,
        y: pageY
      })

      this.dimensions.setValue({
        x: width,
        y: height
      })

      this.setState({
        activeImage: images[index]
      }, () => {
        this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {

          Animated.parallel([
            Animated.timing(this.position.x, {
              toValue: dPageX,
              duration: 300
            }),
            Animated.timing(this.position.y, {
              toValue: dPageY,
              duration: 300
            }),
            Animated.timing(this.dimensions.x, {
              toValue: dWidth,
              duration: 300
            }),
            Animated.timing(this.dimensions.y, {
              toValue: dHeight,
              duration: 300
            }),
            Animated.timing(this.animation, {
              toValue: 1,
              duration: 300
            })
          ]).start()
        })
      })
    })
  }
  closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        duration: 250
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 250
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 250
      }),
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 250
      })
    ]).start(() => {
      this.setState({
        activeImage: null
      })
    })
  }

  render() {

    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x,
      top: this.position.y
    }

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    })

    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    })

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [{
        translateY: animatedContentY
      }]
    }

    const animatedCrossOpacity = {
      opacity: this.animation
    }
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          style={{
            flex: 1
          }}
          scrollEventThrottle={16}
        >

          <View
            style={
              styles.container
            } >
            <StatusBar
              barStyle="light-content"
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Image
                source={
                  require('../../assets/south-korea-3648252_1280.jpg')
                }

                style={{
                  width: SCREEN_WIDTH,
                  height: 380,
                  resizeMode: "stretch"
                }}
              >
              </Image>
              <Image
                source={
                  require('../../assets/scenery-1214950_1920.jpg')
                }
                style={{
                  width: SCREEN_WIDTH,
                  height: 380,
                  resizeMode: "stretch"
                }}>

              </Image>

            </ScrollView>
            <View
              style={
                styles.titleView
              }
            >
              <Text
                style={
                  styles.title
                }
              >
                안녕하세요.
                    </Text>
              <Text
                style={
                  styles.title
                }
              >
                Pororing님, 어디로 여행하시나요?
                    </Text>
            </View>

            <View
              style={{
                alignItems: "center"
              }}>
              <TouchableOpacity
                style={
                  styles.searchBar
                }
                onPress={
                  () => this.props.navigation.navigate("SearchList")
                }
              >
                <Feather
                  name="search"
                  color={"#bbb"}
                  size={15}
                >
                  <Text
                    style={{

                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      color: "#bbb"
                    }}
                  >
                    여행지를 검색하세요.
                            </Text>
                </Feather>

              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 30,
                justifyContent: "center"

              }}>
              {images.map((image, index) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => this.openImage(index)}
                    key={image.id}
                  >

                    <Animated.View
                      style={{
                        height: SCREEN_HEIGHT - 400,
                        width: SCREEN_WIDTH - 50,
                        marginBottom: 35,

                        shadowOpacity: 0.39,
                        elevation: 5,
                        shadowRadius: 8.30,

                        shadowOffset: {
                          width: 5, height: 6
                        },


                      }}
                    >
                      <Image
                        ref={(image) => (this.allImages[index] = image)}
                        source={image.src}
                        style={{
                          flex: 1,
                          height: SCREEN_HEIGHT - 200,
                          width: SCREEN_WIDTH - 50,
                          resizeMode: "cover",
                          borderRadius: 15
                        }}
                      />
                    </Animated.View>
                  </TouchableWithoutFeedback>
                )
              })}
            </View>
          </View>
        </ScrollView>
        <View
          style={
            StyleSheet.absoluteFill
          }
          pointerEvents={
            this.state.activeImage ? "auto" : "none"
          }
        >
          <View
            style={{
              flex: 2, zIndex: 1001
            }}
            ref={
              (view) => (this.viewImage = view)
            }
          >
            <Animated.Image
              source={
                this.state.activeImage ? this.state.activeImage.src : null
              }
              style={
                [{
                  resizeMode: 'cover',
                  top: 0,
                  left: 0,
                  height: null,
                  width: null
                },
                  activeImageStyle
                ]}
            >
            </Animated.Image>
            <TouchableWithoutFeedback
              onPress={() => this.closeImage()}>
              <Animated.View
                style={
                  [{
                    position: 'absolute',
                    top: 30,
                    right: 30
                  },
                    animatedCrossOpacity
                  ]}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  X
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>

          <Animated.View
            style={
              [{
                flex: 1,
                zIndex: 1000,
                backgroundColor: 'white',
                padding: 20,
                paddingTop: 50
              },
                animatedContentStyle
              ]}
          >
            <ScrollView>
              <Text
                style={{
                  fontSize: 24,
                  paddingBottom: 10
                }}
              >
                계산성당
            </Text>
              <Text>조선시대 대구는 수도인 한양과 제법 떨어져 있는 데다 박해를 피해 충청도 내륙 산중이나 대구 인근의 오지로 모여든 천주교 신자들이 모이면서 일찍이 큰 교세를 형성한 곳이다. 그중에서도 중심이 바로 계산성당으로, 100년 넘는 역사를 지니고 있는 이곳은 현재 주교좌성당으로 대구와 경북지역 가톨릭의 중심지로 역할을 하고 있다. 전주의 전동성당과 함께 우뚝 솟은 쌍탑이 아름다운 성당으로 유명한데, 원래는 1899년에 지금의 강화도 성공회성당과 유사하게 십자가 형태의 2층 구조에 기와를 올린 한식 건물로 지었으나 지은 지 얼마 되지 않아 불이 나서 무너지고 그 자리에 지금의 모습으로 새로 지었다고 한다.


</Text>
            </ScrollView>
          </Animated.View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },

  titleView: {
    marginTop: 40,
    marginRight: 10
  },
  title: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
    color: "#47525E",

  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#bbb",
    width: SCREEN_WIDTH - 50,
    height: 50,
    justifyContent: "center",
    marginTop: 30,

  }
})
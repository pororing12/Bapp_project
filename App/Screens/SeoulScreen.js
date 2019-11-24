import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Animated, TouchableWithoutFeedback, Button, Platform, } from 'react-native'
import { Feather, FontAwesome } from "@expo/vector-icons"

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

let images = [
  {
    id: 1,
    src: require("../../assets/korea-1095361_1920.jpg"),
  },
  { id: 2, src: require("../../assets/scenery-1214950_1920.jpg"), },
  { id: 3, src: require("../../assets/bukchon-3905234_1920.jpg"), }
]

export default class SeoulScreen extends Component {
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

  static navigationOptions = {
    header: null
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
        }}>
        <StatusBar
          barStyle="dark-content"
        />
        <ScrollView >
          <View style={styles.header}>
            <Feather
              name="sun"
              size={48}
            />
            <Text
              style={{
                ...styles.weathertitle,
                marginLeft: 30
              }}>
              지금 서울은
                </Text>
            <Text
              style={
                styles.weathertitle
              }>
              맑음입니다.
                </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={styles.exam}
            >

              <TouchableOpacity
                style={{
                  ...styles.middle,
                  marginLeft: 40,
                }}
              >
                <Feather
                  name="flag"
                  size={32}
                  color="#00D8FF"
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 25
                  }}
                />
                <Text
                  style={
                    styles.middletitle
                  }
                >
                  아시아
                    </Text>
                <Text
                  style={
                    styles.middletitle
                  }
                >
                  대한민국
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.middle,
                  marginLeft: 20,
                }}
              >
                <FontAwesome
                  name="money"
                  size={32}
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 25
                  }}
                />
                <Text
                  style={
                    styles.middletitle
                  }
                >
                  대한민국 원
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.middle,
                  marginLeft: 20
                }}
              >
                <Image
                  source={
                    require("../../assets/korea.png")
                  }
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 25
                  }}
                />
                <Text
                  style={
                    styles.middletitle
                  }
                >
                  한국어
                    </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View
            style={{
              marginTop: 50,
              marginLeft: 20
            }}>
            <Text
              style=
              {styles.roottitle}>
              추천루트
                </Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                marginLeft: 40,
                marginTop: 20,
                flexDirection: "row"
              }}>
              {images.map((image, index) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => this.openImage(index)}
                    key={image.id}>
                    <Animated.View
                      style={{ height: SCREEN_HEIGHT / 2, width: SCREEN_WIDTH - 50, marginLeft: -10, marginBottom: 15 }}
                    >
                      <Image
                        ref={(image) => (this.allImages[index] = image)}
                        source={image.src}
                        style={{ height: SCREEN_HEIGHT / 3, width: SCREEN_WIDTH / 1.5, resizeMode: "cover", borderRadius: 20 }}
                      />
                    </Animated.View>
                  </TouchableWithoutFeedback>
                )
              })}

            </View>
          </ScrollView>

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
              flex: 1,
              zIndex: 1001
            }}
            ref={
              (view) => (this.viewImage = view)
            }
          >
            <Animated.Image
              source={
                this.state.activeImage ? this.state.activeImage.src : null
              }
              style={[{
                resizeMode: 'stretch',
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
              onPress={
                () => this.closeImage()
              }>
              <Animated.View
                style={[{
                  position: 'absolute',
                  top: 30, right: 30
                },
                  animatedCrossOpacity
                ]}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  X
                </Text>
              </Animated.View>

            </TouchableWithoutFeedback>
          </View>


          <Animated.View style={[{ flex: 1, zIndex: 1000, backgroundColor: 'white', padding: 20, paddingTop: 0 }, animatedContentStyle]}>
            <ScrollView>
              <TouchableOpacity style={{ backgroundColor: "#333333", width: 48, height: 26, marginLeft: 320, justifyContent: "center" }} >
                <Text style={{ color: "white", textAlign: "center", justifyContent: "center" }}>코스</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ borderWidth: 2, borderColor: "#8492A6", width: 48, height: 26, justifyContent: "center", marginTop: 20, marginBottom: 10 }}>
                <Text style={{ color: "#7C7C7C", textAlign: "center" }}>5코스</Text>
              </TouchableOpacity>
              <View
                style={{
                  marginBottom: 10
                }}>
                <Text style={{ fontSize: 24, color: "#47525E", fontWeight: "700" }}>서울에서</Text>
                <Text style={{ fontSize: 24, color: "#47525E", fontWeight: "700" }}>여행을 외치다</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: "#F8F8F8", width: 68, height: 32, borderRadius: 15, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../assets/e0183a3cac5049a09d39c1b2dbaa55cc.png")} style={{ resizeMode: "contain", width: 23, height: 23, }} />
                <Text style={{ color: "#7C7C7C", fontWeight: "400" }}>서울</Text>
              </TouchableOpacity>
              <View style={{ borderWidth: 0.5, borderBottomColor: "#BBB", marginTop: 50 }}>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
                <TouchableOpacity>
                  <Text style={styles.Daytitle}>코스소개</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.Daytitle}>DAY - 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.Daytitle}>DAY - 2</Text>
                </TouchableOpacity>
              </View>
              <View style={{ borderWidth: 0.5, borderBottomColor: "#BBB", marginTop: 10 }}>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  backgroundColor: "#333333",
                  height: 30,
                  width: 108,
                  marginTop: 20,
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 30,
                  marginBottom: 20
                }}>
                <Image
                  source={
                    require("../../assets/625af9fe29ee40dea5b4b71ba1a25f5a.png")
                  }
                  style={{
                    resizeMode: "contain",
                    width: 21,
                    height: 21,
                    marginLeft: 5
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "700",
                    marginLeft: 5

                  }}
                >
                  DAY - 1
              </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  height: 170
                }}>

                <Image
                  source={
                    require("../../assets/Ih6rppyuxCOQqevGI0nBrGWxWuKs.jpg")
                  }
                  style={{
                    resizeMode: "cover",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    marginLeft: 50,
                    marginTop: 10
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  height: 170
                }}>

                <Image
                  source={
                    require("../../assets/scenery-1214950_1920.jpg")
                  }
                  style={{
                    resizeMode: "cover",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    marginLeft: 50,
                    marginTop: 10
                  }}
                />
              </View>
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
    backgroundColor: "blue",
    alignItems: "center"

  },
  weathertitle: {
    fontWeight: "500",
    fontSize: 20
  },

  middle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bbb",
    height: 128,
    width: 150,
    marginRight: 10
  },
  middletitle: {
    fontWeight: "500",
    color: "#47525E",
    marginLeft: 20
  },
  roottitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20
  },
  header: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 40,
    marginBottom: 70,
    marginTop: 60

  },

  exam: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Daytitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20
  },

  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 30
  }
})
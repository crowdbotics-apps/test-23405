import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <View>
        <View />
        <View />
      </View>
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_3: { fontFamily: "Montserrat-Regular" },
  View_7: {},
  View_8: {},
  View_9: {},
  Slider_11: {},
  Image_13: {}
})

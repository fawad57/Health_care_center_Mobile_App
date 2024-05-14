import  {React,useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import App from "../App";

const AndroidLarge7 = () => {
  const navigation = useNavigation();
  const[name,setname]=useState("");
  const[Appointment,setApp]=useState("");
  const[date,setdate]=useState("");
  const[gender,setgender]=useState("");

  return (
    <ImageBackground
      style={[styles.androidLarge7, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/androidlarge7.png")}
    >
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.id, styles.idTypo]}>ID:</Text>
        <Text style={[styles.gender, styles.genderTypo]}>Gender:</Text>
        <View style={[styles.frameWrapper, styles.groupFrameLayout]}>
          <View style={[styles.inputPatientNameWrapper, styles.groupWrapperBg]}>
            <TextInput style={[styles.inputPatientName, styles.inputTypo]}
            placeholder="DD/MM/YYYY"
            onChangeText={(val)=>setdate(val)}
            />
            <Text style={[styles.inputPatientName, styles.inputTypo]}>
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.groupFrameLayout]}>
          <View style={[styles.inputPatientNameWrapper, styles.groupWrapperBg]}>
            <TextInput style={[styles.inputPatientName1, styles.inputTypo]}
            placeholder="Male/Female"
            onChangeText={(val)=>setgender(val)}
            />
            <Text style={[styles.inputPatientName1, styles.inputTypo]}>
              
            </Text>
          </View>
        </View>
        <Text style={[styles.dateOfBirth, styles.genderTypo]}>
          Date Of Birth:
        </Text>
        <View style={[styles.groupView, styles.groupFrameLayout]}>
          <View style={[styles.inputPatientNameWrapper, styles.groupWrapperBg]}>
            <TextInput style={[styles.inputPatientName2, styles.inputTypo]}
            placeholder="Input Patient Name"
            onChangeText={(val)=>setname(val)}
            />
            <Text style={[styles.inputPatientName2, styles.inputTypo]}>
            </Text>
          </View>
        </View>
        <Text style={[styles.patientName, styles.genderTypo]}>
          Patient Name:
        </Text>
        <View style={[styles.groupWrapper, styles.groupWrapperBg]}>
          <View style={styles.inputAppointmentTypeWrapper}>
            <TextInput style={[styles.inputAppointmentType, styles.inputTypo]}
            placeholder="Input Appointment type"
            onChangeText={(val)=>setApp(val)}
            />
            <Text style={[styles.inputAppointmentType, styles.inputTypo]}>
            </Text>
          </View>
        </View>
        <Text style={[styles.appointmentType, styles.genderTypo]}>
          Appointment Type:
        </Text>
        <View style={[styles.groupItem, styles.groupWrapperBg]} />
        <Text style={styles.text}>1</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() =>{
          console.log("Pressed")
          if (name!=""&&Appointment!=""&&date!=""&&gender!="") {
            console.log(1);
           navigation.navigate("AndroidLarge8")}}}
      >
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.booked, styles.idTypo]}>Booked</Text>
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 366,
    width: 332,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  idTypo: {
    textAlign: "center",
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  genderTypo: {
    left: 8,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interMediumItalic,
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupFrameLayout: {
    width: 257,
    height: 29,
  },
  groupWrapperBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputTypo: {
    color: Color.dimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.interMediumItalic,
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupLayout: {
    height: 46,
    width: 131,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 15,
    backgroundColor: "#54729e",
    height: 366,
    width: 332,
    position: "absolute",
  },
  id: {
    left: 121,
    fontFamily: FontFamily.interMediumItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    top: 43,
    textAlign: "center",
    fontWeight: "500",
  },
  gender: {
    top: 294,
  },
  inputPatientName: {
    left: 21,
    top: 7,
  },
  inputPatientNameWrapper: {
    height: 29,
    width: 257,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 263,
    height: 29,
    left: 64,
    width: 257,
    position: "absolute",
  },
  inputPatientName1: {
    left: 25,
    top: 7,
  },
  frameContainer: {
    top: 324,
    left: 62,
    height: 29,
    position: "absolute",
  },
  dateOfBirth: {
    top: 230,
  },
  inputPatientName2: {
    left: 20,
    top: 7,
  },
  groupView: {
    top: 186,
    height: 29,
    left: 64,
    width: 257,
    position: "absolute",
  },
  patientName: {
    top: 153,
  },
  inputAppointmentType: {
    left: 0,
    top: 0,
  },
  inputAppointmentTypeWrapper: {
    left: 19,
    width: 159,
    height: 17,
    top: 7,
    position: "absolute",
  },
  groupWrapper: {
    top: 108,
    height: 29,
    width: 257,
    left: 64,
    overflow: "hidden",
  },
  appointmentType: {
    top: 77,
  },
  groupItem: {
    top: 38,
    left: 144,
    width: 38,
    height: 27,
  },
  text: {
    left: 159,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    top: 43,
    position: "absolute",
  },
  rectangleParent: {
    top: 209,
    left: 14,
  },
  groupInner: {
    borderRadius: 12,
    backgroundColor: Color.gainsboro_100,
    left: 0,
    top: 0,
  },
  booked: {
    top: 10,
    left: 18,
    fontSize: 24,
    fontFamily: FontFamily.interMedium,
    width: 98,
    height: 29,
    textAlign: "center",
    fontWeight: "500",
  },
  rectangleGroup: {
    top: 658,
    left: 113,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "3.33%",
    top: "1.13%",
    right: "90.28%",
    bottom: "96.63%",
    width: "6.39%",
    height: "2.25%",
    position: "absolute",
  },
  androidLarge7: {
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge7;

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

const AndroidLarge2 = () => {
  const navigation = useNavigation();
  const[name,setname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[repass,setrepass]=useState("");
  return (
    <ImageBackground
      style={styles.androidLarge2}
      resizeMode="cover"
      source={require("../assets/androidlarge2.png")}
    >
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]}
        placeholder=" Input your name"
        onChangeText={(name)=>setname(name)}
        />
        <Text style={[styles.inputYourName, styles.inputTypo]}>
        </Text>
      </View>
      <Text style={[styles.name, styles.passwordFlexBox]}>{`Name`}</Text>
      <Text style={[styles.eMail, styles.passwordFlexBox]}>
        E-mail or Phone No
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]}
        placeholder=" Input your email or Phone No"
        onChangeText={(val)=>setemail(val)}
        />
        <Text style={[styles.inputYourName, styles.inputTypo]}>
          
        </Text>
      </View>
      <Text style={[styles.password, styles.passwordFlexBox]}>Password</Text>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]}
        placeholder="Input your password"
        secureTextEntry={true}
        onChangeText={(val)=>setpassword(val)}
        />
        <Image
          style={[styles.bxhideIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bxhide1.png")}
        />
        <Text style={[styles.inputYourPassword, styles.inputTypo]}>
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]}
        placeholder=" Rewrite your password"
        secureTextEntry={true}
        onChangeText={(val)=>setrepass(val)}
        />
        <Image
          style={[styles.bxhideIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bxhide1.png")}
        />
        <Text style={[styles.rewriteYourPassword, styles.inputTypo]}>
        </Text>
      </View>
      <Text style={[styles.reEnterPassword, styles.passwordFlexBox]}>
        Re-Enter Password
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() =>{
          console.log("Pressed")
          if (name!=""&&password!=""&&email!=""&&repass!="") {
            if(repass==password){
            console.log(1);
          navigation.navigate("AndroidLarge6")}}}}
      >
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text style={[styles.signUp, styles.passwordFlexBox]}>Sign Up</Text>
      </Pressable>
      <Image
        style={styles.removebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/22removebgpreview-11.png")}
      />
      <Text
        style={[styles.registerYourselfTo, styles.passwordFlexBox]}
      >{`Register yourself to
 get started`}</Text>
      <Text style={[styles.trustCareCenter, styles.passwordFlexBox]}>
        Trust Care Center
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => {
          console.log("Pressed")
          if (name!=""&&password!=""&&email!=""&&repass!="") {
            if(repass==password){            
            console.log(1);        
          navigation.navigate("AndroidLarge6")}}}}
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
  groupLayout1: {
    height: 27,
    width: 272,
    position: "absolute",
  },
  inputTypo: {
    textAlign: "right",
    color: Color.darkgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: 32,
    width: 111,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.steelblue_300,
    top: 0,
  },
  inputYourName: {
    top: 5,
    left: 15,
    textAlign: "right",
    color: Color.darkgray,
    fontFamily: FontFamily.interRegular,
  },
  rectangleParent: {
    top: 333,
    left: 32,
    width: 272,
  },
  name: {
    top: 290,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 32,
  },
  eMail: {
    top: 381,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 32,
  },
  rectangleGroup: {
    top: 424,
    left: 32,
    width: 272,
  },
  password: {
    top: 470,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 32,
  },
  bxhideIcon: {
    right: "1.47%",
    left: "91.18%",
    bottom: "18.52%",
    top: "7.41%",
    width: "7.35%",
    height: "74.07%",
    maxWidth: "100%",
    position: "absolute",
  },
  inputYourPassword: {
    top: 3,
    left: 14,
  },
  rectangleContainer: {
    top: 511,
    left: 32,
    width: 272,
  },
  bxhideIcon1: {
    right: "1.84%",
    left: "90.81%",
    bottom: "18.52%",
    top: "7.41%",
    width: "7.35%",
    height: "74.07%",
    maxWidth: "100%",
    position: "absolute",
  },
  rewriteYourPassword: {
    top: 4,
    left: 15,
    textAlign: "right",
    color: Color.darkgray,
    fontFamily: FontFamily.interRegular,
  },
  groupView: {
    top: 598,
    left: 32,
    width: 272,
  },
  reEnterPassword: {
    top: 558,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 32,
  },
  groupChild1: {
    marginLeft: -55.5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.steelblue_200,
    top: 0,
  },
  signUp: {
    top: 7,
    left: 27,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  groupPressable: {
    marginLeft: -67,
    top: 736,
  },
  removebgPreview1Icon: {
    top: 661,
    left: 143,
    width: 38,
    height: 52,
    position: "absolute",
  },
  registerYourselfTo: {
    top: 205,
    left: 104,
    fontSize: FontSize.size_smi,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiboldItalic,
    color: "#0a0909",
  },
  trustCareCenter: {
    top: 94,
    left: 79,
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.bodoniModaRegular,
    color: "#142256",
    width: 173,
    opacity: 0.9,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "2.5%",
    top: "0.88%",
    right: "91.11%",
    bottom: "96.88%",
    width: "6.39%",
    height: "2.25%",
    position: "absolute",
  },
  androidLarge2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge2;

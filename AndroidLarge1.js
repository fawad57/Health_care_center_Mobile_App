import  {React,useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const AndroidLarge1 = () => {
  const navigation = useNavigation();
  const[login,setlogin]=useState("");
  const[password,setpassword]=useState("");
  const[name1,setname2]=useState("fawadhumayun12@gmail.com");
  const[pass2,setpass2]=useState("fawad1122");

  return (
    <View style={styles.androidLarge1}>
      <ImageBackground
        style={styles.rectangleParent}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      >
        <View style={styles.frameChild} />
        <Text style={[styles.welcomeTo, styles.welcomeToFlexBox]}>
          Welcome to
        </Text>
        <Text style={styles.loginToYour}>{`Login to your account : `}</Text>
        <Text style={[styles.trustCareCenter, styles.welcomeToFlexBox]}>
          Trust Care Center
        </Text>
      </ImageBackground>
      <Text style={[styles.password, styles.passwordTypo]}>{`Password `}</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]} 
        placeholder="Email/Phone No"
        onChangeText={(val)=>setlogin(val)}
        />
        <Text style={[styles.emailphoneNo, styles.emailphoneNoTypo]}>
        </Text>
      </View>
      <Text style={[styles.emailOrPhone, styles.passwordTypo]}>
        Email or Phone Number
      </Text>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <TextInput style={[styles.groupChild, styles.groupLayout1]}
        placeholder="Input Your Password"
        secureTextEntry={true}
        onChangeText={(val)=>setpassword(val)}
        />
        <Text style={[styles.inputYourPassword, styles.emailphoneNoTypo]}>
        </Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() =>{
          console.log("Pressed")
          if ((login==name1)&&(password==pass2)) {
            console.log(1);         
          navigation.navigate("AndroidLarge6")
          
        }}}
      >
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.login}>LOGIN</Text>
      </Pressable>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("AndroidLarge3")}
      >
        <Text style={[styles.forgotPassword1, styles.textTypo]}>
          Forgot Password
        </Text>
      </Pressable>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
          <Text style={styles.registerHereTypo}>Register here</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.darkslategray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout1: {
    height: 29,
    width: 283,
    position: "absolute",
  },
  emailphoneNoTypo: {
    color: Color.silver,
    top: 7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    height: 32,
    width: 112,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  frameChild: {
    top: 342,
    left: 25,
    borderRadius: 25,
    backgroundColor: Color.gainsboro_100,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 314,
    height: 287,
    position: "absolute",
  },
  welcomeTo: {
    top: 274,
    fontSize: 16,
    width: 95,
    height: 23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.white,
    left: 27,
  },
  loginToYour: {
    marginTop: 167.5,
    marginLeft: -83,
    top: "50%",
    fontSize: FontSize.size_mini,
    color: "#242323",
    textAlign: "center",
    fontFamily: FontFamily.interMediumItalic,
    fontStyle: "italic",
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  trustCareCenter: {
    top: 302,
    left: 26,
    fontSize: 23,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
  },
  rectangleParent: {
    marginLeft: -180,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    width: 360,
    height: 413,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  password: {
    top: 523,
    left: 31,
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.steelblue_300,
    top: 0,
  },
  emailphoneNo: {
    left: 13,
  },
  rectangleGroup: {
    top: 480,
    left: 30,
  },
  emailOrPhone: {
    top: 450,
    left: 30,
  },
  inputYourPassword: {
    left: 11,
  },
  rectangleContainer: {
    top: 553,
    left: 27,
    width: 283,
  },
  groupInner: {
    marginLeft: -56,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.steelblue_200,
    top: 0,
  },
  login: {
    top: 9,
    left: 36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupPressable: {
    marginLeft: -71,
    top: 658,
  },
  forgotPassword1: {
    fontFamily: FontFamily.interMediumItalic,
    fontStyle: "italic",
    fontWeight: "500",
  },
  forgotPassword: {
    left: 121,
    top: 714,
    position: "absolute",
  },
  dontHaveAn: {
    fontWeight: "200",
    fontFamily: FontFamily.interExtralightItalic,
    fontStyle: "italic",
  },
  registerHereTypo: {
    fontFamily: FontFamily.interMediumItalic,
    fontStyle: "italic",
    fontWeight: "500",
  },
  dontHaveAnContainer: {
    left: 73,
    top: 751,
    position: "absolute",
  },
  androidLarge1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;

import  {React,useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const AndroidLarge3 = () => {
  const navigation = useNavigation();
  const[email,setemail]=useState("");

  return (
    <ImageBackground
      style={[styles.androidLarge3, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/androidlarge3.png")}
    >
      <Text style={styles.forgetPassword}>{`Forget Password `}</Text>
      <Text style={styles.enterTheEmail}>{`Enter the Email Address 
associated with your account`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <TextInput style={[styles.groupChild, styles.groupChildLayout]}
        placeholder=" Enter your Email"
        onChangeText={(val)=>setemail(val)}
        />
        <Text style={[styles.enterYourEmail, styles.nextTypo]}>
        </Text>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.groupItemPosition]}
        onPress={() =>{
          console.log("Pressed")
          if (email!="") {
            console.log(1);
           navigation.navigate("AndroidLarge5")}}}
      >
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </Pressable>
      <Pressable
        style={styles.backToLoginContainer}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Text
          style={[styles.backToLogin, styles.nextTypo]}
        >{` <- Back to Login`}</Text>
      </Pressable>
      <Image
        style={styles.removebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/22removebgpreview-1.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge1")}
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
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout: {
    height: 27,
    width: 272,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.interSemiboldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
  },
  groupItemPosition: {
    width: 111,
    left: "50%",
    position: "absolute",
  },
  forgetPassword: {
    top: 125,
    left: 101,
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.bodoniModaRegular,
    color: Color.black,
    width: 173,
    opacity: 0.9,
    textAlign: "center",
    position: "absolute",
  },
  enterTheEmail: {
    top: 286,
    left: 65,
    fontWeight: "700",
    fontFamily: FontFamily.interBoldItalic,
    color: "#e3e3e3",
    fontStyle: "italic",
    fontSize: 16,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.steelblue_300,
    top: 0,
  },
  enterYourEmail: {
    top: 4,
    left: 15,
    color: "#dcd8d8",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent: {
    top: 400,
    left: 46,
  },
  groupItem: {
    marginLeft: -55.5,
    borderRadius: Border.br_3xs,
    height: 29,
    top: 0,
  },
  next: {
    top: 5,
    left: 19,
    color: "#fcefef",
    width: 71,
    height: 25,
    fontWeight: "600",
    fontSize: 16,
    position: "absolute",
  },
  vectorParent: {
    marginLeft: -51,
    top: 521,
    height: 30,
  },
  backToLogin: {
    color: "#e0e0e0",
    width: 114,
    height: 26,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
  },
  backToLoginContainer: {
    left: 123,
    top: 575,
    position: "absolute",
  },
  removebgPreview1Icon: {
    top: 457,
    left: 167,
    width: 28,
    height: 38,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "2.22%",
    top: "0.88%",
    right: "91.39%",
    bottom: "96.88%",
    width: "6.39%",
    height: "2.25%",
    position: "absolute",
  },
  androidLarge3: {
    flex: 1,
    height: 800,
  },
});

export default AndroidLarge3;

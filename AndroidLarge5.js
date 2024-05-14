import  {React,useState} from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const AndroidLarge5 = () => {
  const navigation = useNavigation();
  const[password,setpassword]=useState("");
  const[pass,setpass]=useState("");

  return (
    <ImageBackground
      style={styles.androidLarge5}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}
    >
      <Image
        style={styles.mdipasswordMinusIcon}
        contentFit="cover"
        source={require("../assets/mdipasswordminus.png")}
      />
      <Text style={styles.createNewPassword}>Create New Password</Text>
      <View style={styles.androidLarge5Child} />
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() =>{
          console.log("Pressed")
          if (pass!=""&&password!=""&&pass==password) {
            console.log(1);
           navigation.navigate("AndroidLarge6")}}}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Text style={[styles.setNewPassword, styles.loginTypo]}>
        Set new password to login to your account
      </Text>
      <View style={styles.materialSymbolslockOutlineParent}>
        <Image
          style={[styles.materialSymbolslockOutlineIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolslockoutline.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>
          __________________________________________
        </Text>
        <TextInput style={styles.createNewPassword1}
      placeholder="Create New Password"
      secureTextEntry={true}
      onChangeText={(val)=>setpassword(val)}
      />
        <Image
          style={[styles.bxhideIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bxhide.png")}
        />
      </View>
      <View style={styles.bxhideParent}>
        <Image
          style={[styles.bxhideIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/bxhide.png")}
        />
        <Image
          style={[styles.materialSymbolslockOutlineIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolslockoutline.png")}
        />
      <TextInput style={styles.createNewPassword1}
      placeholder="Confirm new password"
      secureTextEntry={true}
      onChangeText={(val)=>setpass(val)}
      />
        <Text style={[styles.text1, styles.textTypo]}>
          __________________________________________
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge3")}
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
  groupLayout: {
    height: 37,
    width: 127,
    left: "50%",
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 17,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 45,
    width: 299,
    fontSize: FontSize.size_smi,
    color: Color.silver,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mdipasswordMinusIcon: {
    top: 98,
    left: 136,
    width: 88,
    height: 79,
    position: "absolute",
    overflow: "hidden",
  },
  createNewPassword: {
    top: 220,
    left: 86,
    fontSize: 18,
    color: Color.black,
    width: 203,
    height: 38,
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  androidLarge5Child: {
    top: 419,
    borderRadius: 35,
    backgroundColor: Color.steelblue_300,
    width: 360,
    height: 412,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -63.5,
    top: 0,
  },
  login: {
    top: 6,
    left: 6,
    color: Color.white,
    width: 116,
    height: 22,
  },
  groupParent: {
    marginLeft: -64,
    top: 685,
  },
  setNewPassword: {
    top: 283,
    left: 56,
    color: "rgba(255, 255, 255, 0.9)",
    width: 263,
    height: 47,
  },
  materialSymbolslockOutlineIcon: {
    left: 37,
    top: 2,
    width: 20,
  },
  text: {
    top: 13,
    left: 20,
  },
  createNewPassword1: {
    top: 0,
    fontSize: FontSize.size_mini,
    width: 288,
    color: Color.silver,
    left: 0,
    height: 38,
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  bxhideIcon: {
    height: "34.48%",
    width: "6.27%",
    top: "0%",
    right: "7.21%",
    bottom: "65.52%",
    left: "86.52%",
    position: "absolute",
  },
  materialSymbolslockOutlineParent: {
    top: 465,
    left: 12,
    width: 319,
    height: 58,
    position: "absolute",
  },
  bxhideIcon1: {
    left: 271,
    top: 0,
  },
  materialSymbolslockOutlineIcon1: {
    left: 32,
    top: 2,
    width: 20,
  },
  text1: {
    top: 14,
    left: 15,
  },
  bxhideParent: {
    top: 543,
    left: 17,
    width: 314,
    height: 59,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
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
  androidLarge5: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge5;

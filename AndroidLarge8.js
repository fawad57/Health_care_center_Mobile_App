import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge8}
      resizeMode="cover"
      source={require("../assets/androidlarge8.png")}
    >
      <View
        style={[styles.androidLarge8Child, styles.androidLarge8ChildLayout]}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.androidLarge8Item, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.container, styles.containerPosition]}
        onPress={() => navigation.navigate("AndroidLarge9")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={styles.androidLarge8Inner}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.containerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.icoutlineLogOut, styles.icoutlineLogOutLayout]}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icoutlinelogout.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.simpleLineIconscalender,
          styles.icsharpHistoryIconPosition,
        ]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/simplelineiconscalender.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.healthiconsdoctorMale,
          styles.healthiconsdoctorMalePosition,
        ]}
        onPress={() => navigation.navigate("AndroidLarge9")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/healthiconsdoctormale.png")}
        />
      </Pressable>
      <Image
        style={[styles.icsharpHistoryIcon, styles.icsharpHistoryIconPosition]}
        contentFit="cover"
        source={require("../assets/icsharphistory.png")}
      />
      <Text style={[styles.booking, styles.logOutLayout]}>Booking</Text>
      <Text style={[styles.history, styles.logOutLayout]}>History</Text>
      <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      <Text style={[styles.doctors, styles.doctorsTypo]}>Doctors</Text>
      <Text style={[styles.emergency, styles.doctorsTypo]}>Emergency</Text>
      <Text style={[styles.medicines, styles.logOutTypo]}>{`Medicines
`}</Text>
      <Image
        style={[
          styles.materialSymbolse911EmergencIcon,
          styles.healthiconsdoctorMalePosition,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolse911emergencyoutline.png")}
      />
      <Image
        style={[styles.gameIconsmedicines, styles.icoutlineLogOutLayout]}
        contentFit="cover"
        source={require("../assets/gameiconsmedicines.png")}
      />
      <Image
        style={styles.aa1Icon}
        contentFit="cover"
        source={require("../assets/aa-1.png")}
      />
      <Text style={styles.services}>{`Services
`}</Text>
      <View
        style={[
          styles.materialSymbolsecgHeartSha,
          styles.androidLarge8ChildLayout,
        ]}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  androidLarge8ChildLayout: {
    height: 45,
    position: "absolute",
  },
  frameLayout: {
    height: 121,
    width: 131,
    position: "absolute",
  },
  containerPosition: {
    top: 417,
    height: 121,
    width: 131,
    position: "absolute",
  },
  icoutlineLogOutLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  icsharpHistoryIconPosition: {
    top: 261,
    height: 50,
    width: 50,
    position: "absolute",
  },
  healthiconsdoctorMalePosition: {
    top: 451,
    position: "absolute",
  },
  logOutLayout: {
    height: 42,
    width: 112,
  },
  logOutTypo: {
    top: 729,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  doctorsTypo: {
    top: 556,
    height: 42,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 0,
    backgroundColor: Color.steelblue_100,
    width: 360,
    left: 0,
  },
  wrapper: {
    top: 226,
    height: 121,
    left: 31,
  },
  androidLarge8Item: {
    left: 197,
    top: 226,
    height: 121,
  },
  container: {
    left: 31,
  },
  androidLarge8Inner: {
    top: 599,
    height: 122,
    width: 131,
    left: 31,
    position: "absolute",
  },
  frame: {
    top: 600,
    left: 197,
  },
  ellipseIcon: {
    left: 197,
  },
  icon3: {
    overflow: "hidden",
  },
  icoutlineLogOut: {
    top: 635,
    left: 238,
  },
  simpleLineIconscalender: {
    left: 72,
  },
  healthiconsdoctorMale: {
    left: 68,
    width: 54,
    height: 54,
  },
  icsharpHistoryIcon: {
    left: 238,
    overflow: "hidden",
  },
  booking: {
    left: 41,
    textAlign: "center",
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    top: 360,
    height: 42,
    color: Color.black,
    position: "absolute",
  },
  history: {
    left: 210,
    textAlign: "center",
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    top: 360,
    height: 42,
    color: Color.black,
    position: "absolute",
  },
  logOut: {
    left: 208,
    height: 42,
    width: 112,
  },
  doctors: {
    left: 42,
    width: 112,
    top: 556,
  },
  emergency: {
    left: 201,
    width: 139,
  },
  medicines: {
    left: 33,
    width: 128,
    height: 25,
  },
  materialSymbolse911EmergencIcon: {
    left: 236,
    width: 55,
    height: 55,
    overflow: "hidden",
  },
  gameIconsmedicines: {
    top: 636,
    left: 72,
    overflow: "hidden",
  },
  aa1Icon: {
    top: 44,
    width: 367,
    height: 178,
    left: 0,
    position: "absolute",
  },
  services: {
    top: 83,
    left: 24,
    fontSize: FontSize.size_8xl_4,
    fontFamily: FontFamily.montagaRegular,
    textAlign: "left",
    width: 186,
    height: 53,
    color: Color.black,
    position: "absolute",
  },
  materialSymbolsecgHeartSha: {
    top: 64,
    left: 132,
    width: 43,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "4.63%",
    width: "10.83%",
    top: "10.38%",
    right: "51.39%",
    bottom: "85%",
    left: "37.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge8: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge8;

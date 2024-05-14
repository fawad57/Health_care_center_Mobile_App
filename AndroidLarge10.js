import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge10}>
      <View
        style={[styles.androidLarge10Child, styles.androidLarge10ChildLayout]}
      />
      <Image
        style={[styles.androidLarge10Item, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.androidLarge10Inner, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.androidLarge10Child1}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <Image
        style={[styles.androidLarge10Child2, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.androidLarge10Child3, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.icoutlineLogOutIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icoutlinelogout2.png")}
      />
      <Image
        style={[
          styles.simpleLineIconscalender,
          styles.gameIconsmedicinesPosition,
        ]}
        contentFit="cover"
        source={require("../assets/simplelineiconscalender1.png")}
      />
      <Image
        style={[styles.healthiconsdoctorMale, styles.areYouSurePosition]}
        contentFit="cover"
        source={require("../assets/healthiconsdoctormale1.png")}
      />
      <Image
        style={[styles.icsharpHistoryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icsharphistory1.png")}
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
        source={require("../assets/materialsymbolse911emergencyoutline1.png")}
      />
      <Image
        style={[styles.gameIconsmedicines, styles.gameIconsmedicinesPosition]}
        contentFit="cover"
        source={require("../assets/gameiconsmedicines1.png")}
      />
      <Image
        style={styles.aa1Icon}
        contentFit="cover"
        source={require("../assets/aa-11.png")}
      />
      <Text style={styles.services}>{`Services
`}</Text>
      <View
        style={[
          styles.materialSymbolsecgHeartSha,
          styles.androidLarge10ChildLayout,
        ]}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.areYouSure, styles.logout1Typo]}>
        Are you sure ?
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      />
      <Pressable
        style={[styles.logout, styles.logoutPosition]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
      </Pressable>
      <Pressable
        style={[styles.androidLarge10Child4, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Pressable
        style={[styles.cancel, styles.logoutPosition]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Text style={[styles.logout1, styles.logout1Typo]}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge10ChildLayout: {
    height: 45,
    position: "absolute",
  },
  androidLayout: {
    height: 121,
    width: 131,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 417,
    height: 121,
    width: 131,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 50,
    left: 238,
    position: "absolute",
    overflow: "hidden",
  },
  gameIconsmedicinesPosition: {
    left: 72,
    height: 50,
    width: 50,
    position: "absolute",
    overflow: "hidden",
  },
  areYouSurePosition: {
    left: 68,
    position: "absolute",
  },
  logOutLayout: {
    height: 42,
    width: 112,
  },
  logOutTypo: {
    top: 729,
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  doctorsTypo: {
    top: 556,
    height: 42,
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  healthiconsdoctorMalePosition: {
    top: 451,
    overflow: "hidden",
  },
  logout1Typo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
  },
  rectanglePressableLayout: {
    height: 40,
    borderRadius: Border.br_mini,
    left: 82,
    width: 186,
    position: "absolute",
  },
  logoutPosition: {
    left: "31.67%",
    position: "absolute",
  },
  androidLarge10Child: {
    top: 0,
    backgroundColor: "rgba(67, 140, 208, 0.2)",
    width: 360,
    left: 0,
  },
  androidLarge10Item: {
    left: 31,
    top: 226,
    height: 121,
  },
  androidLarge10Inner: {
    left: 197,
    top: 226,
    height: 121,
  },
  ellipseIcon: {
    left: 31,
  },
  androidLarge10Child1: {
    top: 599,
    height: 122,
    width: 131,
    left: 31,
    position: "absolute",
  },
  androidLarge10Child2: {
    top: 600,
    left: 197,
  },
  androidLarge10Child3: {
    left: 197,
  },
  icoutlineLogOutIcon: {
    top: 635,
  },
  simpleLineIconscalender: {
    top: 261,
  },
  healthiconsdoctorMale: {
    width: 54,
    height: 54,
    top: 451,
    overflow: "hidden",
  },
  icsharpHistoryIcon: {
    top: 261,
  },
  booking: {
    left: 41,
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    top: 360,
    height: 42,
    position: "absolute",
  },
  history: {
    left: 210,
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.inikaRegular,
    fontSize: FontSize.size_6xl,
    top: 360,
    height: 42,
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
    position: "absolute",
  },
  gameIconsmedicines: {
    top: 636,
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
    height: 53,
    width: 186,
    color: Color.gray_300,
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
  rectangleView: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.gainsboro_100,
    width: 297,
    height: 277,
    top: 261,
    left: 31,
    position: "absolute",
  },
  areYouSure: {
    top: 313,
    width: 219,
    height: 49,
    left: 68,
    position: "absolute",
  },
  rectanglePressable: {
    top: 381,
    backgroundColor: "#c89999",
  },
  logout1: {
    height: "3.25%",
    width: "32.5%",
  },
  logout: {
    top: "48.13%",
  },
  androidLarge10Child4: {
    top: 443,
    backgroundColor: "#1c1a1a",
  },
  cancel: {
    top: "55.75%",
  },
  androidLarge10: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge10;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <Image
        style={[styles.androidLarge6Child, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <Text style={styles.welcomeToOur}>
        Welcome to our clinic! We're glad you've chosen us for your healthcare
        needs. Our team is committed to providing you with the highest quality
        care and support, and we look forward to helping you achieve optimal
        health.
      </Text>
      <Text style={[styles.welcomeTo, styles.welcomeToFlexBox]}>
        Welcome to
      </Text>
      <Text style={[styles.trustCareCenter, styles.welcomeToFlexBox]}>
        Trust Care Center
      </Text>
      <View style={[styles.androidLarge6Item, styles.androidPosition]} />
      <Image
        style={styles.icoutlineLogOutIcon}
        contentFit="cover"
        source={require("../assets/icoutlinelogout1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
      </Pressable>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>{`Next  ->`}</Text>
      </Pressable>
      <Image
        style={styles.materialSymbolsstethoscopeIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsstethoscope.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  welcomeToFlexBox: {
    textAlign: "left",
    color: Color.steelblue_100,
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  androidLarge6Child: {
    top: 45,
    borderRadius: 11,
    height: 471,
  },
  welcomeToOur: {
    top: 570,
    fontSize: 14,
    fontFamily: FontFamily.interRegularItalic,
    color: Color.black,
    height: 98,
    textAlign: "center",
    fontStyle: "italic",
    width: 360,
    left: 0,
    position: "absolute",
  },
  welcomeTo: {
    top: 377,
    left: 14,
    fontSize: 19,
    width: 111,
    height: 27,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  trustCareCenter: {
    top: 414,
    left: 51,
    fontSize: 29,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 272,
    height: 44,
  },
  androidLarge6Item: {
    top: 0,
    backgroundColor: Color.steelblue_100,
    height: 45,
  },
  icoutlineLogOutIcon: {
    top: 11,
    left: 320,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    marginLeft: -64,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "50%",
    top: 721,
    width: 127,
    height: 37,
    position: "absolute",
  },
  next1: {
    fontSize: 21,
    color: Color.white,
    width: 144,
    height: 44,
    textAlign: "center",
  },
  next: {
    left: 112,
    top: 726,
    position: "absolute",
  },
  materialSymbolsstethoscopeIcon: {
    top: 669,
    left: 164,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge6: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge6;

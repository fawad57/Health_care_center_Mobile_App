import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge9}>
      <View style={[styles.androidLarge9Child, styles.androidLayout]} />
      <View style={[styles.androidLarge9Item, styles.androidLayout]} />
      <View style={[styles.androidLarge9Inner, styles.androidLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={[styles.androidLarge9Child1, styles.rectangleViewBg]} />
      <Text style={[styles.welcomingYouTo, styles.welcomingYouToTypo]}>
        Welcoming you to a healthier Future
      </Text>
      <Image
        style={styles.openmojimaleDoctorIcon}
        contentFit="cover"
        source={require("../assets/openmojimaledoctor.png")}
      />
      <Text style={[styles.yourTrustedDoctor, styles.welcomingYouToTypo]}>
        Your trusted doctor at your fingertips!
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.androidChildLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      />
      <Pressable
        style={[styles.androidLarge9Child2, styles.androidChildLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      />
      <Pressable
        style={[styles.androidLarge9Child3, styles.androidChildLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      />
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipsePressable, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper1, styles.frameLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.drSarahHostenContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Text
          style={[
            styles.drSarahHostenEyeSpecialis,
            styles.drSarahHostenEyeSpecialisTypo,
          ]}
        >{`Dr. Sarah Hosten
Eye Specialist
8 years experience
Available (8am - 8pm)`}</Text>
      </Pressable>
      <Pressable
        style={[styles.drJackRichardsContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Text
          style={[
            styles.drJackRichardsHeartSurgeo,
            styles.drSarahHostenEyeSpecialisTypo,
          ]}
        >{`Dr. Jack Richards
Heart Surgeon
10 years experience
Available (8am - 10pm)`}</Text>
      </Pressable>
      <Pressable
        style={[styles.drRobertCartnerContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Text
          style={[
            styles.drJackRichardsHeartSurgeo,
            styles.drSarahHostenEyeSpecialisTypo,
          ]}
        >{`Dr. Robert Cartner
Neurologists
8 years experience
Available (9am - 10pm)`}</Text>
      </Pressable>
      <Pressable
        style={styles.drAdamPulmonologistContainer}
        onPress={() => navigation.navigate("AndroidLarge7")}
      >
        <Text
          style={[
            styles.drJackRichardsHeartSurgeo,
            styles.drSarahHostenEyeSpecialisTypo,
          ]}
        >{`Dr. Adam
Pulmonologist
10 years experience
Available (7am - 9pm)`}</Text>
      </Pressable>
      <Text style={styles.selectYourDesired}>Select your Desired Doctor</Text>
      <Image
        style={styles.mdidoctorIcon}
        contentFit="cover"
        source={require("../assets/mdidoctor.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 110,
    width: 315,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  welcomingYouToTypo: {
    height: 30,
    fontSize: FontSize.size_4xl,
    left: 29,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.montagaRegular,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  androidChildLayout: {
    left: 18,
    borderRadius: Border.br_lg,
    height: 78,
    width: 325,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  frameLayout: {
    height: 55,
    width: 55,
    left: 34,
    position: "absolute",
  },
  containerPosition: {
    left: 104,
    position: "absolute",
  },
  drSarahHostenEyeSpecialisTypo: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montagaRegular,
  },
  androidLarge9Child: {
    top: 251,
    left: 22,
    width: 315,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xl,
  },
  androidLarge9Item: {
    top: 400,
    left: 22,
    width: 315,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xl,
  },
  androidLarge9Inner: {
    top: 557,
    left: 21,
  },
  rectangleView: {
    top: -8,
    left: -11,
    borderBottomRightRadius: 27,
    borderBottomLeftRadius: 27,
    width: 382,
    height: 227,
  },
  androidLarge9Child1: {
    top: 224,
    left: 0,
    borderTopLeftRadius: 100,
    width: 360,
    height: 583,
  },
  welcomingYouTo: {
    top: 28,
    width: 318,
  },
  openmojimaleDoctorIcon: {
    top: 125,
    left: 252,
    width: 83,
    height: 81,
    position: "absolute",
    overflow: "hidden",
  },
  yourTrustedDoctor: {
    top: 92,
    width: 289,
  },
  icon: {
    borderRadius: Border.br_lg,
    height: "100%",
  },
  wrapper: {
    left: 17,
    top: 364,
    height: 78,
    width: 325,
    position: "absolute",
  },
  rectanglePressable: {
    top: 469,
  },
  androidLarge9Child2: {
    top: 575,
  },
  androidLarge9Child3: {
    top: 679,
  },
  container: {
    top: 375,
  },
  frame: {
    top: 481,
  },
  ellipsePressable: {
    top: 586,
  },
  wrapper1: {
    top: 690,
  },
  drSarahHostenEyeSpecialis: {
    width: 198,
    height: 67,
  },
  drSarahHostenContainer: {
    top: 372,
  },
  drJackRichardsHeartSurgeo: {
    width: 199,
    height: 51,
  },
  drJackRichardsContainer: {
    top: 475,
  },
  drRobertCartnerContainer: {
    top: 581,
  },
  drAdamPulmonologistContainer: {
    left: 109,
    top: 685,
    position: "absolute",
  },
  selectYourDesired: {
    top: 277,
    left: 39,
    fontSize: 18,
    width: 308,
    height: 53,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.montagaRegular,
    position: "absolute",
  },
  mdidoctorIcon: {
    top: 265,
    left: 251,
    width: 63,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge9: {
    backgroundColor: "#bebebe",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge9;

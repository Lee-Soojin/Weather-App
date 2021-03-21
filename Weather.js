import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#e9d362", "#333333"],
    title: "Thunderstorm",
    subtitle: "THOR is fighting",
  },
  Drizzle: {
    iconName: "water-outline",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Drizzle",
    subtitle: "How about take an umbrella? 🌂",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Rain",
    subtitle: "☂ It's nice weather to listen music and feel the mood",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Snow",
    subtitle: "Do you wanna build a snow man ⛄",
  },
  Atmosphere: {
    iconName: "weather-cloudy-alert",
    gradient: ["#E6DADA", "#274046"],
    title: "Atmosphere",
    subtitle: "Be careful when you drive",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    title: "Clear",
    subtitle: "It's so lovely day 🥰",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#076585", "#fff"],
    title: "Cloud",
    subtitle: "Take a picture of clouds",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "Mist",
    subtitle: "I think it's not a good weather",
  },
  Dust: {
    iconName: "smog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Dust",
    subtitle: "I recommend you to wear a mask",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 54,
    fontWeight: "300",
    marginBottom: 10,
  },

  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});

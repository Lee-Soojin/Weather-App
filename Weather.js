import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Thunderstrom: {
    iconName: "weather-ligtning",
    gradient: ["#e9d362", "#333333"],
  },
  Drizzle: {
    iconName: "water-outline",
    gradient: ["#1c92d2", "#f2fcfe"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
  },
  Atmosphere: {
    iconName: "weather-cloudy-alert",
    gradient: ["#E6DADA", "#274046"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#076585", "#fff"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
  },
  Dust: {
    iconName: "smog",
    gradient: ["#606c88", "#3f4c6b"],
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
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstrom",
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
});

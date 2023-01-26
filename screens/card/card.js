import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const Card = () => {
  const points = useSelector((state) => state.points);

  return (
    <View>
      <View style={styles.CardBox}>
        <View style={styles.card}>
          <Text style={styles.monthText}>Diciembre</Text>
          {points ? (
            <Text style={styles.cardText}>{points} pts</Text>
          ) : (
            <ActivityIndicator size="large" color="#ffffff" />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardBox: {
    display: "flex",
    alignItems: "center",
  },
  monthText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 21,
    paddingLeft: 18,
    lineHeight: 22,
    fontStyle: "normal",
    fontFamily: "Avenir",
  },
  card: {
    height: 143,
    width: 286,
    borderRadius: 20,
    backgroundColor: "#334FFA",
    marginTop: 10,
  },
  cardText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 50,
    paddingTop: 2,
  },
});

export default Card;

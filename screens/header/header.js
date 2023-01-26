import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.welcomeText}>Bienvenido de Vuelta!</Text>
      <Text style={styles.nameText}>Ruben Rodriguez</Text>
      <View>
        <Text style={styles.pointsText}>TUS PUNTOS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    marginLeft: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    color: "#020202",
    fontFamily: "Avenir",
    fontWeight: "800",
  },
  nameText: {
    fontSize: 20,
    color: "#020202",
    fontFamily: "Avenir",
  },
  pointsText: {
    fontSize: 14,
    color: "#9B9898",
    marginTop: 6,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
});

export default Header;

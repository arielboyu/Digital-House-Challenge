import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Buttons = ({ setFilterValue, showAll }) => {
  return (
    <View>
      {showAll ? (
        <TouchableOpacity
          onPress={() => setFilterValue("off")}
          style={styles.buttonAll}
        >
          <Text style={styles.textBtn}> Todos</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => setFilterValue(false)} style={styles.textBtn}>
              Ganados
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterValue(true)}
            style={styles.button}
          >
            <Text style={styles.textBtn}> Canjeados</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#334FFA",
    width: 150,
    height: 50,
    borderRadius: 10,
    marginLeft: 24,
    paddingTop: 14,
    fontSize: 12,
    lineHeigth: 16,
    textAlign: "center",
  },
  buttonAll: {
    backgroundColor: "#334FFA",
    width: 333,
    height: 50,
    borderRadius: 10,
    paddingTop: 14,
    fontSize: 12,
    lineHeigth: 16,
    textAlign: "center",
    marginLeft: 14,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
  },
});

export default Buttons;

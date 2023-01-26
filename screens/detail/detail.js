import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import store from "../../redux/store/index";
import { getProducts } from "../../redux/actions/index";
import React, { useEffect, useState } from "react";

const Detail = ({ setShowDetail, idProd }) => {
  const products = useSelector((state) => state.products);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    store.dispatch(getProducts());
    checkProduct();
  }, []);

  const checkProduct = async () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === idProd) {
        await setDetail(products[i]);
      }
    }
  };

  const traduce = (date) => {
    var objDate = new Date(date).toLocaleString("es-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    let wordsA = objDate.split(" ").slice(0, 3).join(" ");
    let wordsB = objDate.split(" ").slice(4, 5).join(" ");
    return wordsA + ", " + wordsB;
  };

  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.textTitle}>{detail.product}</Text>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: detail.image }} />
        </View>
        <Text style={styles.textInfo}>Detalles del producto:</Text>
        <Text style={styles.textDate}>
          Comprado el {traduce(detail.createdAt)}
        </Text>
        <Text style={styles.textPrePoints}>Con esta compra acumulaste:</Text>
        <Text style={styles.textPoints}>{detail.points} puntos</Text>
        <TouchableOpacity
          onPress={() => setShowDetail(false)}
          style={styles.button}
        >
          <Text style={styles.textBtn}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailBox: {
    marginLeft: 20,
  },
  imageBox: {
    width: 310,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    backgroundColor: "#CFD6FF",
    height: 100,
    width: 410,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#334FFA",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    paddingTop: 14,
    fontSize: 12,
    lineHeigth: 16,
    marginTop: 30,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  textInfo: {
    fontSize: 14,
    lineHeigth: 19,
    color: "#9B9898",
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  textPrePoints: {
    fontSize: 14,
    lineHeigth: 19,
    color: "#9B9898",
    marginTop: 20,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  textPoints: {
    fontSize: 24,
    lineHeigth: 19,
    marginTop: 20,
    fontWeight: "bold",
  },
  textTitle: {
    fontSize: 18,
    marginTop: 60,
    marginLeft: 10,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 14,
    lineHeigth: 22,
    fontWeight: "bold",
    marginTop: 14,
  },
});

export default Detail;

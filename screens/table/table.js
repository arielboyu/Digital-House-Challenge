import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Buttons from "../buttons/buttons";
import { useSelector } from "react-redux";
import store from "../../redux/store/index";
import {
  getFilter,
  getProducts,
  updatePoints,
} from "../../redux/actions/index";

const Table = ({ setShowDetail, setIdProd }) => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    store.dispatch(getProducts());
  }, []);

  const getPoints = () => {
    let sum = 0;
    let num = [];
    let filterRedemption = products.filter(
      (item) => item.is_redemption === true
    );
    for (let i = 0; i < filterRedemption.length; i++) {
      num.push(filterRedemption[i].points);
      for (let key in num) {
        sum += num[key];
      }
    }
    store.dispatch(updatePoints(sum));
  };
  getPoints();
  const setFilterValue = async (selected) => {
    if (selected === "off") {
      store.dispatch(getProducts());
      setShowAll(false);
    } else {
      let filter = await products.filter(
        (item) => item.is_redemption === selected
      );
      store.dispatch(getFilter(filter));
      setShowAll(true);
    }
  };

  const setDetail = async (prodId) => {
    await setIdProd(prodId);
    await setShowDetail(true);
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
    <View>
      <Text style={styles.moveText}>TUS MOVIMIENTOS</Text>
      {products.map((p) => (
        <View key={p.id}>
          <View style={styles.dataBox}>
            <Image style={styles.image} source={{ uri: p.image }} />
            <View style={styles.productInfo}>
              <View style={styles.boxInfo}>
                <Text style={styles.nameText}>
                  {p.product.split(" ").slice(0, 2).join(" ")}
                </Text>
              </View>
              <Text style={styles.dateText}>{traduce(p.createdAt)}</Text>
            </View>
            <View style={styles.score}>
              {p.is_redemption ? (
                <Text style={styles.score}>
                  - <Text style={styles.down}>{p.points}</Text>
                </Text>
              ) : (
                <Text style={styles.up}>
                  + <Text style={styles.points}>{p.points}</Text>
                </Text>
              )}
            </View>
            <Text onPress={() => setDetail(p.id)} style={styles.btnDetail}>
              {">"}
            </Text>
          </View>
        </View>
      ))}

      <Buttons setFilterValue={setFilterValue} showAll={showAll} />
    </View>
  );
};
const styles = StyleSheet.create({
  score: {
    marginLeft: 60,
  },
  moveText: {
    fontSize: 14,
    color: "#9B9898",
    marginTop: 6,
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  dataBox: {
    width: 333,
    height: 55,
    marginLeft: 30,
    flexDirection: "row",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  productInfo: {
    marginLeft: 16,
  },
  boxInfo: {
    width: 144,
    height: 19,
  },
  nameText: {
    marginLeft: 2,
    fontSize: 12,
    width: 244,
    lineHeight: 19,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  dateText: {
    fontSize: 10,
    lineHeight: 16,
    color: "#000000",
    fontFamily: "Avenir",
  },
  score: {
    marginLeft: 4,
    color: "#FF0000",
    fontSize: 16,
    fontHeight: 22,
    fontWeight: "bold",
  },
  down: {
    color: "black",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
  },
  up: {
    color: "#00B833",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
  },
  btnDetail: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  points: {
    color: "black",
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Table;

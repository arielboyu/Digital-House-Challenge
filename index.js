import { View } from "react-native";
import Header from "./screens/header/header";
import Card from "./screens/card/card";
import Table from "./screens/table/table";
import Detail from "./screens/detail/detail";
import { useState } from "react";

const Index = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [idProd, setIdProd] = useState();

  return (
    <View>
      {!showDetail ? (
        <View>
          <Header />
          <Card />
          <Table setShowDetail={setShowDetail} setIdProd={setIdProd} />
        </View>
      ) : (
        <Detail setShowDetail={setShowDetail} idProd={idProd} />
      )}
    </View>
  );
};

export default Index;

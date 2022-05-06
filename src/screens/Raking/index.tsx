import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { CarbonSavedItem } from "./RankingItem";

export function Raking() {
  const carbonSavedRank = [
    {
      id: "1",
      name: "John",
      carbonSaved: 100
    },
    {
      id: "10",
      name: "John",
      carbonSaved: 100
    }
  ];
  return (
    <>
      <Header returnTo="Home" />
      <BlackTitle>Ranking de economia de CO2 100 melhores do ano</BlackTitle>
      <FlatList
        style={{ padding: 20 }}
        data={carbonSavedRank}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarbonSavedItem
            amount={item.carbonSaved}
            name={item.name}
            key={item.id}
          />
        )}
        ItemSeparatorComponent={() => <Spacer height={15} />}
      />
    </>
  );
}

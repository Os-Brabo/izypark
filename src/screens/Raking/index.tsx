import { useFocusEffect } from "@react-navigation/native";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import React, { useCallback, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { CarbonSavedItem } from "./RankingItem";

interface RankingItem {
  name: string;
  amount: number;
  id: string;
}

export function Raking() {
  const firestore = getFirestore();
  const [ranking, setRanking] = useState<RankingItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchRanking() {
        const userDataRef = collection(firestore, "usersData");
        const q = query(userDataRef);
        const result = await getDocs(q);
        const rank: RankingItem[] = [];
        result.forEach((user) => {
          const item = user.data();

          rank.push({
            id: item.id,
            amount: item.savedGaz,
            name: item.name
          });
        });
        rank.sort((a, b) => b.amount - a.amount);
        setRanking(rank);
      }
      fetchRanking();
    }, [])
  );

  return (
    <>
      <Header returnTo="Home" />
      <Spacer height={25} />
      <BlackTitle>Ranking de economia de CO2 - 100 melhores do ano</BlackTitle>
      <Spacer height={10} />
      <FlatList
        style={{ padding: 20 }}
        data={ranking}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarbonSavedItem
            amount={item.amount}
            name={item.name}
            key={item.id}
            id={item.id}
          />
        )}
        ItemSeparatorComponent={() => <Spacer height={15} />}
      />
    </>
  );
}

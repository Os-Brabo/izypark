import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Alert
} from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { CenterBoldText } from "../../components/shared/Atoms";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { useBlocks } from "../../hooks/useBlocks";
import { useInstitution } from "../../hooks/useInstitution";
import { Block } from "./Block";

interface ParkingBlock {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
}
interface Institution {
  title: string;
  parkingBlocks: ParkingBlock[];
}
export function DetailInstitutions() {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentInstitution } = useInstitution();
  const { blocks, isLoading } = useBlocks();
  const [institution, setInstitution] = useState<Institution>({});

  function handleParkingBlockPress(block: ParkingBlock) {
    setModalVisible(true);
  }

  useEffect(() => {
    if (!currentInstitution) return;
    if (!blocks) {
      setInstitution({
        title: currentInstitution.name,
        parkingBlocks: []
      });
      return;
    }

    const blocksFromated: ParkingBlock[] = blocks.map((block) => {
      return {
        id: block.id,
        name: block.name,
        vacancies: block.vacancies,
        availableNow: block.availableNow
      };
    });
    setInstitution({
      title: currentInstitution.name,
      parkingBlocks: blocksFromated
    });
  }, [isLoading]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <BlackTitle>{institution.title}</BlackTitle>
      <BlackTitle>Vagas disponíveis por bloco</BlackTitle>
      <CenterBoldText>
        Após estacionar, selecione o bloco onde parou
      </CenterBoldText>
      <Spacer height={15} />
      <FlatList
        data={institution.parkingBlocks}
        style={{
          elevation: 12,
          paddingHorizontal: 15
        }}
        ItemSeparatorComponent={() => <Spacer height={10} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Block block={item} handlePark={handleParkingBlockPress} />
        )}
      />
      <View style={{ flexBasis: "25%" }}>
        <DefaultButton label="loja da instituição" onPress={() => { }} />
        <DefaultButton label="loja da instituição" onPress={() => { }} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

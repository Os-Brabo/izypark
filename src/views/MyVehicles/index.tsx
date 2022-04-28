import React, {useState} from "react";
import { useEffect } from "react";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Vehicle } from "../../components/Vehicles/Vehicle";
import { redirectTo } from "../../utils/redirectToRoute";
import * as S from './styles'
export type VehicleData = {
  id: string
  carPlate: string
  carModel: string
  carColor: string
}

export function Vehicles() {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  useEffect(() => {
    setVehicles([
      { id: '1', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red' },
      { id: '2', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red' },
      { id: '3', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red' },
      {id: '4', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red'},
      { id: '5', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red' },
      { id: '6', carPlate: 'AAAADDD', carModel: 'Ferrari', carColor: 'red' },
      
    ])
  }, [])
  return (
    <>
      <Header />
      <BlackTitle>Meus Veículos</BlackTitle>
      <S.vehiclesList
        data={vehicles}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={ListDivider}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({item }) => (
              <Vehicle
                data={item as VehicleData}
                />
              )}
      />
      <DefaultButton
        label="Adicionar novo Veículo"
        onPress={() => { redirectTo('Vehicles.Create') }} />
    </>
  );
}
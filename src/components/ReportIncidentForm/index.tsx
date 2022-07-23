import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import {
  FieldContainer,
  FieldInput,
  FieldLabel,
  FieldSelect
} from "../shared/Form/styles";

type Props = {
  onSubmit: () => void;
};

/**
 * Reportar incidente:
 * 
 * tipo de incidente: 
*    -> Problema com outro veículo
*    -> Problema de Segurança
*    -> Chamar a Segurança
*    -> Outro

  * instituição: -> Selecionar a Instituição
 */

export function ReportIncidentForm() {
  return (
    <>
      <View>
        <FieldContainer>
          <FieldLabel>Instituição</FieldLabel>
          <FieldSelect>
            <FieldSelect.Item label="Selecionar a Instituição" value="" />
            <FieldSelect.Item label="Instituição 1" value="1" />
          </FieldSelect>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Tipo de Incidente</FieldLabel>
          <FieldSelect>
            <FieldSelect.Item label="Selecionar a Instituição" value="" />
            <FieldSelect.Item label="Instituição 1" value="1" />
          </FieldSelect>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Problema com outro veículo</FieldLabel>
          <FieldInput placeholder="Placa do veículo" />
        </FieldContainer>
      </View>
    </>
  );
}

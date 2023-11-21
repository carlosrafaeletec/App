import React from "react";
import { StyleSheet, Text } from "react-native";

const Fonte = ({ children, style }) => {

    let estilo = styles.fonteImp;

    if (style?.fontWeight === 'Bold' || style?.fontWeight === 'bold'){
        estilo = styles.fonteNegrito;
    }

    return(
        <Text style={[style, estilo]}>
            { children }
        </Text>
    )
}

export default Fonte;

const styles = StyleSheet.create({
    fonteImp:{
        fontFamily: 'ArvoRegular',
        fontWeight: 'normal',
    },
    fonteNegrito:{
        fontFamily: 'ArvoBold',
        fontWeight: 'normal',
    }
});
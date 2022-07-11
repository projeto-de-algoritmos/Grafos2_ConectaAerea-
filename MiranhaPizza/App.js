import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NativeBaseProvider, Text, Center, HStack, Box, Image } from 'native-base';
import Svg, { G, Line, Symbol, Circle} from 'react-native-svg';
import Escala from './dimensions';
import { generate_city, Gerar_grafo } from './GenerateMap';
import Images from "./imgs"

const predios = generate_city(9);
const grafo = Gerar_grafo(predios, 3)

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{height: '100%', backgroundColor:"#023047"}}>
      <Center marginTop={10} marginBottom={10}>Ajude o Miranha a entregar pizzas</Center>
        <SafeAreaView >
          <Svg height="100%" width="100%">
            <Circle cx={Escala.positionHorizontal(predios[0][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[0][1])}/>
            {grafo[0].map( (element, index) => {
              if(index == 0) return <></>
              return <Line x1={Escala.positionHorizontal(predios[0][0])} y1={Escala.positionVertical(predios[0][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="+
              0" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[1][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[1][1])}/>
            {/* {grafo[1].map( (element, index) => {
              if(index == 1) return <></>
              return <Line x1={Escala.positionHorizontal(predios[1][0])} y1={Escala.positionVertical(predios[1][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[2][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[2][1])} />
            {/* {grafo[0].map( (element, index) => {
              if(index == 2) return <></>
              return <Line x1={Escala.positionHorizontal(predios[2][0])} y1={Escala.positionVertical(predios[2][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[3][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[3][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 3) return <></>
              return <Line x1={Escala.positionHorizontal(predios[3][0])} y1={Escala.positionVertical(predios[3][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[4][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[4][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 4) return <></>
              return <Line x1={Escala.positionHorizontal(predios[4][0])} y1={Escala.positionVertical(predios[4][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[5][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[5][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 5) return <></>
              return <Line x1={Escala.positionHorizontal(predios[5][0])} y1={Escala.positionVertical(predios[5][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[6][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[6][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 6) return <></>
              return <Line x1={Escala.positionHorizontal(predios[6][0])} y1={Escala.positionVertical(predios[6][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[7][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[7][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 7) return <></>
              return <Line x1={Escala.positionHorizontal(predios[7][0])} y1={Escala.positionVertical(predios[7][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="blue" strokeWidth="2" />

            })} */}
            <Circle cx={Escala.positionHorizontal(predios[8][0])} strokeWidth="8" stroke="#023047" fill="#023047" r="15" cy={Escala.positionVertical(predios[8][1])}/>
            {/* {grafo[0].map( (element, index) => {
              if(index == 8) return <></>
              return <Line x1={Escala.positionHorizontal(predios[8][0])} y1={Escala.positionVertical(predios[8][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="white" strokeWidth="2" />
            })} */}
                    <Image position="absolute" left={Escala.positionHorizontal(predios[8][0]) - 20} top={Escala.positionVertical(predios[8][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img9
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[0][0]) - 20} top={Escala.positionVertical(predios[0][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img1
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[1][0]) - 20} top={Escala.positionVertical(predios[1][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img2
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[2][0]) - 20} top={Escala.positionVertical(predios[2][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img3
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[3][0]) - 20} top={Escala.positionVertical(predios[3][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img4
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[4][0]) - 20} top={Escala.positionVertical(predios[4][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img5
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[5][0]) - 20} top={Escala.positionVertical(predios[5][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img6
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[6][0]) - 20} top={Escala.positionVertical(predios[6][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img7
                  }} alt="Alternate Text" />
                    <Image position="absolute" left={Escala.positionHorizontal(predios[7][0]) - 20} top={Escala.positionVertical(predios[7][1]) - 20}  size={"20"} resizeMode={"contain"} borderRadius={100} source={{
                    uri: Images.img8
                  }} alt="Alternate Text" />
          </Svg>
        </SafeAreaView>
      </View>
    </NativeBaseProvider>
  );
}


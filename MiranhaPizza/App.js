import React, {useState, useRef} from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { NativeBaseProvider, Center, HStack, Box } from 'native-base';
import Svg, { G, Line, Circle} from 'react-native-svg';
import Escala from './dimensions';
import { generate_city, Gerar_grafo, Dijask } from './GenerateMap';
import Images from "./imgs"



let predios = generate_city(9);
let grafo = Gerar_grafo(predios, 120)
const resultDijask = Dijask(0, 4, grafo)

export default function App() {
  
  const [arrayCaminho, setArrayCaminho] = useState([]);
  const [bola1, setBola1] = useState({estado: false, valor: null});
  const [bola2, setBola2] = useState({estado: false, valor: null});
  const [bola3, setBola3] = useState({estado: false, valor: null});
  const [bola4, setBola4] = useState({estado: false, valor: null});
  const [bola5, setBola5] = useState({estado: false, valor: null});
  const [bola6, setBola6] = useState({estado: false, valor: null});
  const [bola7, setBola7] = useState({estado: false, valor: null});
  const [bola8, setBola8] = useState({estado: false, valor: null});
  const [bola9, setBola9] = useState({estado: false, valor: null});
  const [contador, setContador] = useState(0)
  const [resposta, setResposta] = useState(null);

  const operaContador = (aumenta) => {
    if(aumenta) setContador(contador + 1)
    else setContador(contador - 1)
  }

  const handle = (bola, setBola, num) => {
    setBola({estado: !bola.estado, valor: contador});
    if(!bola.estado) {
      operaContador(true);
      let copy = [...arrayCaminho]
      copy.push(num);
      setArrayCaminho(copy);
    }
    else {
      operaContador(false);
      let copy = [...arrayCaminho]
      copy.pop();
      setArrayCaminho(copy);
    }
  }
  console.log(arrayCaminho)

  const validaCaminho = () => {
    if(resultDijask != false) {
      console.log(resultDijask)
      let element = resultDijask[4][1];
      let index = arrayCaminho.length;
      while (element != null) {
          if(element == arrayCaminho) {
            element = resultDijask[arrayCaminho[index]][1]
            index--;
          }
          else {
            setResposta(false)
            break;
          }
      }
    }
    else {
      arrayCaminho == resultDijask
      setResposta(true)
    }

  }

  const resetar = () => {
    setBola1({estado: false, valor: null});
    setBola2({estado: false, valor: null});
    setBola3({estado: false, valor: null});
    setBola4({estado: false, valor: null});
    setBola5({estado: false, valor: null});
    setBola6({estado: false, valor: null});
    setBola7({estado: false, valor: null});
    setBola8({estado: false, valor: null});
    setBola9({estado: false, valor: null});
    setArrayCaminho([]);
    setContador(0);
    setResposta(null);
    predios = generate_city(9);
    grafo = Gerar_grafo(predios, 120) 
  }
  console.log(resposta)
  return (
    <NativeBaseProvider>
      <View style={{height: '100%', backgroundColor:"#023047"}}>
      <Center marginTop={10} marginBottom={10} color="#f4f4f4"><Text style={{fontSize: 14, color: "#f4f4f4", fontWeight: 'bold'}}>Defina o caminho da bola <Text style={{color:"#f72585"}}>Rosa</Text> para a <Text style={{color: "#06d6a0"}}>Verde</Text></Text></Center>
      <View style={{ height: 62, width: "100%"}}>
     
        <ScrollView horizontal style={{ height: "100%", width: "100%"}}>

          <TouchableOpacity onPress={() => handle(bola1, setBola1, 0)}>
            <View style={{backgroundColor: "#f72585", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center', marginLeft: 10}}>
              { bola1.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola1.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola2, setBola2, 1)}>
            <View style={{backgroundColor: "#4cc9f0", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola2.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola2.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola3, setBola3, 2)}>
            <View style={{backgroundColor: "#06d6a0", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola3.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola3.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola4, setBola4, 3)}>
            <View style={{backgroundColor: "#ffd6ff", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola4.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola4.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola5, setBola5, 4)}>
            <View style={{backgroundColor: "#f94144", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola5.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola5.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola6, setBola6, 5)}>
            <View style={{backgroundColor: "#ffee32", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola6.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola6.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola7, setBola7, 6)}>
            <View style={{backgroundColor: "#ff7d00", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola7.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola7.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handle(bola8, setBola8, 7)}>
            <View style={{backgroundColor: "#9d4edd", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola8.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola8.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>handle(bola9, setBola9, 8)}>
            <View style={{backgroundColor: "#89023e", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            { bola9.estado ? <Text style={{textAlign: 'center', fontSize: 20}}>{bola9.valor}</Text>: <></>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setArrayCaminho(false)}>
            <View style={{backgroundColor: "red", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 10, fontWeight: 'bold', color:"#f4f4f4"}}>{"sem" + "\n" +"solução"}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => validaCaminho()}>
            <View style={{backgroundColor: "#a1ff0a", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:"#333"}}>Verificar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetar()}>
            <View style={{backgroundColor: "black", height: 60, width: 60, borderRadius: 50, marginRight: 16, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:"#333"}}>Resetar</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View >
        {resposta == true ?
         <View style={{alignSelf: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color:"#f4f4f4"}}>Acertou!</Text>
         </View>: resposta == false ?
          <View>
            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color:"#f4f4f4"}}>Errou!</Text>
          </View>: <></>
       }
      </View>
          <Svg height="100%" width="100%" >
          <G x={Escala.positionHorizontal(predios[0][0])} y={Escala.positionVertical(predios[0][1])}>
              <Circle  strokeWidth="8" stroke="#f72585" fill="#f72585" r="15" />
          </G>
            {grafo[0].map( (element, index) => {
              if(index ==  0) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[0][0])} y1={Escala.positionVertical(predios[0][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#f72585" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[1][0])} strokeWidth="8" stroke="#4cc9f0" fill="#4cc9f0" r="15" cy={Escala.positionVertical(predios[1][1])}/>
            {grafo[1].map( (element, index) => {
              if(index == 1) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[1][0])} y1={Escala.positionVertical(predios[1][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#4cc9f0" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[2][0])} strokeWidth="8" stroke="#06d6a0" fill="#06d6a0" r="15" cy={Escala.positionVertical(predios[2][1])} />
            {grafo[2].map( (element, index) => {
              if(index == 2) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[2][0])} y1={Escala.positionVertical(predios[2][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#06d6a0" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[3][0])} strokeWidth="8" stroke="#ffd6ff" fill="#ffd6ff" r="15" cy={Escala.positionVertical(predios[3][1])}/>
            {grafo[3].map( (element, index) => {
              if(index == 3) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[3][0])} y1={Escala.positionVertical(predios[3][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#ffd6ff" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[4][0])} strokeWidth="8" stroke="#f94144" fill="#f94144" r="15" cy={Escala.positionVertical(predios[4][1])}/>
            {grafo[4].map( (element, index) => {
              if(index == 4) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[4][0])} y1={Escala.positionVertical(predios[4][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#f94144" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[5][0])} strokeWidth="8" stroke="#ffee32" fill="#ffee32" r="15" cy={Escala.positionVertical(predios[5][1])}/>
            {grafo[5].map( (element, index) => {
              if(index == 5) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[5][0])} y1={Escala.positionVertical(predios[5][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#ffee32" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[6][0])} strokeWidth="8" stroke="#ff7d00" fill="#ff7d00" r="15" cy={Escala.positionVertical(predios[6][1])}/>
            {grafo[6].map( (element, index) => {
              if(index == 6) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[6][0])} y1={Escala.positionVertical(predios[6][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#ff7d00" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[7][0])} strokeWidth="8" stroke="#9d4edd" fill="#9d4edd" r="15" cy={Escala.positionVertical(predios[7][1])}/>
            {grafo[7].map( (element, index) => {
              if(index == 7) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[7][0])} y1={Escala.positionVertical(predios[7][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#9d4edd" strokeWidth="2" />

            })}
            <Circle cx={Escala.positionHorizontal(predios[8][0])} strokeWidth="8" stroke="#89023e" fill="#89023e" r="15" cy={Escala.positionVertical(predios[8][1])}/>
            {grafo[8].map( (element, index) => {
              if(index == 8) return <></>
              if(element == Infinity) return <></>
              return <Line x1={Escala.positionHorizontal(predios[8][0])} y1={Escala.positionVertical(predios[8][1])} x2={Escala.positionHorizontal(predios[index][0])} y2={Escala.positionHorizontal(predios[index][1])} stroke="#89023e" strokeWidth="2" />
            })}
          </Svg>

      </View>
    </NativeBaseProvider>
  );
}


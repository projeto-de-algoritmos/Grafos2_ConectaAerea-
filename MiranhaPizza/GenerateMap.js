let tamanho_do_mapa = 100
let raio_teia = 2
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function generate_intH(max) {
    return Math.floor((Math.random() * (height - 100)));
}
function generate_intW(max) {
    return Math.floor((Math.random() * (width - 80)));
}

function calculate_distance(pos1, pos2) {
    // Cordenadas {X,Y}
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)
}

export function generate_city(square_size) {
    // Cordenadas {X,Y}
    var pos = []
    for (let i = 0; i < square_size; i++) {
        pos.push([generate_intW(square_size), generate_intH(square_size)])
    }
    return pos
}

export function Gerar_grafo(build_pos, range_cobweb) {
    const size = build_pos.length
    var graph = new Array(size)
    // Zerar matriz de adjacencia 
    for (let i = 0; i < size; i++) {
        graph[i] = [0]
        for (let k = 0; k < size - 1; k++) {
            graph[i].push(0)
        }
    }
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            if (calculate_distance(build_pos[i], build_pos[k]) < range_cobweb) {
                graph[i][k] = calculate_distance(build_pos[i], build_pos[k])
            }
        }
    }

    return graph
}
var city = generate_city(9)
console.log("Cordenadas das cidades")
console.log(city)
console.log("Distancia entre predios")
console.log(Gerar_grafo(city, 3))
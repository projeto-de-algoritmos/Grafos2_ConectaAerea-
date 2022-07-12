import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function generate_intH(max) {
    return Math.floor((Math.random() * (height - 200)));
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
        graph[i] = new Array(size)
        for (let k = 0; k < size; k++) {
            graph[i][k] = (Infinity)
        }
    }
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            if ((calculate_distance(build_pos[i], build_pos[k]) <= range_cobweb) && i != k) {
                graph[i][k] = +(calculate_distance(build_pos[i], build_pos[k])).toFixed(4)
            }
            else {
                graph[i][k] = Infinity
            }
        }
    }
    
    return graph
}

export function Dijask(initial_index, final_index, graph) {
    var priorityquery = []
    var visited = []
    var set = new Array(graph.length)
    for (let i = 0; i < graph.length; i++) {
        if (graph[initial_index][i] != Infinity)
            priorityquery.push([graph[initial_index][i], i, 0])
        set[i] = [Infinity, null]
    }
    set[initial_index] = [0, initial_index]
    visited.push(initial_index)
    priorityquery.sort((a, b) => a[0] - b[0])
    while (priorityquery.length > 0) {
        var current = priorityquery.shift()
        if (current[0] != Infinity) {
            if (set[current[1]][0] >= (current[0])) {
                set[current[1]] = [(current[0]), current[2]]
            }
            if (current[1] == final_index) {
                return set
            }
            // visited.push(current[])
            for (let i = 0; i < graph.length; i++) {
                if (graph[current[1]][i] != Infinity && !visited.includes(i) && set[i][0] >= (graph[current[1]][i])) {
                    priorityquery.push([(graph[current[1]][i] + set[current[1]][0]), i, current[1]])
                }
            }
            for (let i = 0; i < priorityquery.length; i++) {
                if (priorityquery[i][0] >= set[priorityquery[i][1]][0]) {
                    priorityquery.splice(i, 1)
                }
            }
        }
        visited.push(current[1])
        priorityquery.sort((a, b) => a[0] - b[0])
    }
    if (set[final_index][0] == Infinity) {
        return false
    }
    return set
}
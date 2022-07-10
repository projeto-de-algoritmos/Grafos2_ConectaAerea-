let tamanho_do_mapa = 100
let raio_teia = 10

function generate_int(max) {
    return Math.floor(Math.random() * (max - (max * -1) + 1)) + (max * -1);
}

function calculate_distance(pos1, pos2) {
    // Cordenadas {X,Y}
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)
}

function generate_city(square_size) {
    // Cordenadas {X,Y}
    var pos = []
    for (let i = 0; i < square_size; i++) {
        pos.push([generate_int(square_size), generate_int(square_size), i])
    }
    return pos
}

function Gerar_grafo(build_pos, range_cobweb) {
    const size = build_pos.length
    var graph = new Array(size)
    // Zerar matriz de adjacencia 
    for (let i = 0; i < size; i++) {
        graph[i] = [Infinity]
        for (let k = 0; k < size - 1; k++) {
            graph[i].push(Infinity)
        }
    }
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            if (calculate_distance(build_pos[i], build_pos[k]) <= range_cobweb && i != k) {
                graph[i][k] = +(calculate_distance(build_pos[i], build_pos[k])).toFixed(4)
            }
            else {
                graph[i][k] = Infinity
            }
        }
    }

    return graph
}

function Dijask(initial_index, final_index, graph) {
    var priorityquery = []
    var visited = []
    var set = new Array(graph.length)
    for (let i = 0; i < graph.length; i++) {
        priorityquery.push([graph[initial_index][i], i, 0])
        set[i] = [null, 0]
    }
    priorityquery.sort((a, b) => a[0] - b[0])
    while (priorityquery.length > 0 && visited.length < graph.length) {
        var current = priorityquery.shift()
        if (current[0] != Infinity) {
            if (set[current[1]][0] >= current[0]) {
                set[current[1]] = [current[0], current[2]]
                console.log(" entrou no set set ")
            }
            if (current[1] == final_index) {
                return set
            }
            // visited.push(current[])
            for (let i = 0; i < graph.length; i++) {
                if (graph[current[1]][i] != Infinity) {
                    priorityquery.push([graph[current[1]][i], i, 0])
                }
            }
            visited.push(current[1])
        }
        priorityquery.sort((a, b) => a[0] - b[0])
    }
    return set
}

city = generate_city(10)
console.log("Cordenadas das cidades")
console.table(city)
console.log("Distancia entre predios")
graph = Gerar_grafo(city, raio_teia)
console.table(Gerar_grafo(city, 10))
console.log("Dijassk")
console.table(Dijask(0, 5, graph))
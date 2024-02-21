const equipos = [
    {
        nombre: "ADT",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "ALIANZA LA FAMILIA",
        pj: 3,
        ptos: 7,
        gf: 10,
        gc: 4,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 6,
    },
    {
        nombre: "VILLAREAL",
        pj: 3,
        ptos: 6,
        gf: 8,
        gc: 4,
        pg: 2,
        pe: 0,
        pp: 1,
        dfg: 4,
    },
    {
        nombre: "AYACANCHA",
        pj: 3,
        ptos: 4,
        gf: 6,
        gc: 7,
        pg: 1,
        pe: 1,
        pp: 1,
        dfg: -1,
    },
    {
        nombre: "AYACOCHA",
        pj: 3,
        ptos: 3,
        gf: 5,
        gc: 8,
        pg: 1,
        pe: 0,
        pp: 2,
        dfg: -3,
    },
    {
        nombre: "COCHABAMBA GRANDE",
        pj: 3,
        ptos: 0,
        gf: 2,
        gc: 12,
        pg: 0,
        pe: 0,
        pp: 3,
        dfg: -10,
    },
    {
        nombre: "COLPAPAMPA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "C.U QUISHUAR",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "ESTUDIANTIL DE HPA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "HIJOS DE LLIHUAPAMPA F.C",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "LLIHUAPAMPA A",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "PROGRESISTA TINTAY",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "SANTA ROSA DE HPA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "SAN MARTIN DE VISTA ALEGRE",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "SURCUBAMBA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "SAN JOSE DE COLPA HPA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "TIGRES DE AYACOCHA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "PUEBLO LIBRE",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "SANTA MARIA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
    {
        nombre: "DEFENSOR DE HPA",
        pj: 3,
        ptos: 7,
        gf: 11,
        gc: 3,
        pg: 2,
        pe: 1,
        pp: 0,
        dfg: 8,
    },
];

function actualizarTabla() {
    // Ordenar equipos por puntos de mayor a menor
    equipos.sort((a, b) => b.ptos - a.ptos);

    // En caso de empate, desempatar por DFG
    equipos.forEach((equipo, index) => {
        if (equipo.ptos === equipos[index - 1]?.ptos) {
            if (equipo.dfg > equipos[index - 1].dfg) {
                [equipos[index], equipos[index - 1]] = [equipos[index - 1], equipos[index]];
            }
        }
    });

    // Generar HTML de la tabla
    const tablaHtml = `
        <table>
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>Pts</th>
                    
                    <th>VICTORIA</th>
                    
                    <th>DERROTA</th>
                    
                </tr>
            </thead>
            <tbody>
                ${equipos.map((equipo, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${equipo.nombre}</td>
                        <td>${equipo.pj}</td>
                        <td>${equipo.ptos}</td>
                        
                        <td>${equipo.pg}</td>
                        
                        <td>${equipo.pp}</td>
                        
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;

    // Mostrar la tabla en el contenedor
    document.getElementById("tabla-posiciones").innerHTML = tablaHtml;
}

// Actualizar la tabla al cargar la página
actualizarTabla();

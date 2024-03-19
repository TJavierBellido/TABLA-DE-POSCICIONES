const equipos = [
    {
        nombre: "ADT",
        pj: 3,
        ptos: 16,
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
        ptos:12,
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
        ptos: 20,
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
                    <th>GF</th>
                    <th>GC</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>DFG</th>
                </tr>
            </thead>
            <tbody>
                ${equipos.map((equipo, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${equipo.nombre}</td>
                        <td>${equipo.pj}</td>
                        <td>${equipo.ptos}</td>
                        <td>${equipo.gf}</td>
                        <td>${equipo.gc}</td>
                        <td>${equipo.pg}</td>
                        <td>${equipo.pe}</td>
                        <td>${equipo.pp}</td>
                        <td>${equipo.dfg}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;

    // Mostrar la tabla en el contenedor
    document.getElementById("tabla-posiciones").innerHTML = tablaHtml;
}
actualizarTabla(equipos);

// Actualizar la tabla al cargar la página
// Función para actualizar el podio
function actualizarPodium(equipos) {
    // Obtener los 3 primeros equipos
    const podio = equipos.slice(0, 3);
  
    // Generar la estructura HTML del podio
    let podioHTML = `
      <div class="podio">
        <div class="escalon segundo-lugar">
          <h2>2º</h2>
          <div class="equipo">
            <h3>${podio[1].nombre}</h3>
            <p>Puntos: ${podio[1].ptos}</p>
          </div>
        </div>`;
  
    podioHTML += `
        <div class="escalon primer-lugar">
          <h2>1º</h2>
          <div class="equipo">
            <h3>${podio[0].nombre}</h3>
            <p>Puntos: ${podio[0].ptos}</p>
          </div>
        </div>`;
  
    podioHTML += `
        <div class="escalon tercer-lugar">
          <h2>3º</h2>
          <div class="equipo">
            <h3>${podio[2].nombre}</h3>
            <p>Puntos: ${podio[2].ptos}</p>
          </div>
        </div>
      </div>`;
  
    
const divPodio = document.querySelector('.podio');
divPodio.innerHTML = podioHTML;
}

// Actualizar el podio al cargar la página
actualizarPodium(equipos);

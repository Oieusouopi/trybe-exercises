let local = document.getElementById("estados")
let arrayDeEstados = ["Acre(AC)","Alagoas(AL)","Amapá(AP)","Amazonas(AM)","Bahia(BA)","Ceará(CE)","Espírito Santo(ES)","Goiás(GO)","Maranhão(MA)","Mato Grosso(MT)","Mato Grosso do Sul(MS)","Minas Gerais(MG)","Pará(PA)","Paraíba(PB)","Paraná(PR)","Pernambuco(PE)","Piauí(PI)","Rio de Janeiro(RJ)","Rio Grande do Norte(RN)","Rio Grande do Sul(RS)","Rondônia(RO)","Roraima(RR)","Santa Catarina(SC)","São Paulo(SP)","Sergipe(SE)","Tocantins(TO)","Distrito Federal(DF)"];
function criandoEstados(){
for (let numeroEstados = 0; numeroEstados<arrayDeEstados.length ; numeroEstados+=1){
    let CriarOption = document.createElement("option")
    local.appendChild(CriarOption).innerText = arrayDeEstados[numeroEstados];
    local.appendChild(CriarOption).value = arrayDeEstados[numeroEstados];
}
}
criandoEstados();

let 
//vetores de objeto

const Cafe = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"Cafe_comum", nome: "Café comum", preco: 1.00 },
 { id:"descafeinado", nome: "Café descafeinado", preco: 1.50 },
 { id:"Cafeina_adicionada", nome: "Café com cafeína adicionada", preco: 2.00 },
 { id:"Cafe_leite", nome: "Café com leite", preco: 2.50 },
 { id:"Cafe_expresso", nome: "Café expresso", preco: 4.50 },
 { id:"Cafe_instantaneo", nome: "Café instantaneo", preco: 1.00 },
 { id:"Cafe_gourmet", nome:"Café gourmet", preco: 5.00 },
 { id:"Capuccino", nome:"Capuccino", preco: 8.00 },
  { id:"Mocha", nome:"Mocha", preco: 8.50 }
];

const Chas = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"Cha_preto", nome:"Chá preto", preco: 2.00 },
 { id:"Cha_verde", nome:"Chá verde", preco: 2.00 },
 { id:"Cha_branco", nome:"Chá branco", preco: 3.00 },
 { id:"Cha_oolong", nome:"Chá oolong", preco: 4.99 },
 { id:"Cha_matcha", nome:"Chá matcha", preco: 8.25 }
];

const temperatura = [
 { id:"nenhum", nome:"nenhum", preco: 0 },  
 { id:"Quente", nome:"Quente", preco: 0 },
 { id:"Morno", nome:"Morno", preco: 0 },
 { id:"Gelado", nome:"Gelado", preco: 0 }
];

const temperatura_cha = [
 { id:"nenhum", nome:"nenhum", preco: 0 },   
 { id:"Quente", nome:"Quente", preco: 0 },
 { id:"Morno", nome:"Morno", preco: 0 },
 { id:"Gelado", nome:"Gelado", preco: 0 }
];

const Copos_cafe = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"copo_50ml", nome: "Copo 50 ml", preco: 1.99 },
 { id:"copo_100ml", nome: "Copo 100ml ", preco: 2.50 },
 { id:"copo_200ml", nome: "Copo 200ml", preco: 3.50 },
 { id:"copo_300ml", nome: "Copo 300ml", preco: 4.25  },
 { id:"copo_440", nome: "Copo 440ml", preco: 4.50 },
 { id:"copo_500ml", nome: "Copo 500ml", preco: 6.00 }
];

const Xicaras_cafe = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"xicara_100ml", nome: " Xícara 100ml", preco: 5.00 },
 { id:"xicara_180ml", nome: "Xícara 180ml", preco: 8.00 },
 { id:"xicara_200ml", nome: "Xícara 200ml", preco: 10.00 },
 { id:"xicara_250ml", nome: "Xícara 250ml", preco: 13.00 },
 { id:"xicara_325ml", nome: "Xícara 325ml", preco: 16.00 }
];

const Chocolate_cafe = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 1.50 },
 { id:"Chocolate_branco", nome:"Chocolate branco", preco: 1.25 },
 { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 1.50 },
 { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 3.50 }
];

const acucar_cafe= [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"acucar_cristal", nome: "açúcar cristal", preco: 1.00 },
 { id:"acucar_demera", nome: "açúcar demera", preco: 1.00 },
 { id:"acucar_mascavo", nome: "açúcar mascavo", preco: 1.50 }
];

const caldas_cafe=[
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"calda_caramelo", nome: "calda de caramelo", preco: 1.00 },
 { id:"calda_chocolate", nome: "calda de chocolate", preco: 2.00 },
 { id:"calda_morango", nome: "calda de morango", preco: 1.00 },
 { id:"calda_pistache", nome: "calda de pistache", preco: 2.50 }
];

const leites_cafe=[
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"leite_integral", nome: "leite integral", preco: 1.00 },
 { id:"leite_desnatado", nome: "leite desnatado", preco: 1.00 },
 { id:"leite__amendoas", nome: "leite de amendoas", preco: 2.00 }
];

const Copos_cha = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"copo_50ml", nome: "Copo 50 ml", preco: 1.99 },
 { id:"copo_100ml", nome: "Copo 100ml ", preco: 2.50 },
 { id:"copo_200ml", nome: "Copo 200ml", preco: 3.50 },
 { id:"copo_300ml", nome: "Copo 300ml", preco: 4.25  },
 { id:"copo_440", nome: "Copo 440ml", preco: 4.50 },
 { id:"copo_500ml", nome: "Copo 500ml", preco: 6.00 }
];

const Xicaras_cha = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"xicara_100ml", nome: " Xícara 100ml", preco: 5.00 },
 { id:"xicara_180ml", nome: "Xícara 180ml", preco: 8.00 },
 { id:"xicara_200ml", nome: "Xícara 200ml", preco: 10.00 },
 { id:"xicara_250ml", nome: "Xícara 250ml", preco: 13.00 },
 { id:"xicara_325ml", nome: "Xícara 325ml", preco: 16.00 }
];

const Chocolate_cha = [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 1.50 },
 { id:"Chocolate_branco", nome:"Chocolate branco", preco: 1.25 },
 { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 1.50 },
 { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 3.50 }
];

const acucar_cha= [
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"acucar_cristal", nome: "açúcar cristal", preco: 1.00 },
 { id:"acucar_demera", nome: "açúcar demera", preco: 1.00 },
 { id:"acucar_mascavo", nome: "açúcar mascavo", preco: 1.50 }
]; 

const caldas_cha=[
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"calda_caramelo", nome: "calda de caramelo", preco: 1.00 },
 { id:"calda_chocolate", nome: "calda de chocolate", preco: 2.00 },
 { id:"calda_morango", nome: "calda de morango", preco: 1.00 },
 { id:"calda_pistache", nome: "calda de pistache", preco: 2.50 }
];

const leites_cha=[
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"leite_integral", nome: "leite integral", preco: 1.00 },
 { id:"leite_desnatado", nome: "leite desnatado", preco: 1.00 },
 { id:"leite__amendoas", nome: "leite de amendoas", preco: 2.00 }
];

const donuts_S=[
 { id:"Nenhum", nome:"Nenhum", preco: 0 },
 { id:"donut_americano", nome:"Donut Americano", preco: 28.00},
 { id:"donut_dog", nome:"Donut Cat Hot", preco: 22.00},
 { id:"donut_dog2", nome:"Donut Cat Hot duplo", preco: 26.00},
 { id:"donut_burguer", nome:"Donut Cat burguer", preco: 28.00},
 { id:"donut_frances", nome:"Donut Francês", preco: 29.00},
 { id:"donut_margherita", nome:"Donut Margherita", preco: 26.00 },
 { id:"donut_tropical", nome:"Donut Tropical Chicken", preco: 27.00 }
];

const donuts_D=[
 {id:"nenhum", nome:"nenhum", preco:0},
 {id:"donut_homer", nome:"Donut Homer Simpsons", preco: 18.00},
 {id:"donut_snickers", nome:"Donut Snickers", preco: 20.00},
 {id:"donut_creme_de_avela", nome:"Donut Creme de avelã", preco:25.00},
 {id:"donut_cheesecake", nome:"Donut Cheesecake de frutas vermelhas", preco:25.00},
 {id:"donut_kinder", nome:"Donut Kinder bueno", preco: 28.00},
 {id:"donut_redvelvet", nome:"Donut Red velvet", preco:20.00},
 {id:"donut_rafaello", nome:"Donut Rafaello", preco:25.00},
 {id:"donut_tonn", nome:"Donut Tonn fraise", preco:25.00},
 {id:"donut_pistache", nome:"Donut de pistache", preco:25.00},
 {id:"donut_canela", nome:"Donut Açúcar e canela", preco:15.00}
];

// Lista principal do carrinho de compras
let carrinho = [];


function preencherOpcoes(){
 //funções pra aparecer por trás 
 const selectCafe = document.getElementById("Cafe");
 for (let i = 0; i < Cafe.length; i++){
      const item = Cafe[i];
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.nome;
      selectCafe.appendChild(option);
  }

  const selectChas = document.getElementById("Chas");
  for (let i = 0; i < Chas.length; i++){
      const item = Chas[i];
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.nome;
      selectChas.appendChild(option);
  }

//adicionais do cafe
  
 const selectCopos_cafe = document.getElementById("Copos_cafe");
 for (let i = 0; i < Copos_cafe.length; i++){
  const item = Copos_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCopos_cafe.appendChild(option);
 }

 const selectXicaras_cafe = document.getElementById("Xicaras_cafe");
 for (let i = 0; i < Xicaras_cafe.length; i++){
  const item = Xicaras_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectXicaras_cafe.appendChild(option);
 }
 
 const selectChocolate_cafe = document.getElementById("Chocolate_cafe");
 for (let i = 0; i < Chocolate_cafe.length; i++){
  const item = Chocolate_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChocolate_cafe.appendChild(option);
 }

  const selectacucar_cafe = document.getElementById("acucar_cafe");
 for (let i = 0; i < acucar_cafe.length; i++){
  const item = acucar_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectacucar_cafe.appendChild(option);
 }

  const selectcaldas_cafe = document.getElementById("caldas_cafe");
 for (let i = 0; i < caldas_cafe.length; i++){
  const item = caldas_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectcaldas_cafe.appendChild(option);
 }
  
  const selectleites_cafe = document.getElementById("leites_cafe");
 for (let i = 0; i < leites_cafe.length; i++){
  const item = leites_cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectleites_cafe.appendChild(option);
 }

//adicionais do cha
 
 const selectCopos_cha = document.getElementById("Copos_cha");
 for (let i = 0; i < Copos_cha.length; i++){
  const item = Copos_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCopos_cha.appendChild(option);
 }

 const selectXicaras_cha = document.getElementById("Xicaras_cha");
 for (let i = 0; i < Xicaras_cha.length; i++){
  const item = Xicaras_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectXicaras_cha.appendChild(option);
 }
 
 const selectChocolate_cha = document.getElementById("Chocolate_cha");
 for (let i = 0; i < Chocolate_cha.length; i++){
  const item = Chocolate_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChocolate_cha.appendChild(option);
 }

  const selectacucar_cha = document.getElementById("acucar_cha");
 for (let i = 0; i < acucar_cha.length; i++){
  const item = acucar_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectacucar_cha.appendChild(option);
 }
 
  const selectcaldas_cha = document.getElementById("caldas_cha");
 for (let i = 0; i < caldas_cha.length; i++){
  const item = caldas_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectcaldas_cha.appendChild(option);
 }
  
  const selectleites_cha = document.getElementById("leites_cha");
 for (let i = 0; i < leites_cha.length; i++){
  const item = leites_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectleites_cha.appendChild(option);
 }

 const selectdonuts_S = document.getElementById("donuts_S");
 for (let i = 0; i < donuts_S.length; i++){
  const item = donuts_S[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectdonuts_S.appendChild(option);
 }

 const selectdonuts_D = document.getElementById("donuts_D");
 for (let i = 0; i < donuts_D.length; i++){
  const item = donuts_D[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectdonuts_D.appendChild(option);
 }

 const selecttemperatura_cha = document.getElementById("temperatura_cha");
 for (let i = 0; i < temperatura_cha.length; i++){
  const item = temperatura_cha[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura_cha.appendChild(option);
 }

 const selecttemperatura = document.getElementById("temperatura");
 for (let i = 0; i < temperatura.length; i++){
  const item = temperatura[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura.appendChild(option);
 }
}

//procurar por id
function procurarPorId(lista, idProcurado) {
  for (let i = 0; i < lista.length; i++) {
      if (lista[i].id == idProcurado){
         return lista[i]; }
  }
  return null; 
}

preencherOpcoes();

// Funções do Carrinho
//-------------------------------------------------------------

// Função para adicionar itens (usada pelos Combos)
function adicionarAoCarrinho(nome, detalhes, preco) {
    preco = parseFloat(preco);

   // Verifica se já existe o item no carrinho (para combos)
    let item = carrinho.find(i => i.nome === nome);

    if (item) {
        item.qtd++;
        item.subtotal = item.qtd * item.preco;
    } else {
        carrinho.push({
        nome: nome,
        detalhes: detalhes,
        preco: preco,
        qtd: 1,
        subtotal: preco});
}

    atualizarCarrinho();
}

// NOVO: Função para adicionar o Pedido Personalizado

function adicionarPersonalizadoAoCarrinho() {
    // === PEGANDO TODOS OS VALORES SELECIONADOS ===
    const CafeId           = document.getElementById("Cafe").value;
    const ChasId           = document.getElementById("Chas").value;
    const temperaturaCafe  = document.getElementById("temperatura").value;
    const temperaturaCha   = document.getElementById("temperatura_cha").value;

    const CoposCafeId      = document.getElementById("Copos_cafe").value;
    const XicarasCafeId    = document.getElementById("Xicaras_cafe").value;
    const ChocolateCafeId  = document.getElementById("Chocolate_cafe").value;
    const AcucarCafeId     = document.getElementById("acucar_cafe").value;
    const CaldaCafeId      = document.getElementById("caldas_cafe").value;
    const LeiteCafeId      = document.getElementById("leites_cafe").value;

    const CoposChaId       = document.getElementById("Copos_cha").value;
    const XicarasChaId     = document.getElementById("Xicaras_cha").value;
    const ChocolateChaId   = document.getElementById("Chocolate_cha").value;
    const AcucarChaId      = document.getElementById("acucar_cha").value;
    const CaldaChaId       = document.getElementById("caldas_cha").value;
    const LeiteChaId       = document.getElementById("leites_cha").value;

    const DonutSalgadoId   = document.getElementById("donuts_S").value;
    const DonutDoceId      = document.getElementById("donuts_D").value;

    // === BUSCANDO OS OBJETOS CORRESPONDENTES ===
    const cafe          = procurarPorId(Cafe, CafeId);
    const cha           = procurarPorId(Chas, ChasId);
    const copoCafe      = procurarPorId(Copos_cafe, CoposCafeId);
    const xicaraCafe    = procurarPorId(Xicaras_cafe, XicarasCafeId);
    const chocolateCafe = procurarPorId(Chocolate_cafe, ChocolateCafeId);
    const acucarCafe    = procurarPorId(acucar_cafe, AcucarCafeId);
    const caldaCafe     = procurarPorId(caldas_cafe, CaldaCafeId);
    const leiteCafe     = procurarPorId(leites_cafe, LeiteCafeId);

    const copoCha       = procurarPorId(Copos_cha, CoposChaId);
    const xicaraCha     = procurarPorId(Xicaras_cha, XicarasChaId);
    const chocolateCha = procurarPorId(Chocolate_cha, ChocolateChaId);
    const acucarCha     = procurarPorId(acucar_cha, AcucarChaId);
    const caldaCha      = procurarPorId(caldas_cha, CaldaChaId);
    const leiteCha      = procurarPorId(leites_cha, LeiteChaId);

    const donutSalgado  = procurarPorId(donuts_S, DonutSalgadoId);
    const donutDoce     = procurarPorId(donuts_D, DonutDoceId);

    const tempCafe      = temperaturaCafe !== "Nenhum" ? temperaturaCafe : "";
    const tempCha       = temperaturaCha !== "Nenhum" ? temperaturaCha : "";

    // === MONTANDO DETALHES SOMENTE COM ITENS SELECIONADOS ===
    let partes = [];
    let precoTotal = 0;

    // Bebida principal
    if (cafe && cafe.id !== "Nenhum") {
        partes.push(`Café: ${cafe.nome}${tempCafe ? " (" + tempCafe + ")" : ""}`);
        precoTotal += cafe.preco;
    }
    if (cha && cha.id !== "Nenhum") {
        partes.push(`Chá: ${cha.nome}${tempCha ? " (" + tempCha + ")" : ""}`);
        precoTotal += cha.preco;
    }

    // Donuts
    if (donutSalgado && donutSalgado.id !== "Nenhum") {
        partes.push(`Salgado: ${donutSalgado.nome}`);
        precoTotal += donutSalgado.preco;
    }
    if (donutDoce && donutDoce.id !== "nenhum") {
        partes.push(`Doce: ${donutDoce.nome}`);
        precoTotal += donutDoce.preco;
    }

    // Adicionais (só adiciona se não for "Nenhum")
    let adicionais = [];
    if (copoCafe && copoCafe.id !== "Nenhum") { adicionais.push(copoCafe.nome); precoTotal += copoCafe.preco; }
    if (xicaraCafe && xicaraCafe.id !== "Nenhum") { adicionais.push(xicaraCafe.nome); precoTotal += xicaraCafe.preco; }
    if (chocolateCafe && chocolateCafe.id !== "Nenhum") { adicionais.push(chocolateCafe.nome); precoTotal += chocolateCafe.preco; }
    if (acucarCafe && acucarCafe.id !== "Nenhum") { adicionais.push(acucarCafe.nome); precoTotal += acucarCafe.preco; }
    if (caldaCafe && caldaCafe.id !== "Nenhum") { adicionais.push(caldaCafe.nome); precoTotal += caldaCafe.preco; }
    if (leiteCafe && leiteCafe.id !== "Nenhum") { adicionais.push(leiteCafe.nome); precoTotal += leiteCafe.preco; }

    if (copoCha && copoCha.id !== "Nenhum") { adicionais.push(copoCha.nome); precoTotal += copoCha.preco; }
    if (xicaraCha && xicaraCha.id !== "Nenhum") { adicionais.push(xicaraCha.nome); precoTotal += xicaraCha.preco; }
    if (chocolateCha && chocolateCha.id !== "Nenhum") { adicionais.push(chocolateCha.nome); precoTotal += chocolateCha.preco; }
    if (acucarCha && acucarCha.id !== "Nenhum") { adicionais.push(acucarCha.nome); precoTotal += acucarCha.preco; }
    if (caldaCha && caldaCha.id !== "Nenhum") { adicionais.push(caldaCha.nome); precoTotal += caldaCha.preco; }
    if (leiteCha && leiteCha.id !== "Nenhum") { adicionais.push(leiteCha.nome); precoTotal += leiteCha.preco; }

    if (adicionais.length > 0) {
        partes.push("Adicionais: " + adicionais.join(", "));
    }

    // Se não escolheu nada → avisa
    if (precoTotal === 0) {
        alert("Selecione pelo menos um item para adicionar ao carrinho!");
        return;
    }

    // Detalhes finais (separados por | apenas se tiver mais de um)
    const detalhesFinais = partes.join(" | ");

    // Adiciona ao carrinho
    carrinho.push({
        nome: "Pedido Personalizado",
        detalhes: detalhesFinais,
        preco: precoTotal,
        qtd: 1,
        subtotal: precoTotal
    });

    atualizarCarrinho();

    // Opcional: limpar os selects depois de adicionar
    document.querySelectorAll("select").forEach(s => s.selectedIndex = 0);
}

{

    // Monta os detalhes para exibição no carrinho
    let detalhes = [];
    if (Cafe1.nome) detalhes.push(`Café: ${Cafe1.nome} (${temperatura_cafe.nome})`);
    if (Chas1.nome) detalhes.push(`Chá: ${Chas1.nome} (${temperatura_cha_2.nome})`);
    if (donuts_S1.nome) detalhes.push(`Salgado: ${donuts_S1.nome}`);
    if (donuts_D1.nome) detalhes.push(`Doce: ${donuts_D1.nome}`);
    
 // Adicionais
    let adicionais = [];
    if (Copos1.nome) adicionais.push(Copos1.nome);
    if (Xicaras1.nome) adicionais.push(Xicaras1.nome);
    if (Chocolate1.nome) adicionais.push(Chocolate1.nome);
    if (acucar1.nome) adicionais.push(acucar1.nome);
    if (caldas1.nome) adicionais.push(caldas1.nome);
    if (leites1.nome) adicionais.push(leites1.nome);
    if (Copos2.nome) adicionais.push(Copos2.nome);
    if (Xicaras2.nome) adicionais.push(Xicaras2.nome);
    if (Chocolate2.nome) adicionais.push(Chocolate2.nome);
    if (acucar2.nome) adicionais.push(acucar2.nome);
    if (caldas2.nome) adicionais.push(caldas2.nome);
    if (leites2.nome) adicionais.push(leites2.nome);

    if (adicionais.length > 0) {
       detalhes.push(`Adicionais: ${adicionais.join(', ')}`);
    }
    
    const novoItem = {
        nome: "Pedido Personalizado",
        detalhes: detalhes.join(' | '),
        preco: precoTotal,
        qtd: 1,
        subtotal: precoTotal
    };

    carrinho.push(novoItem);
    atualizarCarrinho();
}

// Atualiza o Carrinho na tabela
function atualizarCarrinho() {
    let corpo = document.getElementById("corpoCarrinho");
    let total = 0;

    corpo.innerHTML = "";

    carrinho.forEach((item, index) => {
        total += item.subtotal;

        corpo.innerHTML += `
            <tr>
                <td>${item.nome}</td>
                <td>${item.detalhes}</td>
                <td>
                    <button class="btn-qtd" onclick="alterarQtd(${index}, -1)">-</button>
                    ${item.qtd}
                <button class="btn-qtd" onclick="alterarQtd(${index}, 1)">+</button>
                </td>
                <td>R$ ${item.subtotal.toFixed(2)}</td>
                <td><button class="btn-remover" onclick="removerItem(${index})">Remover</button></td>
            </tr>
       `;
    });

    document.getElementById("totalCarrinho").textContent = total.toFixed(2);
}

// Muda quantidade
function alterarQtd(index, valor) {
    carrinho[index].qtd += valor;

    if (carrinho[index].qtd <= 0) {
        carrinho.splice(index, 1);
    } else {
        carrinho[index].subtotal = carrinho[index].qtd * carrinho[index].preco;
    }

    atualizarCarrinho();
}

// Remover item
function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Limpar carrinho (limpa tudo: combos e personalizados)
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

// Geração do Relatório/Pedido Final
//-------------------------------------------------------------

function gerarRelatorio() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio! Adicione itens antes de finalizar o pedido.");
        return;
    }

    const nome = document.getElementById("nome").value.trim() || "Cliente";
    const observacoes = document.getElementById("observacoes").value.trim();

    // Forma de pagamento
    let forma_pagamento = "Não informado";
    const formas = document.getElementsByName("forma_pagamento");
    for (let i = 0; i < formas.length; i++) {
        if (formas[i].checked) {
            forma_pagamento = formas[i].value;
            break;
        }
    }

    let totalGeral = 0;
    let itensHTML = "";

    carrinho.forEach(item => {
        totalGeral += item.subtotal;

        // Se for combo, mostra nome + detalhes
        // Se for personalizado, já vem bem formatado
        itensHTML += `
            <div class="item-pedido">
                <div class="nome-qtd">
                    <strong>${item.nome}</strong> × ${item.qtd}
                </div>
                <div class="detalhes">${item.detalhes}</div>
                <div class="preco-direita">R$ ${item.subtotal.toFixed(2)}</div>
            </div>
        `;
    });

    const dataAtual = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const relatorioHTML = `
        <div class="comprovante">
            <div class="cabecalho-comprovante">
                <h1> Cat Café</h1>
                <p>✿ Av. Alecrim Dourado do Campo, 280<br>Foz do Iguaçu - PR | (45) 7325-8983</p>
                <hr>
                <p class="data-pedido">Data do pedido: ${dataAtual}</p>
            </div>

            <div class="info-cliente">
                <h3> • Dados do Cliente</h3>
                <p><strong>Cliente:</strong> ${nome}</p>
                ${forma_pagamento !== "Não informado" ? `<p><strong>Pagamento:</strong> ${forma_pagamento}</p>` : ""}
                ${observacoes ? `<p><strong>Observações:</strong> ${observacoes}</p>` : ""}
            </div>

            <div class="itens-comprovante">
                <h3> • Itens do Pedido</h3>
                ${itensHTML}
                <div class="total-final">
                <br>
                    <strong>Total a pagar:</strong>
                    <span class="valor-total">R$ ${totalGeral.toFixed(2)}</span>
                </div>
            </div>

            <div class="rodape-comprovante">
                <p>Obrigado pela preferência! <br>
                Volte sempre ao Cat Café! </p>
            </div>
        </div>
    `;

    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
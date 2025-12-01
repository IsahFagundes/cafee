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
  { id:"Quente", nome:"Quente", preco: 0 },
  { id:"Morno", nome:"Morno", preco: 0 },
  { id:"Gelado", nome:"Gelado", preco: 0 }
];

const temperatura_cha = [
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
          return lista[i]; 
      }
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
            subtotal: preco
        });
    }

    atualizarCarrinho();
}

// NOVO: Função para adicionar o Pedido Personalizado
function adicionarPersonalizadoAoCarrinho() {
    const CafeId = document.getElementById("Cafe").value;
    const ChasId = document.getElementById("Chas").value;
    const temperaturaId = document.getElementById("temperatura").value; 
    const temperatura_cha_Id = document.getElementById("temperatura_cha").value;

    const Copos_cafeId     = document.getElementById("Copos_cafe").value;
    const Xicaras_cafeId   = document.getElementById("Xicaras_cafe").value;
    const Chocolate_cafeId = document.getElementById("Chocolate_cafe").value;
    const acucar_cafeId    = document.getElementById("acucar_cafe").value;
    const caldas_cafeId    = document.getElementById("caldas_cafe").value;
    const leites_cafeId    = document.getElementById("leites_cafe").value;

    const Copos_chaId      = document.getElementById("Copos_cha").value;
    const Xicaras_chaId    = document.getElementById("Xicaras_cha").value;
    const Chocolate_chaId  = document.getElementById("Chocolate_cha").value;
    const acucar_chaId     = document.getElementById("acucar_cha").value;
    const caldas_chaId     = document.getElementById("caldas_cha").value;
    const leites_chaId     = document.getElementById("leites_cha").value;

    const donuts_S_Id = document.getElementById("donuts_S").value;
    const donuts_D_Id = document.getElementById("donuts_D").value;

    const Cafe1          = procurarPorId(Cafe, CafeId) || { nome: "", preco: 0 };
    const Chas1          = procurarPorId(Chas, ChasId) || { nome: "", preco: 0 };
    const Copos1         = procurarPorId(Copos_cafe, Copos_cafeId) || { nome: "", preco: 0 };
    const Xicaras1       = procurarPorId(Xicaras_cafe, Xicaras_cafeId) || { nome: "", preco: 0 };
    const Chocolate1     = procurarPorId(Chocolate_cafe, Chocolate_cafeId) || { nome: "", preco: 0 };
    const acucar1        = procurarPorId(acucar_cafe, acucar_cafeId) || { nome: "", preco: 0 };
    const caldas1        = procurarPorId(caldas_cafe, caldas_cafeId) || { nome: "", preco: 0 };
    const leites1        = procurarPorId(leites_cafe, leites_cafeId) || { nome: "", preco: 0 };

    const Copos2         = procurarPorId(Copos_cha, Copos_chaId) || { nome: "", preco: 0 };
    const Xicaras2       = procurarPorId(Xicaras_cha, Xicaras_chaId) || { nome: "", preco: 0 };
    const Chocolate2     = procurarPorId(Chocolate_cha, Chocolate_chaId) || { nome: "", preco: 0 };
    const acucar2        = procurarPorId(acucar_cha, acucar_chaId) || { nome: "", preco: 0 };
    const caldas2        = procurarPorId(caldas_cha, caldas_chaId) || { nome: "", preco: 0 };
    const leites2        = procurarPorId(leites_cha, leites_chaId) || { nome: "", preco: 0 };

    const donuts_S1      = procurarPorId(donuts_S, donuts_S_Id) || { nome: "", preco: 0 };
    const donuts_D1      = procurarPorId(donuts_D, donuts_D_Id) || { nome: "", preco: 0 };
    const temperatura_cafe = procurarPorId(temperatura, temperaturaId) || { nome: "", preco: 0 };
    const temperatura_cha_2 = procurarPorId(temperatura_cha, temperatura_cha_Id) || { nome: "", preco: 0 };

    // Calcula o preço total do pedido personalizado
    const precoTotal = 
        Cafe1.preco + Chas1.preco + 
        Copos1.preco + Xicaras1.preco + Chocolate1.preco + acucar1.preco + caldas1.preco + leites1.preco +
        Copos2.preco + Xicaras2.preco + Chocolate2.preco + acucar2.preco + caldas2.preco + leites2.preco +
        donuts_S1.preco + donuts_D1.preco;

    if (precoTotal === 0) {
        alert("Selecione pelo menos um item (Café, Chá ou Donut) para adicionar ao carrinho.");
        return;
    }

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

    const nome = document.getElementById("nome").value || "Cliente";
    const observacoes = document.getElementById("observacoes").value.trim();

    // Arrumando a forma de pagamento
    let forma_pagamentoId = "Nenhuma forma de pagamento selecionada";
    const formasPagamento = document.getElementsByName("forma_pagamento");
    for (let i = 0; i < formasPagamento.length; i++) {
        if (formasPagamento[i].checked) {
            forma_pagamentoId = formasPagamento[i].value;
            break;
        }
    }

    const observacaoFinal = observacoes == "" ? "Nenhuma observação" : observacoes;
    let totalGeral = 0;
    let itensRelatorioHTML = "";
    
    // Monta a lista de itens do relatório a partir do array carrinho
    carrinho.forEach(item => {
        totalGeral += item.subtotal;
        itensRelatorioHTML += `
            <li>
                <strong>${item.nome} (x${item.qtd}):</strong> ${item.detalhes} - R$ ${item.subtotal.toFixed(2)}
            </li>
        `;
    });


    // Relatório final (agora focado no array carrinho)
    const relatorioHTML = `
        <h2>📜 Pedido Final</h2>
        <p><strong>Nome do cliente:</strong> ${nome}</p>
        
        <h3>Itens do Pedido:</h3>
        <ul>
            ${itensRelatorioHTML}
        </ul>
        
        <br>
        <p><strong>Observações:</strong> ${observacaoFinal}</p>
        <p><strong>Forma de pagamento:</strong> ${forma_pagamentoId}</p>
        <h3><strong>Total a Pagar: R$ ${totalGeral.toFixed(2)}</strong></h3>
    `;

    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
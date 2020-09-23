let dados = {
	nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
	logradouro: "Av. Projetada Leste",
	numero: 500,
	complemento: "EUC F32/33/34",
	bairro: "Br. Sta Genebra",
	municipio: "Campinas",
	estado: "SP",
	cep: "13080-395",
	telefone: "(19) 3756-7408",
	observacao: "Loja 1317 (PDP)",
	cnpj: "42.591.651/0797-34",
	inscricao_estadual: "244.898.500.113",
};

function isEmpty(str: string) {
	return ["", null].includes(str);
}

function dados_loja() {
	// Implemente aqui
	if (dados.nome_loja == "") {
		throw new Error(`O campo nome da loja é obrigatório`);
	}

	if (!dados.logradouro) {
		throw new Error(`O campo logradouro do endereço é obrigatório`);
	}

	if (!dados.municipio) {
		throw new Error(`O campo município do endereço é obrigatório`);
	}
	if (!dados.estado) {
		throw new Error(`O campo estado do endereço é obrigatório`);
	}
	if (!dados.cnpj) {
		throw new Error(`O campo CNPJ da loja é obrigatório`);
	}
	if (!dados.inscricao_estadual) {
		throw new Error(`O campo inscrição estadual da loja é obrigatório`);
	}

	let numeroStr: string = dados.numero <= 0 ? "s/n" : dados.numero.toString();

	let ln2: string = `${dados.logradouro}, ${numeroStr}`;
	ln2 += isEmpty(dados.complemento) ? "" : ` ${dados.complemento}`;
	ln2 += "\n";

	let ln3 = isEmpty(dados.bairro) ? "" : `${dados.bairro} - `;
	ln3 += `${dados.municipio} - ${dados.estado}\n`;

	let ln4 = isEmpty(dados.cep) ? "" : `CEP:${dados.cep}`;
	if (!isEmpty(dados.telefone)) {
		ln4 += isEmpty(ln4) ? "" : " ";
		ln4 += `Tel ${dados.telefone}`;
	}
	ln4 += isEmpty(ln4) ? "" : "\n";

	let ln5 = isEmpty(dados.observacao) ? "" : `${dados.observacao}`;
	ln5 += "\n";

	let output = dados.nome_loja + "\n";
	output += `${ln2}`;
	output += `${ln3}`;
	output += `${ln4}`;
	output += `${ln5}`;
	output += `CNPJ: ${dados.cnpj}\n`;
	output += `IE: ${dados.inscricao_estadual}\n`;

	return output;
}

module.exports = {
	dados: dados,
	dados_loja: dados_loja,
};

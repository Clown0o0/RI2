function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function() { return this.ddd; };
    this.setDdd = function(valor) { this.ddd = valor; };
    this.getNumero = function() { return this.numero; };
    this.setNumero = function(valor) { this.numero = valor; };
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function() { return this.estado; };
    this.setEstado = function(valor) { this.estado = valor; };
    this.getCidade = function() { return this.cidade; };
    this.setCidade = function(valor) { this.cidade = valor; };
    this.getRua = function() { return this.rua; };
    this.setRua = function(valor) { this.rua = valor; };
    this.getNumero = function() { return this.numero; };
    this.setNumero = function(valor) { this.numero = valor; };
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function() { return this.nome; };
    this.setNome = function(valor) { this.nome = valor; };
    this.getTelefoneCelular = function() { return this.telefoneCelular; };
    this.setTelefoneCelular = function(valor) { this.telefoneCelular = valor; };
    this.getEmail = function() { return this.email; };
    this.setEmail = function(valor) { this.email = valor; };
    this.getEndereco = function() { return this.endereco; };
    this.setEndereco = function(valor) { this.endereco = valor; };

    this.descricao = function() {
        return "Informações do Cliente:\n" +
               this.nome + "\n" +
               "-----------\n" +
               "Telefone:\n" +
               "DDD: " + this.telefoneCelular.getDdd() + "\n" +
               "Número: " + this.telefoneCelular.getNumero() + "\n" +
               "-----------\n" +
               "E-mail: " + this.email + "\n" +
               "-----------\n" +
               "Endereço:\n" +
               "Rua: " + this.endereco.getRua() + "\n" +
               "Número: " + this.endereco.getNumero() + "\n" +
               "Cidade: " + this.endereco.getCidade() + "\n" +
               "Estado: " + this.endereco.getEstado() + "\n" +
               "-----------";
    };
}

function ordenarClientesPorNome(listaDeClientes) {
    return listaDeClientes.slice().sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

let tel1 = new TelefoneCelular("11", "999999999");
let end1 = new Endereco("SP", "São Paulo", "Av. Paulista", "789");
let cliente1 = new Cliente("Vinicius Silva Lopez", tel1, "vicinius.slv@app.com", end1);

let tel2 = new TelefoneCelular("21", "988888888");
let end2 = new Endereco("RJ", "Rio de Janeiro", "Av. Atlântica", "123");
let cliente2 = new Cliente("Vinicius Konochi Gregoriano", tel2, "vnc.grego@email.com", end2);

let tel3 = new TelefoneCelular("12", "987654321");
let end3 = new Endereco("MG", "Belo Horizonte", "Av. Afonso Pena", "345");
let cliente3 = new Cliente("Isabelo Marinho Prancheta", tel3, "isabelo.submarino@provedor.com", end3);

let clientes = [cliente1, cliente2, cliente3];

console.log("\n=== LISTA===\n");

clientes.forEach(function(c, i) {
    console.log("Cliente " + (i+1) + ":");
    console.log(c.descricao());
    console.log("");
});

console.log("Total de clientes: " + clientes.length);

console.log("\n=== LISTA ORDENADA===\n");

let clientesOrdenados = ordenarClientesPorNome(clientes);

clientesOrdenados.forEach(function(c, i) {
    console.log("Cliente " + (i+1) + ":");
    console.log(c.descricao());
    console.log("");
});

console.log("Total de clientes: " + clientesOrdenados.length);
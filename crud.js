class Pessoa {
    constructor(nome, snome, cidade, endereco, pais, email){
        this.nome = nome;
        this.snome = snome;
        this.cidade = cidade;
        this.endereco = endereco;
        this.pais = pais;
        this.email = email;
    }
}

function Salvar () {
    
    let nome = document.getElementById("nome").value;
    let snome = document.getElementById("snome").value;
    let cidade = document.getElementById("cidade").value;
    let endereco = document.getElementById("endereco").value;
    let pais = document.getElementById("pais").value;
    let email = document.getElementById("email").value;

    const p1 = new Pessoa (nome, snome, cidade, endereco, pais, email);
    
    return document.getElementById("info").innerText = (JSON.stringify(p1));

}

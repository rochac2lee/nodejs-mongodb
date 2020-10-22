var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/mongoDB';

MongoClient.connect(servidor, function(erro, db) {
    if (erro)
        console.log(erro);
    else
        console.log("Conectado!");

    /* Insere apenas um registro
    
    var estudante = {
        nome: "Cleberli",
        curso: "Tads19",
        amigos: ["Lucas Galdino", "Bruna Letícia"]
    };

    var colecao = db.collection("alunos");

    colecao.insertOne(estudante, function(erro, resultado) {
        if (erro)
        console.log("Erro ao inserir documento: " + erro);
    else
        console.log("Documento inserido com sucesso!");

    });
    
    
    */

    var alunos = [
        { nome: "Cleberli", curso: "Tads19", amigos: ["Lucas Galdino", "Bruna Letícia"] },
        { nome: "Yan", curso: "Tads20", amigos: ["Cleberli", "Hideki"] },
        { nome: "Galdino", curso: "Tads19", amigos: ["Cleberli", "Yan"] }
    ];

    var colecao = db.collection("alunos");

    colecao.insertMany(alunos, function(erro, resultado) {
        if (erro)
        console.log("Erro ao inserir documento: " + erro);
    else
        console.log("Foram inseridos " + resultado.insertedCount + " alunos!");

    });

    db.close();
});
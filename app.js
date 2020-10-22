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

    /* Insere vários registros de uma vez

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

    */

    /* Atualiza um documento
    
    var estudante = {
        nome: "Cleberli da Rocha",
        curso: "Tads19",
        amigos: ["Lucas Galdino", "Yan Ricardo Mendes"]
    };

    var colecao = db.collection("alunos");

    var filtro = { nome: 'Cleberli'}; 

    colecao.updateOne(filtro, estudante, function(erro, resultado) {
    if (erro)
        console.log("Erro ao atualizar documento: " + erro);
    else
        console.log("Documento atualizado com sucesso!");

    });
    
    */

    var colecao = db.collection("alunos");

    var alteracao = { $set : { matriculado : true } };

    var filtro = { };

    colecao.updateMany(filtro, alteracao, function(erro, resultado) {
    if (erro)
        console.log("Erro ao atualizar documentos: " + erro);
    else
        console.log("Documentos atualizados com sucesso!");

    });
    


    db.close();
});
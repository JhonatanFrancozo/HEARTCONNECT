var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = MD5('${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', MD5('${senha}'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quiz(idusuario, pontuacao, erro, acerto) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz():", idusuario, pontuacao, erro, acerto);
    
    var instrucaoSql = `
        INSERT INTO pontuacaorank (idusuario, pontuacao, erros, acertos) 
        VALUES ('${idusuario}', '${pontuacao}', '${erro}', '${acerto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankgeral() {
    var instrucaoSql = `
    SELECT 
        u.nome, 
        (
            SELECT pr.pontuacao 
            FROM pontuacaorank pr
            WHERE pr.idusuario = u.id 
            ORDER BY pr.idpontuacao DESC LIMIT 1
        ) AS ultima_pontuacao
    FROM 
        usuario u
    ORDER BY 
        ultima_pontuacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function puxarerroacerto() {
    var instrucaoSql = `
    SELECT pr.idusuario, pr.pontuacao, pr.erros, pr.acertos
    FROM pontuacaorank pr
    INNER JOIN (
        SELECT idusuario, MAX(idpontuacao) AS max_id
        FROM pontuacaorank
        GROUP BY idusuario
    ) sub ON pr.idusuario = sub.idusuario AND pr.idpontuacao = sub.max_id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrar,
    quiz,
    rankgeral,
    puxarerroacerto
};
const db = require('../db')


async function consultaEvento() {
    const conn = await db.connect()
    const [row] = await conn.query('Select * from evento;')
    return row
}

async function consultaAluno(id) {
    const conn = await db.connect()
    const sql = 'select * from alunos;'
    const [row] = await conn.query(sql, value)
    return row
}

async function consultaCertificado() {
    const conn = await db.connect()
    const [row] = await conn.query('Select * from certificado;')
    return row
}

async function updateEvento (id, situacao){
    const conn = await db.connect ()
    const sql = 'UPDATE evento SET situacao = ?  where id = ?'
    const values = [situacao, id]
    await conn.query (sql, values)
    return 'evento atualizado com sucesso'
}

async function deleteEvento (id){
    const conn = await db.connect ()
    const sql = 'DELETE FROM evento where id = ?'
    await conn.query (sql, id)
    return 'Evento excluido com sucesso'
}

async  function insertCertificado(aluno, evento){
    const conn = await db.connect ()
    const sql = 'INSERT INTO certificado (id_aluno, id_evento) values (?,?)'
    const values = [aluno.id_aluno, evento.id_evento]
    await conn.query (sql, values)
    return 'Inserido com Sucesso!'
}

module.exports = {consultaEvento, consultaAluno, consultaCertificado, updateEvento, deleteEvento, insertCertificado}
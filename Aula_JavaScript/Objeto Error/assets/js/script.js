//Objeto error
//new Error(message, filename, lineNumber);
// todos parametros são opcionais 
const MeuErro = new Error('Mensagem Invalida');
//throw MeuErro;
//renomendado
MeuErro.name = 'InvalidMessage';
throw MeuErro;
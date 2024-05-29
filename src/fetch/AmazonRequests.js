class AmazonRequests {
    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarAmazon = '/vendas';
    }

    async listarAmazon () {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListarAmazon}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos animais no formato json a quem chamou a função
            return await response.json();
        }catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
        }
    }
}
export default new AmazonRequests;
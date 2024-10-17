/**
 * Classe que representa um Pedido de venda de um carro.
 */

import { DatabaseModel } from "./DatabaseModel";
const database =  new DatabaseModel().pool;

export class PedidoVenda {

    /* Atributos */
    /* Identificador do pedido */
    private idPedido: number = 0;
    /* identificador do carro */
    private idCarro: number;
    /* Identificador do cliente */
    private idCliente: number;
    /* Data do pedido do carro */
    private dataPedido: Date;
    /* Valor do pedido do carro */
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVenda
     * 
     * @param  idCarro Identificador do carro
     * @param idCliente Identificador do cliente
     * @param dataPedido Data do pedido do carro
     * @param valorPedido Valor do carro pedido 
     */

    constructor(
    
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido: number
    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /**
     * Recupera o identificador do pedido
     * @returns o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do pedido
     * @param idPedido novo identificado do pedido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do carro
     * @returns o identificador do carro
     */
    public getIdCarro(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do pedido
     * @param idPedido novo identificado do pedido
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do cliente
     * @param idCliente novo identificado do cliente
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna a data de pedido do carro.
     *
     * @returns {string} A data de pedido do carro.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data de pedido do carro.
     * 
     * @param dataPedido - A data de pedido do carro a ser definida.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor do carro pedido.
     *
     * @returns {string} O valor do carro pedido.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do carro pedido.
     *
     * @param valorPedido - O valor do carro pedido.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }

    //METODO PARA ACESSAR O BANCO DE DADOS
    //CRUD CREAT - READ - UPDATE - DELETE
    
    /**
    * Método estático responsável por listar todos os pedidos de venda do banco de dados.
    * Este método faz uma consulta no banco de dados, cria objetos `PedidoVenda` para 
    * cada linha retornada e os adiciona a uma lista, que é retornada ao final.
    * 
    * @returns {Promise<Array<PedidoVenda> | null>} Retorna uma lista de objetos `PedidoVenda` 
    * em caso de sucesso, ou `null` em caso de erro.
    */
    static async listarPedidoVenda(): Promise<Array<PedidoVenda> | null>{
        //criando lista vazia para armazenar as pessoas
        let listaDePedidoVenda: Array<PedidoVenda> = [];
        
        try {
            //QUERY PARA CONSULTA NO BANCO DE DADOS
            const querySelectPedidoVenda = `SELECT * FROM pedido_venda;`;

            //EXECUTA A QUERY NO BANCO DE DADOS
            const respostaBD = await database.query(querySelectPedidoVenda);
            
            //PERCORRE CADA RESULTADO RETORNADO PELO BANCO DE DADOS
            //CARRO É O APELIDO QUE DEMOS PARA CADA LINHA RETPRNADO DO BANCO DE DADOS
            
            respostaBD.rows.forEach((pedido_venda)  => {
                //CRIANDO OBJETO PEDIDO VENDA
                let novaPedidoVenda = new PedidoVenda(
                    pedido_venda.id_carro,
                    pedido_venda.id_cliente,
                    pedido_venda.data_pedido,
                    pedido_venda.valor_pedido
                );
                // adicionando o ID ao objeto
                novaPedidoVenda.setIdPedido(pedido_venda.id_pedido);
                
                //adicionando o carro na lista
                listaDePedidoVenda.push(novaPedidoVenda);
            });
            // Retorna a lista de pedidos de venda
            return listaDePedidoVenda;

        } catch (error) {
            // Loga o erro no console e retorna null em caso de falha
            console.log(`Erro ao acessar o modelo : ${error}`);
            return null;
        }
    }
}



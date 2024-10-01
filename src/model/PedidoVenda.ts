/**
 * Classe que representa um carro.
 */
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
        return this.idCarro;
    }

    /**
     * Atribui um valor ao identificador do carro
     * @param idCarro novo identificado do carro
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
}
import { Request, Response } from "express";
import { PedidoVenda } from "../model/PedidoVenda";

/**
 * Classe Controller para gerenciar as requisições relacionadas ao objeto PedidoVenda.
 * Esta classe herda da classe PedidoVenda e contém métodos responsáveis por lidar
 * com requisições HTTP.
 */
class PedidoVendaController extends PedidoVenda{
    
     /**
     * Método estático responsável por listar todos os pedidos de venda.
     * Este método faz uma chamada assíncrona ao método `listarPedidoVenda` da classe PedidoVenda,
     * retornando uma lista de pedidos de venda no formato JSON.
     *
     * @param {Request} req - O objeto da requisição HTTP.
     * @param {Response} res - O objeto da resposta HTTP.
     * 
     * @returns {Promise<void>} Retorna uma promessa que envia a lista de pedidos de venda
     * ao cliente em caso de sucesso, ou uma mensagem de erro em caso de falha.
     */
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método herdado para listar todos os pedidos de venda
            const listaDePedidoVenda =  await PedidoVenda.listarPedidoVenda();

            // Responde com o status 200 e a lista de pedidos de venda em formato JSON
            res.status(200).json(listaDePedidoVenda)
        } catch (error) {
            // Exibe erro no console e responde com status 400 e uma mensagem de erro
            console.log(`Erro ao acessar método herdado ${error}`);
            res.status(400).json("Erro ao recuperar as informações de pedidos venda");
        }
    }
}

export default PedidoVendaController;
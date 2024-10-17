import { Request, Response } from "express";
import { Cliente } from "../model/Cliente";

/**
 * Classe Controller para gerenciar as requisições relacionadas ao objeto Cliente.
 * Esta classe herda da classe Cliente e contém métodos responsáveis por lidar
 * com requisições HTTP.
 */
class ClienteController extends Cliente{

      /**
     * Método estático responsável por listar todos os clientes.
     * Este método faz uma chamada assíncrona ao método `listarCliente` da classe Cliente,
     * retornando uma lista de clientes no formato JSON.
     *
     * @param {Request} req - O objeto da requisição HTTP.
     * @param {Response} res - O objeto da resposta HTTP.
     * 
     * @returns {Promise<void>} Retorna uma promessa que envia a lista de clientes
     * ao cliente em caso de sucesso, ou uma mensagem de erro em caso de falha.
     */
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método herdado de listar todos os clientes
            const listaDeClientes =  await Cliente.listarCliente();

            // Responde com o status 200 e a lista de clientes em formato JSON
            res.status(200).json(listaDeClientes)
        } catch (error) {
             // Exibe erro no console e responde com status 400 e uma mensagem de erro
            console.log(`Erro ao acessar método herdado ${error}`);
            res.status(400).json("Erro ao recuperaras informações de clientes");
        }
    }
}

export default ClienteController;
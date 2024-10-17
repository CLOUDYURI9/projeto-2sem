import { Request, Response } from "express";
import { Carro } from "../model/Carro";

/**
 * Classe Controller para gerenciar as requisições relacionadas ao objeto Carro.
 * Esta classe herda da classe Carro e contém métodos responsáveis por lidar
 * com requisições HTTP.
 */
class CarroController extends Carro{

    /**
     * Método estático responsável por listar todos os carros.
     * Este método faz uma chamada assíncrona ao método `listarCarro` da classe Carro,
     * retornando uma lista de carros no formato JSON.
     *
     * @param {Request} req - O objeto da requisição HTTP.
     * @param {Response} res - O objeto da resposta HTTP.
     * 
     * @returns {Promise<void>} Retorna uma promessa que envia a lista de carros
     * ao cliente em caso de sucesso, ou uma mensagem de erro em caso de falha.
     */
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método herdado de listar todos os carros
            const listaDeCarros =  await Carro.listarCarro();
            // Responde com o status 200 e a lista de carros em formato JSON
            res.status(200).json(listaDeCarros)
        } catch (error) {
            console.log(`Erro ao acessar método herdado ${error}`);
             // Exibe erro no console e responde com status 400 e uma mensagem de erro
            res.status(400).json("Erro ao recuperaras informações de carros");
        }
    }
}

export default CarroController;
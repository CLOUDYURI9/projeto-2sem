import { Request, Response, Router} from "express";
import CarroController from "./controller/CarroController";
import ClienteController from "./controller/ClienteController";
import PedidoVendaController from "./controller/PedidoVendaController";

//Cria um roteador

const router = Router();



//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response ) => {
    res.json({ mensagem: "Olá, mundo"});
});

// Rota para listar carros
router.get("/lista/carros", CarroController.todos);
// Rota para adicionar um carro
router.post("/novo/carro", CarroController.novo);
// Rota para remover um carro
router.delete("/delete/carro/:idCarro", CarroController.remover);
// Rota para atualizar um carro
router.put("/atualizar/carro/:idCarro", CarroController.atualizar);


// Rota para listar clientes 
router.get("/cliente", ClienteController.todos);
// Rota para acionar um cliente
router.post("/novo/cliente", ClienteController.novo);
// Rota pra remover um cliente
router.delete("/delete/cliente/:idCliente", ClienteController.remover);
// Rota para atualizar um cliente
router.put("/atualizar/cliente/:idCliente", ClienteController.atualizar);

//Rota para listar os pedidos de venda
router.get("/PedidoVenda", PedidoVendaController.todos);
// Rota para adicionar um pedido de venda
router.post("/novo/pedido", PedidoVendaController.novo);
// Rota para remover um pedido de venda
router.delete("/delete/pedido/:idPedido", PedidoVendaController.remover);
// Rota para atualizar um pedido de venda
router.put("/atualizar/pedido/:idPedido", PedidoVendaController.atualizar);




//exportando as rotas
export { router };
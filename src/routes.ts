import { Request, Response, Router} from "express";
import CarroController from "./controller/CarroController";
import ClienteController from "./controller/ClienteController";
import PedidoVenda from  "./controller/PedidoVendaController";
import PedidoVendaController from "./controller/PedidoVendaController";

//Cria um roteador

const router = Router();



//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response ) => {
    res.json({ mensagem: "Olá, mundo"});
});

router.get("/carro", CarroController.todos);



router.get("/cliente", ClienteController.todos);



router.get("/PedidoVenda", PedidoVendaController.todos);

//exportando as rotas
export { router };
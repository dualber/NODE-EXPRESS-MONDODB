import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
    constructor(){
        const queryString =`mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?appName=adopcion`; //direccion de base de datos en mongo
        this.client = new MongoClient(queryString); //crea un instancia de direccion a la ba se de datos llamada cliente 
        this.conectarDB();  //conecta a la base de datos
    }

    async conectarDB(){ //funcion asincrona que conecta a la base de datos
        try{
            await this.client.connect();
            this.db = this.client.db('adopcion');
            console.log('conectado al servidor de base de datos');
        } catch (e){
            console.log(e);
        }
    }
}

export default new dbClient;
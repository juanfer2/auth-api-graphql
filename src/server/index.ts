import app from "../app";
import http from 'http';
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression';
import cors from 'cors';
import schema from '../graphql/schemas_map'
import { context } from "../graphql/context_config";

export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.connect()
      .then(async () => {
        // application logger setup
        //app.use(morgan(LOG_FORMAT, { stream }));
        // Graphql
        app.use(compression());
        const serverApollo = new ApolloServer({
          schema,
          context
        })

        // without this, apollo will throw an error.
        await serverApollo.start();
        
        // CORS configuration
        const corsOptions: cors.CorsOptions = {
          credentials: true,
          origin: "*"
        };

        serverApollo.applyMiddleware({ 
          app, 
          cors: corsOptions,
          path: '/graphql',
        })
        
        app.use(cors());
        
        const serverConnection = http.createServer(app);
        //startConnectionSocket(serverConnection);
        
        app.get('/', async (req: any, res: any) => {
          res.send({status: "ok"})
        })

        serverConnection.listen(this.port, callback);
      })
      .catch((err) => console.error(err));
  }

  private async connect() {
    return true
    //return await createConnection();
  }
}

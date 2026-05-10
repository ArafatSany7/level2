import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routeHanlder } from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url); '/' , "/user","/products
    // console.log(req.method); "GET" ,"POST" , "DELETE"
    routeHanlder(req, res);
  },
);

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

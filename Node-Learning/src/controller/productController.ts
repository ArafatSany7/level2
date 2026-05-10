import type { IncomingMessage, ServerResponse } from "http";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "Sany",
      },
      {
        id: 2,
        name: "Sany2",
      },
    ];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrive successfully ",
        data: products,
      }),
    );
  }
};

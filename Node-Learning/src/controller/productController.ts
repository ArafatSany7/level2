import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readproduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  // console.log("Request", req);
  const url = req.url;
  const method = req.method;
  // products => /products/1/ =>["","products",'1']

  const urlPart = url?.split("/");
  // console.log(urlPart);

  const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;

  // console.log("This is id : " + id);

  // GET ALL PRODUCT , ALL PRODUCT  KE NIYECHI
  if (url === "/products" && method === "GET") {
    /* const products = [
      {
        id: 1,
        name: "Sany",
      },
      {
        id: 2,
        name: "Sany2",
      },
    ];*/
    const products = readproduct(); //Array Ashbe
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrive successfully ",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    //get single product
    const products = readproduct();
    const product = products.find((p: IProduct) => p.id === id);
    // console.log(product);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product not found! ",
          data: product,
        }),
      );
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrive successfully ",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    // Created product by post method
    const body = await parseBody(req);
    // console.log("Body", body);
    const products = readproduct();
    const newProduct = {
      id: Date.now(),
      ...body,
    };
    // console.log(newProduct);
    products.push(newProduct);
    // console.log(products);
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrive successfully ",
        data: newProduct,
      }),
    );
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const products = readproduct();
    const index = products.findIndex((p: IProduct) => p.id === id);
    console.log(index);
    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product not found! ",
          data: null,
        }),
      );
    }

    // console.log(products[index]);
    products[index] = { id: products[index].id, ...body };
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Updated ",
        data: products[index],
      }),
    );
  } else if (method === "DELETE" && id !== null) {
    const products = readproduct();
    const index = products.findIndex((p: IProduct) => p.id === id);
    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product not found! ",
          data: null,
        }),
      );
    }

    // const arr = ["1", "2", "3", "4"];
    // arr.splice(2, 1);
    // console.log(arr);

    products.splice(index, 1);
    // console.log(products);
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Deleted ",
        data: null,
      }),
    );
  }
};

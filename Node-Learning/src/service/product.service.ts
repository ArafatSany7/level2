import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/dataBase/db.json");

export const readproduct = () => {
  // console.log(process.cwd());
  //console.log(filePath);
  const products = fs.readFileSync(filePath, "utf-8");
  // console.log(products.toString());
  //console.log(products);
  // console.log(JSON.parse(products));
  return JSON.parse(products);
};

export const insertProduct = (payload: any) => {
  console.log(JSON.stringify(payload));
  fs.writeFileSync(filePath, JSON.stringify(payload));
};

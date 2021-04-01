import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/categories", (req, res) => {
  res.send(data.categories);
});

app.get("/api/shop/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  let arr = [];
  for (let product of data.products) {
    if (product.categoryName.toLowerCase() === categoryName.toLowerCase()) {
      arr.push(product);
    }
  }
  if (arr.length != 0) {
    res.send(arr);
  } else {
    res.status(404).send("Products Not Found!");
  }
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id == req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Product Not Found!");
  }
});

app.get("/api/search/:word", (req, res) => {
  const word = req.params.word;
  const product = data.products.filter(
    (product) => product.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
  );
  if (product.length != 0) {
    res.send(product);
  } else {
    res.status(404).send([
      {
        message: "Product Not Found!",
      },
    ]);
  }
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

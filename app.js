const express = require("express");
const [productsRouter, productManager] = require(`./src/routes/productsRouter`);
const [cartsRouter, cartManager] = require(`./src/routes/cartsRouter`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const execute = async () => {
  try {
    await productManager.initialize();
    await cartManager.initialize();
    app.listen(8080, () => {
      console.log("Servidor listo");
    });
  } catch (err) {
    console.error(err);
  }
};

execute();

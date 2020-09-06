module.exports = {
  getAllProducts: (req, res, next) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then((inventory) => res.status(200).send(inventory))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Everything will beeze alright 😉",
        });

        console.log(err);
      });
  },

  createProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.create_product([name, price, img]).then((inventory) => {
      res.status(200).send(inventory);
    });
  },
  //TODO make the last end points in index and controller.js
  // editProducts: (req, res, next) => {},
  // deleteProducts: (req, res, next) => {},
};

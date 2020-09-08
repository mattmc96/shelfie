/** @format */

module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db');

    db.get_inventory()
      .then(inventory => res.status(200).send(inventory))
      .catch(err => {
        res.status(200).send(inventory);
      });
  },

  createProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;

    db.create_product([name, price, img]).then(inventory => {
      res.status(200).send(inventory);
    });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product(id).then(() => {
      res.sendStatus(200);
    });
  },
  editProduct: (req, res) => {
    const { id } = req.params;
    const { name, price, img } = req.body;
    const db = req.app.get('db');

    db.edit_product([id, name, price, img]).then(inventory => {
      res.status(200).send(inventory);
    });
  },
};

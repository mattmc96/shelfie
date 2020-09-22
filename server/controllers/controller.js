/** @format */

module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db');

    db.get_products()
      .then(products => res.status(200).send(products))
      .catch(err => console.log('Dont worry bud try again later 0'));
  },

  createProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;

    db.create_product(name, price, img)
      .then(products => {
        res.status(200).send();
      })
      .catch(err => console.log('Dont worry bud try again later 1'));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log('Dont worry bud try again later 2'));
  },
  editProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;
    const { id } = req.params;

    db.edit_product(id, name, price, img)
      .then(() => {
        res.status(200).send();
      })
      .catch(err => console.log('Dont worry bud try again later 3'));
  },
  getOne: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_one_product(id)
      .then(product => {
        product = product[0];
        res.status(200).send(product);
      })
      .catch(err => console.log('Dont worry bud try again later 4'));
  }
};

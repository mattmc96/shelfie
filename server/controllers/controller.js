/** @format */

module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db');

    db.get_products()
      .then(products => res.status(200).send(products))
      .catch(err => console.log('Dont worry bud try again later😔'));
  },

  createProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;

    db.create_product(name, price, img)
      .then(products => {
        res.sendStatus(200);
      })
      .catch(err => console.log('Dont worry bud try again later😔'));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log('Dont worry bud try again later😔'));
  },
  editProduct: (req, res) => {
    const { id } = req.params;
    const { name, price, img } = req.body;
    const db = req.app.get('db');

    db.edit_product(id, name, price, img)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log('Dont worry bud try again later😔'));
  },
  getOne: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_one_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => console.log('Dont worry bud try again later😔'));
  },
};

const { Cart, User, Product } = require('../database/db');
const getPrductsCart = async (req, res) => {
  const { id } = req.user;
  if (id) {
    try {
      const productsCart = await Cart.findAll({
        include: [
          {
            model: Product,
            include: [{ model: User, attributes: ['id', 'name', 'userImg'] }],
          },
        ],
        where: { UserId: id },
      });
      res.json({ data: productsCart });
    } catch (err) {
      res.status(400).json({
        msg: 'something went wrong',
        err,
      });
    }
  } else {
    res.json({ msg: 'you have to sign up' });
  }
};
const addProductToCart = async (req, res) => {
  const { ProductId } = req.body;
  const UserId = req.user.id;
  try {
    const newProduct = await Cart.create({ ProductId, UserId, count: 1 });
    res.json({ msg: 'add the product to cart succuss !!', data: newProduct });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
};
const destroyOneProductInCart = async (req, res) => {
  try {
    await Cart.destroy({
      where: { ProductId: req.params.id, UserId: req.user.id },
    });
    res.json({ msg: 'deleted this product is succuss!' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
};
const destroyAllProductsInCart = async (req, res) => {
  try {
    const { id } = req.body;
    await Cart.destroy({
      where: { UserId: id },
    });
    res.json({ msg: 'deleted this product is succuss!' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
};
const buyProducts = async (req, res) => {
  try {
    const { total } = req.body;
    const userCount = await User.findOne({ where: { id: 1 } });
    let userMony = userCount.mony;
    if (userMony < total) {
      res.json({
        msg: `You only have ${userCount.mony} in your account,and you need ${total} to complete the deal`,
      });
    } else {
      let arrMsg = [];

      const products = await Cart.findAll({ where: { UserId: req.user.id } });
      for (let i = 0; i < products.length; i++) {
        const prct = await Product.findOne({ where: { id: products[i].id } });
        if (prct.count < products[i].count) {
          arrMsg.push({
            msg: `The quantity of ${prct.name} is only ${products[i].count}, do you want this quantity?`,
          });
        } else {
          userMony = userMony - prct.count * prct.price;
          await User.update({ mony: userMony }, { where: { id: req.user.id } });
          if (prct.count === products[i].count) {
            await Product.destroy({
              where: { id: prct.id },
            });
          } else {
            await Product.update(
              {
                count: prct.count - products[i].count,
              },
              { where: { id: prct.id } }
            );
          }

          arrMsg.push({
            msg: `The  ${prct.name} has been successfully purchased`,
          });
        }
      }
      res.json(arrMsg);
    }
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
};
module.exports = {
  addProductToCart,
  getPrductsCart,
  destroyOneProductInCart,
  destroyAllProductsInCart,
  buyProducts,
};

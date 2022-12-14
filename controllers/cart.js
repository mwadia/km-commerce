const { Cart, User, Product, Notification } = require('../database/db');
const getPrductsCart = async (req, res) => {
  if (req.user) {
    const { id } = req.user;

    try {
      const productsCart = await Cart.findAll({
        include: [
          {
            model: Product,
            include: [{ model: User, attributes: ['id', 'name', 'userImg'] }],
          },
        ],
        where: { UserId: id },
        order: [['id', 'ASC']],
      });
      res.json({ data: productsCart });
    } catch (err) {
      res.status(400).json({
        msg: 'something went wrong!',
        err,
      });
    }
  } else {
    res.json({ msg: 'you have to sign up!' });
  }
};
const addProductToCart = async (req, res) => {
  const { ProductId } = req.body;
  const UserId = req.user.id;
  try {
    const newProduct = await Cart.create({ ProductId, UserId, count: 1 });
    res.json({ msg: 'product added to cart successfully', data: newProduct });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
};
const destroyOneProductInCart = async (req, res) => {
  try {
    await Cart.destroy({
      where: { ProductId: req.params.id, UserId: req.user.id },
    });
    res.json({ msg: 'product removed successfully' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
};
const destroyOneProductInCartByProductId = async (req, res) => {
  try {
    await Cart.destroy({
      where: { ProductId: req.params.id },
    });
    console.log(111);
    res.json({ msg: 'product removed successfully' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
};
const destroyAllProductsInCart = async (req, res) => {
  try {
    const { id } = req.user;

    await Cart.destroy({
      where: { UserId: id },
    });
    res.json({ msg: 'products removed successfully' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
};
const buyProducts = async (req, res) => {
  try {
    const { total } = req.body;
    const userCount = await User.findOne({ where: { id: req.user.id } });
    let userMony = userCount.mony;
    if (userMony < total) {
      res.json({
        msg: `You only have ${userCount.mony} in your account,and you need ${total} to complete the deal`,
      });
    } else {
      let arrMsg = [];

      const products = await Cart.findAll({ where: { UserId: req.user.id } });
      for (let i = 0; i < products.length; i++) {
        const prct = await Product.findOne({
          where: { id: products[i].ProductId },
        });
        if (prct.count < products[i].count) {
          arrMsg.push({
            msg: `The quantity of ${prct.name} is only ${products[i].count}, do you want this product?`,
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

          const reseverUser = await User.findOne({
            where: { id: prct.UserId },
          });
          await User.update(
            { mony: reseverUser.mony + prct.price * products[i].count },
            { where: { id: prct.UserId } }
          );
          await Notification.create({
            UserId: prct.UserId,
            massage: `${products[i].count} of the ${prct.name} have been sold,${
              prct.price * products[i].count
            } has been added to your balance
          `,
          });
          await Cart.destroy({
            where: { id: products[i].id },
          });
          arrMsg.push({
            msg: `The  ${prct.name} has been successfully purchased`,
          });
        }
      }
      res.json(arrMsg);
    }
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
};
const putCountProduct = async (req, res) => {
  try {
    await Cart.update(
      {
        count: req.body.newCount,
      },
      { where: { id: req.params.id } }
    );
    res.json({ msg: 'succuss!' });
  } catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
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
  putCountProduct,
  destroyOneProductInCartByProductId,
};

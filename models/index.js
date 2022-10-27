//DECLARATIONS: models----------------------------
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//MODEL RELATIONS --------------------------------------------
// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_products',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_products',
  foreignKey: 'tag_id'
});

//EXPORT MODEL OBJECT --------------------------
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
//DECLARATIONS: router, category and product models -----------------------
const router = require('express').Router();
const { Category, Product } = require('../../models');

//ROUTES: /api/categories ---------------------------------------
// get all categories: /api/categories/
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    //category table columns
    attributes: [
      'id',
      'category_name'
    ],
    //product table columns
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name'
        ]
      }
    ]
  }).then(dbPostData => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one category by id: /api/categories/:id
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    //category table columns
    attributes: [
      'id',
      'category_name'
    ],
    //product table columns
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock'
        ]
      }
    ]
  }).then(dbPostData => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new category: /api/categories/
router.post('/', (req, res) => {
  // create a new category, expects {"category_name": string}
  Category.create({
    category_name: req.body.category_name
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update category: /api/categories/:id
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//delete category: /api/categories/:id
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


//EXPORT ROUTER ---------------------------------------------
module.exports = router;
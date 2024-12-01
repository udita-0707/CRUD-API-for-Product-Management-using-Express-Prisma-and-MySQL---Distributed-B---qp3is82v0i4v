const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  partialUpdateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply the authMiddleware to all routes
router.use(authMiddleware);

// Routes
router.post('/create', createProduct);
router.get('/get', getAllProducts);
router.get('/getById/:id', getProductById);
router.put('/put/:id', updateProduct);
router.patch('/patch/:id', partialUpdateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;

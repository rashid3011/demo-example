const router = require("express").Router();
const testRoutes = require("./testRoutes");

router.use('/', testRoutes);

module.exports = router;
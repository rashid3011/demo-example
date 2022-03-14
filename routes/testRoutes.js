const router = require("express").Router();

router.get('/test1', (req, res) => {
    res.send("Test API One");
})

router.get('/test2', (req, res) => {
    res.send("This API Two");
})

module.exports = router;
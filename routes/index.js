var router = require('express').Router();

router.get("/", function(req, res){
    /*Set page title*/
    var pageData = {
        pageTitle: 'Homepage!'
    }

    res.render('../views/index.mus', pageData);
});

module.exports = router;
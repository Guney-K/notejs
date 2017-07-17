var router = require('express').Router();

router.get('*', function(req, res){
    
    var pageData = {
        pageTitle: 'OOoops 404!'
    }

    res.render('../views/404/global404.mus', pageData);
});

module.exports = router;
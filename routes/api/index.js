let router = require('express').Router();

router.use(require('./user'));
router.use(require('./request'));
router.use(require('./device'));

module.exports = router;

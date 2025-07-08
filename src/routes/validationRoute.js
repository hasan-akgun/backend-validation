const express = require("express")
const router = express.Router();

const {validateName, validateAge, validateMail, validateCheckBox, validateComment} = require("../middlewares/validationMiddleware");

router.post('/', validateName, validateAge, validateMail, validateCheckBox, validateComment);

module.exports = router;
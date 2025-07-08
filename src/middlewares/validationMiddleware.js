const validateName = (req, res, next) =>{
  const {name} = req.body;

  if(typeof name !== 'string'){
    res.status(400).json({
      success: false,
      message: "Please enter a valid name"
    })
    return
  }

  const space = /\s/;
  if(space.test(name)){
    res.status(400).json({
      success: false,
      message: "Dont use spaces"
    })
    return
  }

  next();
}

const validateMail = (req, res, next) =>{
  const {mail} = req.body;

  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  if(!mailRegex.test(mail)){
    res.status(400).json({
      success: false,
      message: "Please enter a valid mail adress"
    })
    return
  }

  next();
}

const validateAge = (req, res, next) =>{
  const {age} = req.body;

  const ageRegex = /^[0-9]+$/;
  if(!ageRegex.test(age)){
    res.status(400).json({
      success: false,
      message: "Please enter a valid age"
    })
    return
  }

  next();

}

const validateCheckBox = (req, res, next) =>{
  const {checked} = req.body;
  if(!checked){
    res.status(400).json({
      success: false,
      message: "You need to agree terms"
    })
    return
  }

  next();
}

const validateComment = (req, res) =>{
  const {comment} = req.body;

  const htmlRegex = /<\w+>/i;
  if(htmlRegex.test(comment)){
    res.status(400).json({
      success: false,
      message: "Please enter a valid comment"
    })
    return
  }

  res.status(200).json({
      success: true,
      message: "success"
    })
  
}


module.exports = {validateName, validateAge, validateMail, validateCheckBox, validateComment}
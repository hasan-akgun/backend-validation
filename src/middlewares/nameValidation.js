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
  
}
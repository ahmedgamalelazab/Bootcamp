//*@desc     Get all bootcamps
//*@route    Get /api/v1/bootcamps
//*@access   Public
module.exports.getAllBootCamps = async (req, res, next) => {
  res.json({
    success: true,
    data: 'get all the bootcamps',
  });
};

//*@desc     Get one bootcamp
//*@route    Get /api/v1/bootcamps/:id
//*@access   Public
module.exports.getBootCampById = async (req, res, next) => {
  res.json({
    success: true,
    data: 'get one bootcamp',
    id: req.params.id,
  });
};

//*@desc     Post one bootcamp
//*@route    Post /api/v1/bootcamps/
//*@access   Public
module.exports.createBootCamp = async (req, res, next) => {
  res.json({
    success: true,
    data: 'Posting one code camp working',
  });
};

//*@desc     Put one bootcamp
//*@route    Put /api/v1/bootcamps/:id
//*@access   Public
module.exports.updateBootCampById = async (req, res, next) => {
  res.json({
    success: true,
    data: 'updating one code camp working',
    id: req.params.id,
  });
};

//*@desc     delete all bootcamp
//*@route    delete /api/v1/bootcamps/
//*@access   Public
module.exports.deleteAllBootCamps = async (req, res, next) => {
  res.json({
    success: true,
    data: 'deleting all the bootcamps working',
  });
};

//*@desc     delete one bootcamp
//*@route    delete /api/v1/bootcamps/:id
//*@access   Public
module.exports.deleteOneBootCampById = async (req, res, next) => {
  res.json({
    success: true,
    data: 'updating one code camp working',
    id: req.params.id,
  });
};

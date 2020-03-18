const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require("../models/Bootcamps");
// @desc  Get all bootcamps
// @route GET /api/v1/bootcapms
// @access Public
exports.getBootcamps = async (req, res, next) => {
try {
  const bootcamps =  await Bootcamp.find();
  res.status(200).json({
    success:true,
    count : bootcamps.length,
    data:bootcamps
  });
} catch (error) {
  res.status(400).json({
    success:false
  })
}
};

// @desc  Get a bootcamp
// @route GET /api/v1/bootcapms/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp){
    return  next( new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))

    }
    res.status(200).json({
      success:true,
      data:bootcamp
    })
  } catch (error) {
    next( new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
  }
};

// @desc  Create a bootcamp
// @route POST /api/v1/bootcapms/
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};

// @desc  Update a bootcamp
// @route PUT /api/v1/bootcapms/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new : true,
      runValidators:true
    });
    if (!bootcamp){
      res.status(400).json({
        status: false,
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};

// @desc  Delete a bootcamp
// @route DELETE /api/v1/bootcapms/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndRemove(req.params.id);

    if (!bootcamp){
      res.status(400).json({
        status: false,
      });
    }
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};

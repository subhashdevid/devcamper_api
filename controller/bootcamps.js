
// @desc  Get all bootcamps
// @route GET /api/v1/bootcapms
// @access Public
exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({ success: true, msg: "show all bootcamps" });
}

// @desc  Get a bootcamp
// @route GET /api/v1/bootcapms/:id
// @access Public
exports.getBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `get bootcamps ${req.params.id}` });
}

// @desc  Create a bootcamp
// @route POST /api/v1/bootcapms/
// @access Private
exports.createBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: "Create new bootcamps" });
}

// @desc  Update a bootcamp
// @route PUT /api/v1/bootcapms/:id
// @access Private
exports.updateBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
}

// @desc  Delete a bootcamp
// @route DELETE /api/v1/bootcapms/:id
// @access Private
exports.deleteBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
}


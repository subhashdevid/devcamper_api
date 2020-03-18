

const errorHandler = (err , req, res, next) => {
// console log for developer
console.log(err.stack.red)
res.status(err.statusCode || 500).json({
    success: false,
message : err.message || 'Server connection Error'
})
};
module.exports = errorHandler;

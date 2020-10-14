const errorHandler = (error, req, res, next) => {
   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
   const message = error.message || 'Error occurs';
   res.status(statusCode);
   res.json({
      statusCode,
      message,
      stack: process.env.NODE_ENV === 'PRODUCTION' ? null : error.stack,
   });
};

module.exports = errorHandler;

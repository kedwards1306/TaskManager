const RoutesNotFound = (req, res, next) => {
    const error = new Error(`Routes not found on: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {

    let statusCode = res.statusCode == 200 || 500;
    let message = err.message;

    if (err.name === "CastError" && err.kind === "ObjectId") {
      statusCode = 404;
      message = "Resource not found";
    }
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export { RoutesNotFound, errorHandler };
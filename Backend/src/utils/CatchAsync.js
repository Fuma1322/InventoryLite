const CatchAsync = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((e) => {
        console.log("promise can be bracked", e); // Log the actual error
        next(e);
    });
};

module.exports = CatchAsync;
module.exports = (req, res, next) => {
    if (req.session) {
      next();
    } else {
      res.status(401).json({ you: "not logged in!" });
    }
  };
  
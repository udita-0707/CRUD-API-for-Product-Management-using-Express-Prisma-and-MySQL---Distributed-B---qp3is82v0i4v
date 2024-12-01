const API_AUTH_KEY = '8a60348b-d4a4-564a-9b45-aab518adb7f4';

const authMiddleware = (req, res, next) => {
  const apiauthkey = req.headers['apiauthkey'];

  if (!apiauthkey) {
    return res.status(401).json({ message: 'Access denied, apiauthkey is missing' });
  }

  if (apiauthkey !== API_AUTH_KEY) {
    return res.status(401).json({ message: 'Failed to authenticate apiauthkey' });
  }

  next();
};

module.exports = authMiddleware;

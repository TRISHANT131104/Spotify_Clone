const jwt = require('jsonwebtoken');

const getToken = async (email, user) => {
    const token = await jwt.sign({ identifier: user._id }, 'secret', {
        expiresIn: '1h'  // Optional: Set token expiry time
    });
    return token;
}

module.exports = { getToken };

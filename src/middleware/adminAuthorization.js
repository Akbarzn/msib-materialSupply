const jwt = require('jsonwebtoken')

const authorizeAdmin = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' })
    }

    try {
        const splitToken = token.split('')[1]
        const decoded = jwt.verify(splitToken, process.env.JWT_SECRET)
        if (decoded.role !== 'PH_OPERATOR') {
            return res.status(403).json({ message: 'unauthorized' })
        }
        next()
    } catch (error) {
        return res.status(401).json({ message: 'token invalid' })
    }
}

module.exports = authorizeAdmin;
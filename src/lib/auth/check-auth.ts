const jwt = require('jsonwebtoken')

const token: typeof jwt = jwt.sign({
    data: 'foobar'
}, process.env.SECRET_KEY_SIG, {expiresIn: '1m'});

export default  token;

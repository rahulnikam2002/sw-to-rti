const Redis = require("ioredis");

const redisClient = new Redis(process.env.REDIS_CLIENT_URL, {
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = redisClient;

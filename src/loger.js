const winston = require('winston')

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: './logger/error.log', level: 'error' }),
        new winston.transports.File({ 
            filename: './logger/info.log',
            level: 'info'
             }),
              new winston.transports.File({ 
                filename: './logger/warn.log',
                level: 'warn'
                 }),
             // 
    ]
});

module.exports = logger;
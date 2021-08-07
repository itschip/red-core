import winston from 'winston';

const formatLog = (log: winston.Logform.TransformableInfo) => {
  if (log.module) return `${log.label} [${log.level}]: ${log.message}`;
};

export const mainLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.label({ label: '[red-core]' }),
        winston.format.colorize({ all: true }),
        winston.format.printf(formatLog),
      ),
    }),
  ],
});

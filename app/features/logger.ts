import pino, { Level, LevelMapping, type LoggerOptions } from 'pino';
import { color, red, green, gray, cyan, cyanBright } from 'console-log-colors';

const config = {
  serverUrl: process.env.REACT_APP_API_PATH || 'http://localhost:3000',
  env: process.env.NODE_ENV,
  publicUrl: process.env.PUBLIC_URL
};

const pinoConfig: LoggerOptions = {
  timestamp: pino.stdTimeFunctions.isoTime,
  name: 'stacks-logger-name',
  level: 'info',
  // formatters: {
  // 	level: (label: string, number: number) => {
  // 		console.log(label, , 232323);
  // 		return { level: number };
  // 	},
  // },
  // safe: true,
  // useLevelLabels: true,
  browser: {
    asObject: true,
    write: {
      info(o) {
        const { time, level, msg, type } = o as {
          time: string;
          level: number;
          msg: string;
          type: string;
        };

        const levelString = pino.levels.labels[level].toUpperCase();

        console.log(
          color.yellow(`[${time}]`) +
            ' ' +
            color.green(levelString) +
            ` (${color.cyanBright(type)}) ` +
            msg
        );

        // console.log(
        // 	`%c[${time}] %c${levelStr}%c(${type}): %c${msg}`,
        // 	"background: #222; color: #bada55",
        // 	"color: aada55",
        // 	"color: green",
        // 	"color: green"
        // );
      }
      // error: function (o) {
      // 	//process error log object
      // },
    }
  }
};
// todo
// if (config.serverUrl) {
// 	pinoConfig.browser!.transmit = {
// 		level: "info",
// 		send: (level, logEvent) => {
//
// 			const msg = logEvent.messages[0];
//
// 			const headers = {
// 				"Access-Control-Allow-Origin": "*",
// 				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
// 				type: "application/json",
// 			};
// 			let blob = new Blob([JSON.stringify({ msg, level })], headers);
// 			navigator.sendBeacon(`${config.serverUrl}/log`, blob);
// 		},
// 	};
// }

const logger = pino(pinoConfig);

export const log = (message: unknown) => { logger.info(message); };
export default logger;

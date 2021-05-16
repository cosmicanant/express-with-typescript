import pino from 'pino';

export class Logger {
  private static _logger: pino.Logger;
  static get instance() {
    if(Logger._logger == null) {
      Logger._logger = pino({ formatters: {
        level (label) {
            return { level: label }
          }
        }
      });
    }
    return Logger._logger;
  }
}

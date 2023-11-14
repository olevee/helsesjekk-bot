import { LogLevel } from '@slack/logger'
import { App as BoltApp } from '@slack/bolt'
import { lazyNextleton } from 'nextleton'
// import { logger } from '@navikt/next-logger'

// const slackLogger = logger.child({ x_context: 'slack-bot', x_isSlack: true })

// Custom logger adapter because Bolt didn't like the pino logger
// const loggerAdapter: Logger = {
//     debug: (msg) => slackLogger.debug(msg),
//     info: (msg) => slackLogger.info(msg),
//     warn: (msg) => slackLogger.warn(msg),
//     error: (msg) => slackLogger.error(msg),
//     getLevel: (): LogLevel => slackLogger.level as LogLevel,
//     setLevel: (): void => void 0,
//     setName: (): void => void 0,
// }

const app = lazyNextleton(
    'bolt',
    () =>
        new BoltApp({
            clientOptions: {
<<<<<<< HEAD
                slackApiUrl: 'https://helsesjekk-bot.bks-prod.politiet.no/slack/',
=======
                slackApiUrl: 'https://slack.com/api/',
>>>>>>> f6d816f9159c5eeaae1eb36a7cc1f96ab1c463b2
            },
            socketMode: true,
            token: process.env.SLACK_BOT_TOKEN,
            signingSecret: process.env.SLACK_SIGNING_SECRET,
            appToken: process.env.SLACK_APP_TOKEN,
            // logger: loggerAdapter,
            logLevel: LogLevel.DEBUG,
        }),
)

export type App = BoltApp
export default app

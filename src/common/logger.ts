import { configure, getLogger } from "log4js";

configure({
    // 指定日志输出目标，可以定义多个，每个输出目标都有自己的类型和参数配置。
    appenders: {
        "file": {
            // 指定输出目标的类型
            type: 'file',
            // 指定输出到文件时的文件名，可以是绝对路径或相对路径。/
            filename: 'logs/logger.log',
            // 指定日志文件的最大大小，超过这个大小后将自动进行文件切割。默认为null，表示不限制文件大小。
            maxLogSize: 10485760,

            /**
             * 
             * backups: 指定保留的备份数量，当日志文件切割时会自动保存指定数量的备份文件。默认为5。
                compress: 指定是否启用压缩，当日志文件进行切割时，可以将备份文件进行压缩以节省磁盘空间。默认为false。
                layout: 指定输出格式化方式，可以是pattern、json等
             */
        }
    },
    // 指定日志级别和输出目标的对应关系，可以定义多个。
    categories: {
        "default": {
            // 指定输出目标，可以是单个或多个，对应appenders中的输出目标名称。
            appenders: ["file"],
            // 指定输出目标的日志级别，包括：trace、debug、info、warn、error、fatal等
            level: "info"
        }
    }
})


export const defaultLogger = getLogger()

import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";

export const toggleAlert = (variant, message) => {
    // console.log(variant)
    enqueueSnackbar(message, {
        variant,
        autoHideDuration: 3000,

    });
};

export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


// export function formatCustomDateTime(datetime){
//     return dayjs(datetime).format('DD-MM-YY')
// }

export function timeSince(date) {
    console.log(date)

    var seconds = Math.floor((new Date() - date) / 1000);

    
    var interval = seconds / 31536000;
    console.log(seconds, interval)
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
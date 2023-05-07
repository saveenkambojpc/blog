
import { enqueueSnackbar } from "notistack";

export const toggleAlert = (variant, message) => {
    // console.log(variant)
    enqueueSnackbar(message, {
        variant,
        autoHideDuration: 1000,
    });
};

export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

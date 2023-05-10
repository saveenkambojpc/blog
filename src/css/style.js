import { theme } from "../misc/theme";

export const styles = {
    filled_button: {
        background: theme.palette.colors.primary,
        color: "white",
        fontWeight: 600,
        '&:hover': {
            background: "#6da8e2"
        },
        '&.Mui-disabled':{
            color:"gray"
        }
    },

    outlined_button: {
        color: theme.palette.colors.primary,
        borderColor: theme.palette.colors.primary,

        '&:hover': {
            background: "inherit",
            borderColor: theme.palette.colors.primary
        }

    }
    ,
    text_button: {
        color: theme.palette.colors.primary,
        '&:hover': {
        }
    }
}
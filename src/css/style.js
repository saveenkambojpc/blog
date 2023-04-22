import { theme } from "../misc/theme";

export const styles = {
    filled_button: {
        background: theme.palette.colors.primary,
        color: "white",
        fontWeight: 600,
        '&:hover': {
            background: 'orange'
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
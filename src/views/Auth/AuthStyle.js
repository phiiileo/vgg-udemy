import {
    makeStyles
} from "@material-ui/core";

export const useAuthStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
        width: '90%',
        maxWidth: "600px",
        margin: "0 auto",
        minHeight: "80vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        "& form": {
            width: "100%",
            border: "1px solid " + theme.palette.primary.main,
            padding: theme.spacing(5, 2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(4, 5, 5, 5),
            },
            borderRadius: theme.spacing(1)
        }
    },
    col2: {
        display: "grid",
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: "1fr 1fr",
            columnGap: "10px"
        }
    },
    title: {
        marginBottom: theme.spacing(3)
    },
    forget_password: {
        marginTop: theme.spacing(2)
    },
    extra: {
        marginTop: theme.spacing(2),
        display: 'block'
    }
}))
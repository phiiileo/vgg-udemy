import React from 'react'
import { Input, makeStyles, TextField, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';


export default function CustomInput(props) {
    const { fullWidth, label, name } = props
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: "100%"
        },
        margin: {
            marginBottom: theme.spacing(2),
        },
    }));
    const classes = useStyles()
    const [values, setValues] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleChange = (event) => {
        setValues(event.target.value)
    }

    const handleClickShowPassword = () => {
        console.log(123456)
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl fullWidth={fullWidth} className={classes.margin} variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                type={showPassword ? 'text' : props.type}
                value={values}
                name={name}
                {...props}
                onChange={handleChange}
                endAdornment={(props.icon) ?
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment> : ""
                }
                labelWidth={70}
            />
        </FormControl>
    )
}

CustomInput.defaultProps = {
    type: "text",
    required: false,
    placeholder: "Input field",
    label: "Input",
    name: "text",
    icon: null,
    fullWidth: false,
}
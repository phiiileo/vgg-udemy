import React, { useState } from 'react'
import { makeStyles, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from '@material-ui/core'
import CustomIcon from '../icons/CustomIcon';
import clsx from 'clsx';

export default function CustomInput(props) {
    const { fullWidth, width, label, name } = props
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: fullWidth ? "100%" : width || "50%"
        },
        margin: {
            marginBottom: theme.spacing(2),
        },
    }));
    const classes = useStyles()
    const [value, setValues] = React.useState(props.value || '');
    const [showPassword, setShowPassword] = useState(false);
    const [icon_name, setIcon] = useState(props.icon);

    // handle input value change
    const handleChange = (event) => {
        setValues(event.target.value)
    }

    // handle icon toggle
    const toggleIcon = () => {
        if (props.type === 'password') {
            setIcon(showPassword ? "show" : 'hide');
            setShowPassword(!showPassword)
        }
    };

    // handle mouse down event on icon
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <FormControl fullWidth={fullWidth} className={clsx(classes.margin, classes.root)} variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                {...props}
                value={value}
                type={showPassword ? 'text' : props.type}
                onChange={handleChange}
                endAdornment={(props.icon) ?
                    <InputAdornment position="end">
                        <CustomIcon
                            aria-label="toggle password visibility"
                            onClick={toggleIcon}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            name={icon_name} />
                    </InputAdornment> : ""
                }
                labelWidth={70} />
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
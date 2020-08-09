// import React from 'react'
// import { Input, makeStyles, TextField, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from '@material-ui/core'
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import clsx from 'clsx';
// export default function CustomInput(props) {
//     const { fullWeight, label } = props
//     const useStyles = makeStyles(theme => ({
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             width: "100%"
//         },
//         margin: {
//             marginBottom: theme.spacing(2),
//         },
//     }));
//     const classes = useStyles()
//     const [values, setValues] = React.useState({
//         amount: '',
//         password: '',
//         weight: '',
//         weightRange: '',
//         showPassword: false,
//     });

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleClickShowPassword = () => {
//         setValues({ ...values, showPassword: !values.showPassword });
//     };

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };
//     return (
//             <FormControl fullWidth className={classes.margin} variant="outlined">
//                 <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//                 <OutlinedInput
//                     type={values.showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     onChange={handleChange('password')}
//                     endAdornment={(props.icon) ?
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                             >
//                                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                         </InputAdornment> : ""
//                     }
//                     labelWidth={70}
//                 />
//             </FormControl>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search App"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
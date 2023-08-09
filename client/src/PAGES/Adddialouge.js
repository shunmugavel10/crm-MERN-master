import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Adddialog() {
  const classes = useStyles();
  
  const [customers,setCustomers] = useState({firstname:"",lastname:"",email:"",phone:"",membership:""})
  
  const handleChange=(e)=>{
setCustomers({...customers,[e.target.name]:e.target.value})
console.log(customers)
}

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="outlined-basic" label="First Name" name="firstname" value={customers.firstname} variant="outlined" onClick={handleChange}/>
      <TextField id="outlined-basic" label="Last Name"name="lastname" variant="outlined" value={customers.lastname} onClick={handleChange}/>
      <TextField id="outlined-basic" label="Email" variant="outlined"name="email" value={customers.email} onClick={handleChange}/>
      <TextField id="outlined-basic" label="Mobile No." variant="outlined" name="phone" value={customers.phone} onClick={handleChange}/>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Membership</InputLabel>
        <Select
          native
        //   value={state.age}
          onChange={handleChange}
          label="Membership"
          name="membership"
          value={customers.membership}
        //   inputProps={{
        //     name: 'age',
        //     id: 'outlined-age-native-simple',
        //   }}
        >
          {/* <option aria-label="Membership" value="" >Select membership</option> */}
          <option value={"silver"}>silver</option>
          <option value={"gold"}>Gold</option>
          <option value={"platinum"}>Platinum</option>
        </Select>
      </FormControl>
    </form>
  );
}

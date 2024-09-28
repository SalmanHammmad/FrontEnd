import TextField from '@mui/material/TextField';

const TextField1 = ({required, name, type, value, onChange, label }) => {
    return (
        <TextField
            required ={required}
            id="standard-required"
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            variant="standard"
            fullWidth  // Optional: Makes the field full width
        />
    );
};

export default TextField1;

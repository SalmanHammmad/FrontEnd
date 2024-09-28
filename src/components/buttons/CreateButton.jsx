import Button from '@mui/material/Button';



 const CreateButton = ({text, type, disabled}) => {
    return (
        <Button text={text} type={type}  disabled={disabled} variant="contained" color="success">
         {text}
        </Button>
    );
}

export default CreateButton;
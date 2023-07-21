import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = (props) => {
    return (
        <div id="one">
            <h4>{props.a} </h4>
            <h4>{props.b} </h4>
            <Button variant="outlined" onClick={props.c} startIcon={<DeleteIcon />}>Delete</Button>
        </div>
    )
}

export default Fields;

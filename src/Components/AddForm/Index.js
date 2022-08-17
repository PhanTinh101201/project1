import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './style.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AddProductForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")

    function handleSubmit (e){
    e.prevenDefault();
    setName("")
    setPrice("")
    setImg("")
    }
    console.log(handleSubmit);
    return (
        <div className='title' >
            <Button onClick={handleOpen}>
                <p>ADD PRODUCT</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box onSubmit ={handleSubmit} sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className='Box'>ADD NEW PRODUCT</p>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input placeholder='Name' id='name'   value={name} onChange={(e)=> setName(e.target.value)} type="text"  />
                        <input placeholder='Price' id='price' value={price} onChange={(e)=> setPrice(e.target.value)} type="text" />
                        <input placeholder='Image' id  ='url' value={img} onChange={(e)=> setImg(e.target.value)} type="text" />
                        <Stack spacing={2} direction="row"  >
                            <Button variant="contained" type='submit'>Save</Button>
                            <Button variant="outlined">Reset</Button>
                        </Stack>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default AddProductForm
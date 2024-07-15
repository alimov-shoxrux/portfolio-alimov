import React from 'react';
import './Contact.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "632fdd77-d4d8-4332-a488-e9ee318caea3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Your message sent successfully",
                icon: "success"

            });
            event.target.reset();
        }

    };

    return (
        <div className='Contact' id='contact'>
            <div className="container contact__container" >
                <form onSubmit={onSubmit} className='contact__form' >
                    <h2 className='contact__title'>Free consultation</h2>
                    <h5 className='contact__me'>Contact me</h5>
                    <div className='contact__first__div'>
                        <div className='label__input'>
                            <Box
                                component="div"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    '& .MuiInputBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Name" name='name' variant="standard" required />
                            </Box>

                        </div>
                        <div className='label__input'>

                            <Box
                                component="div"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    '& .MuiInputBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" type='email' label="Email" name='email' variant="standard" required />
                            </Box>
                        </div>
                        <div className='label__input'>

                            <Box
                                component="div"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    '& .MuiInputBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Phone" name='phone' variant="standard" required />
                            </Box>
                        </div>
                        <div className='label__input'>

                            <Box
                                component="div"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    '& .MuiInputBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Message" name='message' variant="standard" required />
                            </Box>
                        </div>
                    </div>

                    <button className='contact__btn'>Sent</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;

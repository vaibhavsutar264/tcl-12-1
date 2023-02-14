import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import WelcomeCPass from '../../assets/images/svg/welcome-cpass.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../utils/constants';

function ModalWelcome({ open }: any) {
    const navigate = useNavigate()

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
        >
            <IconButton onClick={() => { navigate(appRoutes.DASHBOARD) }} ><CloseRoundedIcon /></IconButton>
            <img src={WelcomeCPass} alt="" />
            <DialogTitle id="responsive-dialog-title" textAlign='center'>
                {"Welcome to CPass"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText textAlign='center'>
                    Perfect! You have successfully activated your account.
                </DialogContentText>
            </DialogContent>
            <DialogActions className='buildfix3'>
                <Button className='buildfix2' onClick={() => { navigate(appRoutes.DASHBOARD) }} >
                    jump to dashboard
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalWelcome;

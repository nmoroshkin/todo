import React from 'react';
import { Checkbox } from '@mui/material';

const MyCheckBox = ({ statusCheck, handleChecked }) => {
    return (
        <Checkbox
            checked={statusCheck}
            onChange={() => handleChecked()}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
            style={{
                color: '#ff9ff3',
            }}
        />
    );
};

export default MyCheckBox;

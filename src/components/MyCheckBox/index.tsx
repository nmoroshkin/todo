import React from 'react';
import { Checkbox } from '@mui/material';

type MyCheckBoxProps = {
    statusCheck: boolean;
    handleChecked: () => void;
};

const MyCheckBox: React.FC<MyCheckBoxProps> = ({ statusCheck, handleChecked }) => {
    return (
        <Checkbox
            checked={statusCheck}
            onChange={() => handleChecked()}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 }, color: '#ff9ff3' }}
        />
    );
};

export default MyCheckBox;

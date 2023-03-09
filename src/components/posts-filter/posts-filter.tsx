import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { chipTypes } from "../../models/chip-type";
import './posts-filter.css';

export class FilterProps {
    onBtnClick = (name: string, type: string): void => {};
}

export default function PostsFilter(props: FilterProps) {
    const chips = [chipTypes.back, chipTypes.front, chipTypes.others];

    const [name, setName] = useState('');
    const [type, setType] = useState('back');

    const handleClick = () => {
        props.onBtnClick(name, type);
    }
    
    const handleClear = () => {
        props.onBtnClick('', '');
    }

    return (
        <div className="filter">
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Stack direction="column">
                    <TextField
                        id="outlined-required"
                        label="Nome do Artigo"
                        placeholder="Como criar gatos espaciais"
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <TextField
                    id="outlined-select-type"
                    select
                    label="Tipo do Artigo"
                    defaultValue={type}
                    helperText="Selecione o tipo do artigo"
                    onChange={(e) => {setType(e.target.value)}}
                    >
                    {chips.map((option) => (
                        <MenuItem key={option.type} value={option.type}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <Stack style={{margin: '10px'}} direction="row" spacing={2}>
                        <Button onClick={handleClick} variant="contained">Encontrar!</Button>
                        <Button onClick={handleClear} variant="outlined">Limpar</Button>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
  }
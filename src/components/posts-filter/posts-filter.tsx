import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React from "react";
import { chipTypes } from "../../models/chip-type";
import './posts-filter.css';

export default function PostsFilter() {
    const chips = [chipTypes.back, chipTypes.front, chipTypes.others];
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
                    />
                    <TextField
                    id="outlined-select-type"
                    select
                    label="Tipo do Artigo"
                    defaultValue="back"
                    helperText="Selecione o tipo do artigo"
                    >
                    {chips.map((option) => (
                        <MenuItem key={option.type} value={option.type}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <Stack style={{margin: '10px'}} direction="row" spacing={2}>
                        <Button variant="contained">Encontrar!</Button>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
  }
import * as React from 'react';
import {useState, useEffect} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import "./footerFile.css"
function Copyright() {

    // useEffect(() => { },[Name])
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link
                className="justify-content-center"
                color="inherit"
                href="https://www.echoescreative.com/">
                Echoes
            </Link>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
    const userName = localStorage.getItem("name")
    return (

        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: "100vh"
        }}>
            <CssBaseline/>
            <Container
                component="main"
                id="body-dashboard"
                sx={{
                mt: 8,
                mb: 2
            }}
                maxWidth="sm">
                <Typography variant="h2" component="h1" id="dashboard-content" gutterBottom>
                    Welcome
                    <span>{userName}</span>
                </Typography>

            </Container>
            <Box
                component="footer"
                sx={{
                mt: 0,
                backgroundColor: "#94a684"
            }}>
                <Container maxWidth="sm" id="footer-block">
                    <Typography variant="body1" color="text.secondary">
                        Where creative minds meet
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </Box>

    );
}
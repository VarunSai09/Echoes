import * as React from "react";
import {useHistory} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./headerFile.css";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
    const [anchorElNav,
        setAnchorElNav] = React.useState(null);
    const [anchorElUser,
        setAnchorElUser] = React.useState(null);
    const history = useHistory("");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        history.push("/")
    };

    return (
        <AppBar position="static">
            <Container id="Container-navbar" maxWidth="xl">
                <Toolbar id="Logo-Comp" disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"><img
                        alt=""
                        src="https://echoescreative.com/wp-content/uploads/2023/01/EchoesC_Logo-2.png"
                        className="d-inline-block align-top logo-image"/></Typography>

                </Toolbar>
                <Box id="Box-Navbar">
                    <Tooltip title="Open settings">
                        <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{
                            p: 0
                        }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                        keepMounted
                        transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}>
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu} href="/">
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

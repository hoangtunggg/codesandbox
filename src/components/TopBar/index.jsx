import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Lê Hoàng Tùng_B22DCVT497
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;

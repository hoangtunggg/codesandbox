import React from "react";
import {Typography, Button} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams(); 
    const user = models.userModel(userId);
    return (
        <div className="user-detail">
          <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
          <Typography variant="body1">Occuption: {user.occupation}</Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Description: {user.description}</Typography>
          <Button component={Link} to={`/photos/${user._id}`} variant="contained" sx= {{ mt : 2}}>
          Picture of {user.first_name}</Button>
        </div>
    );
}

export default UserDetail;
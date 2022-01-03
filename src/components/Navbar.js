import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../assets/jahz.png";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider"; //para consmir un dato

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  AppBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "0px",
    height: "1.7rem",
  },
}));

export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue(); //para consmir un dato
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img
                src={Logo}
                className={classes.image}
                alt="Commer.js"
                height="25px"
              />
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
              <strong>Sign In</strong>
            </Button>
            <Link to="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

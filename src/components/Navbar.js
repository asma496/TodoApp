// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import DownloadIcon from '@material-ui/icons/GetApp';
// import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
// import HomeIcon from '@material-ui/icons/Home';
// import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
// import { NavbarInfo } from '../Info.json';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Products from './pages/Products';
// import Login from './pages/Login';
// import Register from './pages/Register';


// const useStyles = makeStyles({
//   root: {
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//     background: 'whitesmoke',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   container: {
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     justifyContent: 'center',
//   },
//   navItem: {
//     margin: '0.5rem',
//     alignSelf: 'center',
//   },
//   link: {
//     color: 'rgba(0, 0, 0, 0.87)',
//     fontSize: '0.8rem',
//   },
//   img: {
//     width: '2rem',
//   },
//   drawer: {
//     zIndex: '999',
//   },
// });

// const Navbar = ({ setComponent }) => {
//   const classes = useStyles();
//   const { contact, experience, projects, education, resume } = NavbarInfo;
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleComponent = (Component) => {
//     setComponent(<Component />);
//   };

//   const handleClose = (Component) => {
//     if (Component != null) {
//       setComponent(<Component />);
//     }
//     setDrawerOpen(false);
//   };

//   return (
//     <>

//       <AppBar position="fixed" color="inherit">
//         <Toolbar className={classes.root}>
//           <Grid container className={classes.container}>
//             <Hidden smDown>
//               <Divider orientation="vertical" flexItem />
//               <Button
//                 onClick={() => handleComponent(Register)}
//                 className={classes.navItem}
//               >
//                 {Register}
//               </Button>
//             </Hidden>
//             <Hidden xsDown>
//               <Divider orientation="vertical" flexItem />
//               <Button
//                 onClick={() => handleComponent(Products)}
//                 className={classes.navItem}
//               >
//                 {Products}
//               </Button>
//             </Hidden>
//             <Divider orientation="vertical" flexItem />
//             <IconButton
//               onClick={() => handleComponent(Cart)}
//               className={classes.navItem}
//             >
//               <HomeIcon />
//             </IconButton>
//             <Divider orientation="vertical" flexItem />
//             <Hidden xsDown>
//               {/* <Button
//                 onClick={() => handleComponent(ExperienceHome)}
//                 className={classes.navItem}
//               >
//                 {experience}
//               </Button> */}
//               <Divider orientation="vertical" flexItem />
//             </Hidden>
//             <Hidden smDown>
//               <Button
//                 onClick={() => handleComponent(Login)}
//                 className={classes.navItem}
//               >
//                 {Login}
//               </Button>
//               <Divider orientation="vertical" flexItem />
//             </Hidden>
//           </Grid>
//           <Link href={resume.href} target="_blank" rel="noopener" underline="none">
//             <Hidden xsDown>
//               <Button
//                 className={classes.link}
//               >
//                 {resume.text}
//               </Button>
//             </Hidden>
//             <IconButton>
//               <DownloadIcon />
//             </IconButton>
//           </Link>
//           <Hidden mdUp>
//             <IconButton
//               aria-label="open drawer"
//               onClick={() => setDrawerOpen(!drawerOpen)}
//               edge="start"
//               className={classes.drawer}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Hidden>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={() => handleClose(null)}>
//         <Button
//           onClick={() => handleClose(Register)}
//           className={classes.link}
//         >
//           {contact}
//         </Button>
//         <Button
//           onClick={() => handleClose(Products)}
//           className={classes.link}
//         >
//           {projects}
//         </Button>
//         {/* <Button
//           onClick={() => handleClose(ExperienceHome)}
//           className={classes.link}
//         >
//           {experience}
//         </Button> */}
//         <Button
//           onClick={() => handleClose(Cart)}
//           className={classes.link}
//         >
//           {education}
//         </Button>
//       </Drawer>
//     </>
//   );
// };

// Navbar.propTypes = {
//   setComponent: PropTypes.func.isRequired,
// };

// export default Navbar;
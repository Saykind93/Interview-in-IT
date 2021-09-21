import React from 'react';

import { useSelector } from 'react-redux';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Header()  {
  // const classNamees = useStyles();


  // const isAuthenticated = useSelector(state => state.isAuntificated)||window.local.getItem('state') || false
  const isAuthenticated = useSelector(state => state.isAuntificated)

  return (
    // <div classNameName={classNamees.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" classNameName={classNamees.menuButton} color="inherit" aria-label="menu">
    //         {/* <MenuIcon /> */}
    //           <img classNameName="logo" src={logo} />
    //       </IconButton>
    //       <Typography variant="h6" classNameName={classNamees.title}>
    //         Собес в IT
    //       </Typography>
    //       <Link classNameName="nav-link" to="/main"><Button color="inherit">Main</Button></Link>
    //       <Button color="inherit"><Link classNameName="nav-link" to="/profile">Профиль</Link></Button>
    //       <Button color="inherit"><Link classNameName="nav-link" to="/organization">Организации</Link></Button>
    //       <Button color="inherit"><Link classNameName="nav-link" to="/question">Interview</Link></Button>
    //       <Button color="inherit"><Link classNameName="nav-link" to="/newcomment">Создать interview</Link></Button>
    //       {!isAuthenticated && <Button color="inherit"><Link classNameName="nav-link" to="/login">Логин</Link></Button>}
    //       {isAuthenticated && <Button color="inherit"><Link classNameName="nav-link" to="/logout">Логаут</Link></Button>}
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <div className="header">
  <div className="logo" href="/">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path xmlns="http://www.w3.org/2000/svg" d="M512 503.5H381.7a48 48 0 01-45.3-32.1L265 268.1l-9-25.5 2.7-124.6L338.2 8.5l23.5 67.1L512 503.5z" fill="#0473ff" data-original="#28b446" />
    <path xmlns="http://www.w3.org/2000/svg" fill="#0473ff" data-original="#219b38" d="M361.7 75.6L265 268.1l-9-25.5 2.7-124.6L338.2 8.5z" />
    <path xmlns="http://www.w3.org/2000/svg" d="M338.2 8.5l-82.2 234-80.4 228.9a48 48 0 01-45.3 32.1H0l173.8-495h164.4z" fill="#0473ff" data-original="#518ef8" />
   </svg>
   Собеседушки
  </div>
  <div className="header-menu">
   <a href="/profile" className="active">Профиль</a>
   <a href="/newcomment">Создать</a>
  </div>
  <div className="user-settings">
   <div className="dark-light">
    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
   </div>
   <div className="user-menu">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-square">
     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
   </div>
   <img className="user-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
   <div className="user-name">Suhayel Nasim</div>
  </div>
 </div>
  );
}


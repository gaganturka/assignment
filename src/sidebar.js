import { useState,useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { context } from './context/context'

const SideBar = () => {
  const location = useLocation();


  const change = (event)=>{


  }


//   const toggleActiveClass = (event) => {
//     let target = event.target;
//     let mainLi = target.parentNode;
//     console.log(target.parentNode);
//     let collapseMenu = mainLi.querySelector(".collapse");
//     if (mainLi.classList.contains("active")) {
//         mainLi.classList.remove("active");
//         collapseMenu.classList.remove("show");
//     } else {
//         mainLi.classList.add("active");
//         collapseMenu.classList.add("show");
//     }
// };

const activeClass = (routesToMatch, activeClass = "active") => {
  if (routesToMatch.includes(location.pathname)) {
      return activeClass;
  }
  return "";
};

  const allIcon = (event) => {
    // var icon = document.getElementsByClassName('nav-item active')
    // icon[0].className = 'nav-item '
    console.log('sdfsfdf', event.view.window.location.pathname);
  }
  const { isloged, setIsloged } = useContext(context)
  const navigate = useNavigate();
  const value = 'false'
  const isActive = 'true'

  // const profile =(event) => {
  // navigate('/profile')

  // // change(event)

  // // event.currentTarget.classList.toggle('active');

  // }

  // const dashboard = () => {
  //   navigate('/dashboard')
  //   // var icon = document.getElementsByClassName("nav-item")
  //   // icon[0].className.replace("active", "");
  //   // this.className += "active"
  //   // console.log('jhvjhbhj', icon[0]);



  // }

  const logOut = (() => {
    console.log('entr');
    localStorage.setItem("user" , value);
    setIsloged('false')
    // setTimeout(e=>{
      navigate('/login');
    // },1000);
    
  })


    return (<>
           <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
    <a className="navbar-brand me-lg-5" href="../../index.html">
        <img className="navbar-brand-dark" src="./image/light.svg" alt="Voltt logo" /> <img className="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt   edlogo" />
    </a>
    <div className="d-flex align-items-center">
        <button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

     <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
  <div className="sidebar-inner px-4 pt-3">
    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
      <div className="d-flex align-items-center">
        <div className="avatar-lg me-4">
          <img src="../../assets/img/team/profile-picture-3.jpg" className="card-img-top rounded-circle border-white" alt="Bonnie Green"/>
            
        </div>
        <div className="d-block">
          <h2 className="h5 mb-3">Hi, Jane</h2>
          <a href="../../pages/examples/sign-in.html" className="btn btn-secondary btn-sm d-inline-flex align-items-center">
            <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>            
            Sign Out
          </a>
        </div>
      </div>
      <div className="collapse-close d-md-none">
        <a href="#sidebarMenu" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
            aria-label="Toggle navigation">
            <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
      </div>
    </div>
    <ul className="nav flex-column pt-3 pt-md-0" >
      <li className="nav-item">
        <a href="../../index.html" className="nav-link d-flex align-items-center">
          <span className="sidebar-icon">
            <img src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" height="20" width="20" alt="Volt Logo"/>
          </span>
          <span className="mt-1 ms-1 sidebar-text">Volt Overview</span>
        </a>
      </li> 


     <li className={`nav-item ${activeClass(["/dashboard"])}`} >
        
        <Link to='/dashboard' className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text">Dashboard</span>
        </Link>
        
      </li>


      <li className={`nav-item ${activeClass(["/profile"])}`} >
        <Link to='/profile' className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text" >profile</span>
        </Link>
      </li>

      <li className={`nav-item ${activeClass(["/catagory"])}`} >
        
        <Link to='/catagory' className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text">catagory</span>
        </Link>
        
      </li>



{/* 
      <li className="nav-item  active ">
        <a href="/login" className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text"  >Log In</span>
        </a>
      </li> */}

      <li className="nav-item   " onClick={logOut}>
        <a  className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text" >Log out</span>
        </a>
      </li>

    </ul>
  </div>
</nav>
<main className="content">

<nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
<div className="container-fluid px-0">
<div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
<div className="d-flex align-items-center">
<form className="navbar-search form-inline" id="navbar-search-main">
<div className="input-group input-group-merge search-bar">
  <span className="input-group-text" id="topbar-addon">
    <svg className="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
    </svg>
  </span>
  <input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon"/>
</div>
</form>
</div>
</div>
</div>
</nav>
</main>

   </> )
}

export default SideBar
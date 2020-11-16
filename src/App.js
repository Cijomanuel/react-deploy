import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faPhoneAlt, faSearch, faSignOutAlt, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import Acc from './Acc'
import Gate from './Gate'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import acdata from './data.json'
import gate from './gate.json'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
        show:"account",
        adata:{},
        gdata:{}
    }
    this.change = this.change.bind(this);
  }
  change(e){
    {
      this.setState({show:e.target.getAttribute('name')})
     if(e.target.getAttribute('name')==='gate'){
      document.getElementById("ac").classList.remove('mm');
      document.getElementById("gt").classList.add('mm');
     }else if(e.target.getAttribute('name')==='account'){
      document.getElementById("gt").classList.remove('mm');
      document.getElementById("ac").classList.add('mm');
     }
    }
  }

  componentDidMount() {
    this.setState({
      adata:acdata,
      gdata:gate

    })
    // fetch("https://swapi.dev/api/people/1/")
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //     })
}
render(){

  if(this.state.adata !=={} && this.state.gdata!=={}){ 
return(
      <div>
    <div className="wrapper">
      <header className = "main_header">
        <div className = "nav1">
            <div className="header-upper">
                <div className="container">
                    <ul className="top-left">
                        <li><FontAwesomeIcon icon={faPhoneAlt}  className="fa fa-phone"/>Call:  xxxxxxxxxxx </li>
                        <li><FontAwesomeIcon icon={faEnvelope}  className="fa fa-envelope"/>Email:  vjcet.com</li>
                    </ul>
                    <div className="top-right">
                        <div className="search-box-area">
                            <div className="search-toggle"><FontAwesomeIcon icon={faSearch}  className="fa fa-search"/></div>
                            <div className="search-box">
                                <form method="post" action="#">
                                    <div className="form-group">
                                        <input type="search" name="search" placeholder="Search Here" required/>
                                        <button type="submit"><FontAwesomeIcon icon={faSearch}  className="fa fa-search"/></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <ul className="social-top">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF}  className="fa fa-facebook"/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter}  className="fa fa-twitter"/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram}  className="fa fa-instagram"/></a></li>
                           <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn}  className="fa fa-linkedin"/></a></li>
                        </ul>
                    </div>             
                </div>
            </div>
        </div>
        <div className = "nav2">
             <div className="header-lower">
                <div className="container1">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="logo-box">
                                <a href="../../index.html"></a>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div className="container2">
                  <nav>
                    <label htmlFor="btn" className="icon">
                      <span className="fa fa-bars"></span>
                    </label>
                    <input type="checkbox" id="btn" className='inp'/>
                    <ul>
                      <li><a href="../../index.html" >Home</a></li>
                      <li>
                        <label htmlFor="btn-1" className="show">Login</label>
                        <a href="#">Login </a>
                        <input type="checkbox" id="btn-1" className ='inp'/>
                        <ul>
                           <li><a href="../Manager/login.html">Manager </a></li>
                           <li><a href="../Warden/login.html">Warden</a></li>
                           <li><a href="../Administrator/login.html">Staff</a></li>
                           <li><a href="../Student/login.html">Student</a></li>
                           <li><a href="login.html">Security</a></li>
                        </ul>
                      </li>
                        <li><a href="../register.html">Register</a></li>
                      <li><a href="../contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </div>
    </header>
<main>
  <div className="sbox"></div>        
  <div className="navbar ">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="#" className="nav-link">
          <span className="link-text logo-text">VJCETH</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 inn"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li id='ac' className="nav-item mm" onClick={this.change} name='account' >
        <a href="#"  className="nav-link char" name='account' >
        <FontAwesomeIcon icon={faUser}  className="ch nn fa-2x" name='account' aria-hidden="true" />
          <span className="link-text" name='account' >Account</span>
        </a>
      </li>

      <li  id='gt' className="nav-item "  onClick={this.change} name='gate' >
        <a href="#" className="nav-link char " name='gate' >
        <FontAwesomeIcon icon={faUnlock} className="ch nn fa-2x"aria-hidden="true" name='gate'/>
          <span className="link-text " name='gate'>GatePass</span>
        </a>
      </li>




      <li className="nav-item las" >
       <a href="../../index.html" className="nav-link char">
           
       <FontAwesomeIcon icon={faSignOutAlt} className="ch nn fa-2x" aria-hidden="true" />
            
          
           <span className="link-text">Logout</span>
        </a>
      </li>
    </ul>
  </div>  
{this.state.show==='account'?<Acc go={this.state.adata}/>:<Gate go={this.state.gdata}/>}
</main>
</div>
 </div>
    )
}else{
  return(
  <div className="preloader"></div>)
}
}
}

export default App
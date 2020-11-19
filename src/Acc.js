import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import './style_acc.scss'
import Notify from './notify';

class Acc extends Component{

    constructor(props){
      super(props)
      this.state ={
        fn:{}
      }
  
    }
    notifyy() {
      document.getElementById("not").style.display = "block";
      document.getElementById("fee").style.display = "none";
      document.getElementById("nm").style.color = "#2b5d8a";
      document.getElementById("nm").style.fontWeight = "bold";
      document.getElementById("fk").style.color = "#141418";
      document.getElementById("fk").style.fontWeight = "medium";
      document.getElementById("nm2").style.color = "#2b5d8a";
      document.getElementById("nm2").style.fontWeight = "bold";
      document.getElementById("fk2").style.color = "#141418";
      document.getElementById("fk2").style.fontWeight = "medium";

  }
   feedb() {
      document.getElementById("not").style.display = "none";
      document.getElementById("fee").style.display = "block";
      document.getElementById("fk").style.color = "#2b5d8a";
      document.getElementById("fk").style.fontWeight = "bold";
      document.getElementById("nm").style.color = "#141418";
      document.getElementById("nm").style.fontWeight = "medium";
      document.getElementById("fk2").style.color = "#2b5d8a";
      document.getElementById("fk2").style.fontWeight = "bold";
      document.getElementById("nm2").style.color = "#141418";
      document.getElementById("nm2").style.fontWeight = "medium";
  } 
up(){
  let ob=this.state.fn;
  document.getElementById("Register_number").value=ob["Register_number"]
  document.getElementById("First_name").value=ob["First_name"];
  document.getElementById("Last_name").value=ob["Last_name"];
  document.getElementById("Email").value=ob["Email"];
  document.getElementById("Address").value=ob["Address"];
  document.getElementById("Contact_1").value=ob["Contact_1"];
  document.getElementById("Contact_2").value=ob["Contact_2"];
  document.getElementById("Health_issues").value=ob["Health_issues"];
  document.getElementById("M1").style.display = "none";
  document.getElementById("M2").style.display = "grid";
  document.getElementById("M3").style.display = "none";
}
up1(){
  document.getElementById("M1").style.display = "none";
  document.getElementById("M2").style.display = "none";
  document.getElementById("M3").style.display = "grid";
}
can(e){
  if(e.target.name==="save"){
    alert("Account Datails are Updated");
    let ob=this.state.fn;
  ob["First_name"]=document.getElementById("First_name").value;
  ob["Last_name"]=document.getElementById("Last_name").value;
  ob["Email"]=document.getElementById("Email").value;
  ob["Address"]=document.getElementById("Address").value;
  ob["Contact_1"]=document.getElementById("Contact_1").value;
  ob["Contact_2"]=document.getElementById("Contact_2").value;
  ob["Health_issues"]=document.getElementById("Health_issues").value;
  this.setState({fn:ob})
  document.getElementById("M1").style.display = "grid";
  document.getElementById("M2").style.display = "none";
  document.getElementById("M3").style.display = "none";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }else if(e.target.name==="savep"){
    alert("Password Updated");
    document.getElementById("M1").style.display = "grid";
  document.getElementById("M2").style.display = "none";
  document.getElementById("M3").style.display = "none";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }else{ 
    document.getElementById("M1").style.display = "grid";
    document.getElementById("M2").style.display = "none";
    document.getElementById("M3").style.display = "none";
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    }
}

render(){
  let x =[];
  x=this.props.go;
  this.state.fn=x;
  if(this.state.fn)
    return(
      <div className='acc'>
        <div className="mbox">                       
    <div  className=" col1" >
      <h1>Account</h1> 
    </div>
    <div className="maingrid" id="M1">
        <div className="grid1">
    <div className="bl1"><h4>{this.state.fn.First_name} {this.state.fn.Last_name}</h4><br/>
                        <div className="lab"><a href="#!" className="bla" onClick={this.up.bind(this)}>Update</a>
                          <a href="#!" className="bla" onClick={this.up1.bind(this)}>Change Password</a>
                          <a href="#!" className="bla">Deactivate</a></div></div>
        </div>
        <div className="grid2">
          <div className="pic">
            <center><img src={this.state.fn.img} alt='the profile picture' className="img-m"/> </center> </div>
            
    <div className="info"><center><div className="hh">{this.props.go.Register_number}</div></center>
            <div className="grid-container">
            <div className="grid-item bb">Status</div>
              <div className="grid-item" style={{"color":"darkgreen"}}><b>{this.props.go.Status}</b></div>
              
              <div className="grid-item bb">First Name</div>
              <div className="grid-item">{this.state.fn.First_name}</div>
              <div className="grid-item bb">Last Name</div>
              <div className="grid-item">{this.state.fn.Last_name}</div>
              <div className="grid-item bb">Address</div>
              <div className="grid-item">{this.state.fn.Address}</div>
              <div className="grid-item bb">Email</div>
              <div className="grid-item">{this.state.fn.Email}</div>
              <div className="grid-item bb">Role</div>
              <div className="grid-item">{this.state.fn.Role}</div>
            </div>
            </div>

        </div>
        <div className="grid3">
          <div className="option">
            <div className="option-a sp">
              <a href="#!" onClick={this.notifyy}><div className="notify item" id="nm">Notification</div></a>
              <a href="#!" onClick={this.feedb}><div className="feedback " id="fk">Feedback</div></a>
            </div>
            <div className="option-b sp">
              <center><a href="#!" className="notify"onClick={this.notifyy} id="nm2">Notification</a>/
            <a href="#!" className="feed" onClick={this.feedb} id="fk2">Feedback</a>
          </center>
          </div>
          </div>
          <div className="content">
            <div className="notify-a" id="not">
                <table  id="hd"><thead>
                  <tr>
                  <th className="no">#</th>
                  <th className="con">Content</th>
                  <th className="dat">Date</th>
                  <th></th>
                  <th></th>
                  </tr>
                  </thead>
                  <tbody className='bd'>
                  <tr>
                  <td>1</td>
                  <td>Gate Pass Request</td>
                  <td>2013-09-29T18:46:19-0700 </td>
                  <td> <a href="#"><FontAwesomeIcon icon={faEye} className="ic" aria-hidden="true" /></a></td>
                  <td> <a href="#"><FontAwesomeIcon icon={faTrash} className="ic" aria-hidden="true" /></a></td>
                   </tr> 
                  </tbody>
                </table>
                <div className='non'>
                <Notify tb={this.props.go.inbox}/>
                </div>
            </div>

            <div className="feed-a" id="fee">
              <p>
                Please provide your feedback below:
            </p>
                <div className="row">
                    <div className="col-sm-12 form-group">
                    <h5 className="r-s"><b>How do you rate your overall experience?</b></h5>
                    <p>
                        <input type="radio" name="experience" id="radio_experience" value="bad" />
                        Bad
                        <input type="radio" name="experience" id="radio_experience" value="average" />
                        Average
                        <input type="radio" name="experience" id="radio_experience" value="good" />
                        Good
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 form-group">
                        <label htmlFor="comments">
                            Comments:</label>
                        <textarea className="text-ar" type="textarea" name="comments"  placeholder="Your Comments" maxLength="6000" rows="7"/>
                    </div>
                <input type="submit" className="sub"/>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div className="main-grid" id="M2">
      <div className="grid_0">
      <div className="he">
          <div className="head">
            <div><h3>Updation Form</h3></div>
          </div>
          <div className="cont">
          <div className="picup">
            <div className="sm">
          <div><center><img src={this.props.go.img} alt='the profile picture' className="img-mi"/></center></div>
          <div><center> <label htmlFor="myFile" className="upbto">Upload Photo</label></center></div>
          <input type="file" id="myFile" name="filename" className="upbt" accept=".jpg, .jpeg, .png" />
         </div>
          </div>
          <div className="infoup">
            <div><h6>Register Number *</h6>
                  <input type="text" className="br" id="Register_number" /></div>
                  <div className='ftwo'>
                    <div>
                    <h6>First Name *</h6>
                  <input type="text" className="br2" id="First_name" />
                  </div>
                  <div>
                    <h6>Last Name *</h6>
                  <input type="text"  className="br2" id="Last_name"  />
                  </div>
                  </div>
                  <div><h6>Email *</h6>
                  <input type="text"  className="br" size="78" id="Email" /></div>
                  <div><h6>Address *</h6>
                  <textarea type="text" className="bri" rows="3" id="Address" /></div>
                  <div className='ftwo'>
                    <div>
                    <h6>Mobile Number 1 *</h6>
                  <input type="text"  className="br2"  id="Contact_1" />
                  </div>
                  <div>
                    <h6>Mobile Number 2 *</h6>
                  <input type="text"  className="br2" id="Contact_2"  />
                  </div>
                  </div>
                  <div><h6>Health Issues *</h6>
                  <textarea type="text"  className="bri" rows="3" id="Health_issues" /></div>
                  
          </div>
          <div className="fx">
          <div>
            <center><button type="submit" className="upti" name="save" onClick={this.can.bind(this)}>Save</button></center></div>
            <div className="hgt"></div>
          <div>
          <center>
          <button type="submit" className="uptj" name="discard" onClick={this.can.bind(this)} >Discard</button></center></div>
          </div>
          
          </div>
        </div>
      </div>
      <div className="grid_1"></div>
    </div>
    <div className="main-grid1" id="M3">
      <div className="grid_0">
      <div className="he">
          <div className="head">
            <div><h3>Update Password</h3></div>
          </div>
          <div className="cont">
          <div className="pfx">
          <div><h6>Current Password *</h6>
                  <input type="text" className="br" id="Ctpass" /></div>
          <div><h6>New Password *</h6>
                  <input type="text" className="br" id="Cfpass1" /></div>
          <div><h6>Confirm New Password *</h6>
                  <input type="text" className="br" id="Cfpass2" /></div>
                  <div className="hgt1"></div>
          <div className="passbtn">
          <div>
            <center><button type="submit" className="upti" name="savep" onClick={this.can.bind(this)}>Save</button></center></div>
            <div className="hgt"></div>
          <div>
          <center>
          <button type="submit" className="uptj" name="discardp" onClick={this.can.bind(this)} >Discard</button></center></div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className="grid_1"></div>
    </div>
</div>
</div>
    )

 
}
}

export default Acc
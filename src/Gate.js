import { faEye, faPlus, faRetweet, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Component} from 'react';
import './style_gate.scss'
import Qrread from './qrreader';
class Gate extends Component{
    constructor(props){
      super(props)
      this.state ={
        data:this.props.go.inbox,
        no:-1,
        id:"Error",
        name:"Error",
        date:"Error",
        time:"Error",
        type:"Error",
        img:"Error",
        desc:"Error",
        fdata:{"Content":"NO DATA","Date":"NO DATA","Desc":"NO DATA","Pass_number":"NO DATA","User_name":"NO DATA","read":false},
        his:this.props.go.history,
        ctime:"Error"
      }
  this.fun=this.fun.bind(this);
  this.bt=this.bt.bind(this);
    }
    
    fun(e){
      if(e.target.getAttribute('name')==='not'){
        if( document.getElementById("P1").style.display = "none"){
          document.getElementById("P1").style.display = "block";
          document.getElementById("N1").classList.remove('dim');
          document.getElementById("N2").classList.add('dim');
          document.getElementById("P2").style.display = "none";
          document.getElementById("N3").classList.add('dim');
          document.getElementById("P3").style.display = "none";
      }}else if(e.target.getAttribute('name')==='qr'){
        if( document.getElementById("P2").style.display = "none"){
          document.getElementById("P2").style.display = "grid";
          document.getElementById("N2").classList.remove('dim');
          document.getElementById("N1").classList.add('dim');
          document.getElementById("P1").style.display = "none";
          document.getElementById("N3").classList.add('dim');
          document.getElementById("P3").style.display = "none";
      }
      }else{
        if( document.getElementById("P3").style.display = "none"){
          document.getElementById("P3").style.display = "grid";
          document.getElementById("N3").classList.remove('dim');
          document.getElementById("N1").classList.add('dim');
          document.getElementById("P1").style.display = "none";
          document.getElementById("N2").classList.add('dim');
          document.getElementById("P2").style.display = "none";
      }
      }
      } 
      btn(i){
        let array = [...this.state.data];
      array[i-1].read=true;
        this.setState({
          data:array,
          id:this.state.data[i-1].Pass_number,
          name:this.state.data[i-1].User_name,
          date:this.state.data[i-1].Date,
          time:this.state.data[i-1].Time_duration,
          type:this.state.data[i-1].Pass_type,
          img:this.state.data[i-1].user_image,
          desc:this.state.data[i-1].Desc,
          no:i-1
        })
      if( document.getElementById("myModal").style.display = "none"){
        document.getElementById("myModal").style.display = "block";
      }
      }
      btnh(j){
        this.setState({
          id:this.state.his[j-1].Pass_number,
          name:this.state.his[j-1].User_name,
          date:this.state.his[j-1].Date,
          time:this.state.his[j-1].Time_duration,
          type:this.state.his[j-1].Pass_type,
          img:this.state.his[j-1].user_image,
          desc:this.state.his[j-1].Desc
        })
      if( document.getElementById("myModali").style.display = "none"){
        document.getElementById("myModali").style.display = "block";
      }
      }   
      bn(){
        this.setState({
          id:this.state.fdata.Pass_number,
          name:this.state.fdata.User_name,
          date:this.state.fdata.Date,
          time:this.state.fdata.Time_duration,
          type:this.state.fdata.Pass_type,
          img:this.state.fdata.user_image,
          desc:this.state.fdata.Desc,
          show:false
        })
      if( document.getElementById("myModal").style.display = "none"){
        document.getElementById("myModal").style.display = "block";
      } 
      }
      bt(){
        document.getElementById("myModal").style.display = "none";
      }
      find(){
        let k=0,a=document.getElementById("inptxt").value;
      if(a!==""&& /^\d+$/.test(a)){
        while(k<this.state.data.length){
          if(parseInt(a)===this.state.data[k].Pass_number){
            this.setState({fdata:this.state.data[k]})
          }
          k=k+1;
        }
        document.getElementById("authe").style.display = "none";
        document.getElementById("fauth").style.display = "table";
        document.getElementById("Cl").style.display = "block"
      }  
      }
      cancel(){
        document.getElementById("authe").style.display = "table";
        document.getElementById("fauth").style.display = "none";
        document.getElementById("Cl").style.display = "none";
        document.getElementById("inptxt").value=''
        this.setState({fdata:{"Content":"NO DATA","Date":"NO DATA","Desc":"NO DATA","Pass_number":"NO DATA","User_name":"NO DATA","read":false}})
      }
      refresh(){
        alert("Ayine Dataset set aaki thaaa myree....Guhaahaaa")
        this.setState({data:this.props.go.inbox})
      }
      confirm(){
        function formatAMPM(date) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; 
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
        var array = [...this.state.data],array1=[...this.state.his]; 
        var index = this.state.no;
        if (index !== -1) {
        array1.push(array[index])
        array.splice(index, 1);
        this.setState({data: array,his:array1,ctime:formatAMPM(new Date)});
        document.getElementById("myModal").style.display = "none";
        
  }
      }
      close(){
        document.getElementById("myModali").style.display = "none";
      }
      qr(){
        alert("working")
        this.setState({show:true})
      }
render(){
  window.onclick = function(event) {
    var modal=document.getElementById("myModal")
    var modal1=document.getElementById("myModali")
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  let i=0,j=0;
  let sty={"font-weight":"750"};
    return(
        <div className='gte'>
        <div id="myModal" className="modal">


        <div className="modal-content">
          <div className="modal-header">
          <span className="close" id='cls' onClick={this.bt}>&times;</span>
      
            <h2>Student Details</h2>
          </div>
      
          <div className="profile">
      
            <div className="Tag-no">
              <center>Pass Number : {this.state.id}</center>
            </div>
          
            <div className="info-part">
              <div  className="student-image">
             
                <img src={this.state.img} alt='the profile picture' className='pic'/>
              </div>
              <div className="details">
                <div>
                Type:<br/>
                Name: <br/>
                Date: <br/>
                Time Duration: <br/>
                Description:<br/>
              </div>
              <div className="details-answer">
               {this.state.type}<br/>
               {this.state.name}<br/>
               {this.state.date}<br/>
                {this.state.time}<br/>
                {this.state.desc}<br/>
              </div>
          
              </div>
          
          </div>
          
          
          <div className="submit-part">
            <center>
              <input type="number" placeholder="Enter authentication code"/>
            <button type="submit" className="confirm-button" onClick={this.confirm.bind(this)}>Confirm</button>
            <button type="submit" className="decline-button">Decline</button>
          </center>
          </div>
          </div> 
        </div>
      </div>
      <div id="myModali" className="modali">


        <div className="modal-content">
          <div className="modal-header">
          <span className="close" id='cls' onClick={this.close.bind(this)}>&times;</span>
      
            <h2>Student Details</h2>
          </div>
      
          <div className="profile">
      
            <div className="Tag-no">
              <center>Pass Number : {this.state.id}</center>
            </div>
          
            <div className="info-part">
              <div  className="student-image">
             
                <img src={this.state.img} alt='the profile picture' className='pic'/>
              </div>
              <div className="details">
                <div>
                Type:<br/>
                Name: <br/>
                Date: <br/>
                Passed Time: <br/>
                Description:<br/>
              </div>
              <div className="details-answer">
               {this.state.type}<br/>
               {this.state.name}<br/>
               {this.state.date}<br/>
                {this.state.ctime}<br/>
                {this.state.desc}<br/>
              </div>
          
              </div>
          
          </div>
          
          
          <div className="submit-part">
            <center>
            <button type="submit" className="confirm-button" onClick={this.close.bind(this)}>Close</button>
          </center>
          </div>
          </div> 
        </div>
      </div>
      <div className="mbox">                       
      <div  className=" col1">
        <h1>Gate Pass</h1> 
      </div>
      <div className="main-grid">
        <div className="grid0">
          <button type="button" id='N2' className ="sec n2" onClick={this.fun} name='qr'>QR-Scanner</button>
          <button type="button" id='N1' className ="sec n1 dim" onClick={this.fun} name='not'>Notification</button>
          <button type="button" id='N3' className ="sec n3 dim" onClick={this.fun} name='his'>History</button></div>
         
        <div className="grid1">
          
        <div id='P1' className="p1" >
        <div className="he">
          <div className="head">
            <div><h4>Gate pass-II confirmation</h4></div>
            
          </div>
        </div>
  
          <div className="table1 grid3">
            <div  className="intable1">
              <div className="lf">
              <input type="text" placeholder="Search by Id number..." name="search" id="inptxt"/>
              <a href="#!" className="sear"><FontAwesomeIcon icon={faSearch}  onClick={this.find.bind(this)} className="fa fa-search"/></a><div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <button className="clear" id="Cl" onClick={this.cancel.bind(this)}>Clear Search</button></div>
              <div >  <FontAwesomeIcon icon={faRetweet}  onClick={this.refresh.bind(this)} className="fa fa-search rg"/></div>
            
             
           </div>
           <table  id="hd"><thead>
                  <tr>
                  <th>#</th>
                <th>ID No.</th>
              <th >Name</th>
              <th>Date</th>
               <th className="no">Vie</th>
                  </tr>
                  </thead>
                  <tbody className='bd'>
                  <tr class ='second'>
              <td>2</td>
              <td>331</td>
              <td>Tony Stark</td>
              <td>12/12/20</td>
              <td> <a href="#"><FontAwesomeIcon icon={faEye} class="ic" aria-hidden="true" /></a></td>
               </tr> 
                  </tbody>
                </table>
                <div className="non">
                <table id="authe">  
                
                <tbody className="nt">
                    {this.state.data.map(dt=>{
                      i=i+1;
                        return(
                <tr style={dt.read?null:sty}>
                  <td>{i}</td>
                 <td>{dt.Pass_number}</td>
            <td>{dt.User_name}</td>
                 <td >{dt.Date} </td>
                 <td > <a href="#!"><FontAwesomeIcon icon={faEye} class="ic" aria-hidden="true" onClick={this.btn.bind(this,i)} /></a></td>
                  </tr> 
                        )
                    })}
                  </tbody> 
                </table> 
                <table id="fauth">  
                
                <tbody className="nt">
                    {
                <tr >
                  <td>1</td>
                 <td>{this.state.fdata.Pass_number}</td>
            <td>{this.state.fdata.User_name}</td>
                 <td >{this.state.fdata.Date} </td>
                 <td > <a href="#!"><FontAwesomeIcon icon={faEye} class="ic" aria-hidden="true" onClick={this.bn.bind(this)} /></a></td>
                  </tr> 
                        }
                  </tbody> 
                </table> 
                </div>
           </div>  
  
      </div>
      <div id='P2' className="p2" >
      <div className="he">
          <div className="head">
            <div><h4>Gate pass confirmation</h4></div>
            
          </div>
        </div>
        <div className="qr">
          {!this.state.show && <center><img src="data:image/png;base64,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" alt="qrcode" className="qrc"/>
                <div className="down">
                  <div className="info-q">
                    Scan your QR code to display the gate pass confirmation
                  </div>
                  
                 
                </div>
        </center>}
        {/* {this.state.show && <Qrread/>} */}
          
          <span className="dot" ><FontAwesomeIcon icon={faPlus}   className="fa fa-search qrcd"/></span>
          
          </div>
      </div>
      <div id='P3' className="p3" >
      <div className="he">
          <div className="head">
            <div><h4>Gate pass confirmation History</h4></div>
          </div>
        </div>
        <div>
        <div className="table1 grid3">
            <div  className="intable1">
              <div className="lf">
              <input type="text" placeholder="Search by Id number..." name="search" id="inptxt"/>
              <a href="#!" className="sear"><FontAwesomeIcon icon={faSearch}  onClick={this.find.bind(this)} className="fa fa-search"/></a><div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <button className="clear" id="Cl" onClick={this.cancel.bind(this)}>Clear Search</button></div>
              
            
             
           </div>
           <table  id="hd"><thead>
                  <tr>
                  <th>#</th>
                <th>ID No.</th>
              <th >Name</th>
              <th>Date</th>
               <th className="no">Vie</th>
                  </tr>
                  </thead>
                  <tbody className='bd'>
                  <tr class ='second'>
              <td>2</td>
              <td>331</td>
              <td>Tony Stark</td>
              <td>12/12/20</td>
              <td> <a href="#"><FontAwesomeIcon icon={faEye} class="ic" aria-hidden="true" /></a></td>
               </tr> 
                  </tbody>
                </table>
                <div className="non">
                <table id="authe">  
                
                <tbody className="nt">
                    {this.state.his.map(dt=>{
                      j=j+1;
                        return(
                <tr >
                  <td>{j}</td>
                 <td>{dt.Pass_number}</td>
            <td>{dt.User_name}</td>
                 <td >{dt.Date} </td>
                 <td > <a href="#!"><FontAwesomeIcon icon={faEye} class="ic" aria-hidden="true" onClick={this.btnh.bind(this,j)} /></a></td>
                  </tr> 
                        )
                    })}
                  </tbody> 
                </table> 
                </div>
           </div>
           </div>
      </div>
    </div>
        <div className="grid2"></div>
      </div>
  </div>
  </div>
 
    )
}
}

export default Gate
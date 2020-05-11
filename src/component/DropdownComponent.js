import React from "react"
import AboutDropComponent from'./AboutDropComponent'
import menuArray from"./menuArray"

class DropdownComponent extends React.Component{
sm;

constructor(){
    super()
    this.state={
        showDropMenu:true
    }
    this.btnclick=this.btnclick.bind(this)
}

btnclick(){
    this.setState({
        showDropMenu:!this.state.showDropMenu
    })
}


render(){
   
    if(this.state.showDropMenu===true){
        return(
             
    <div className="btn_home" onClick={this.btnclick}>{this.props.menu.title}
    
    
    </div>
      
        )
    
    }else{
        let sms;
        if(this.props.menu.hasOwnProperty('submenu')){
            

           sms = this.props.menu.submenu.map(function(m,index){
                return   <AboutDropComponent 
                key={index}
                menu={m}/>
              })
            
        }

        return(
            <div className="btn_home" onClick={this.btnclick}>{this.props.menu.title}
            {sms}
            </div>      
        )
    }





}

}
export default DropdownComponent
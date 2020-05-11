import React from "react"
class AboutDropComponent extends React.Component{
    render(){
        return(
<div>
<div className="dropmenu">
    {this.props.menu.title}
</div>

</div>

        )
    }
}
export default AboutDropComponent
import React from "react";
import "./picCard.css";

class PicCard extends React.Component{
	constructor(props){
	super(props)
	}
render (){

	return (
		<div>
		
			<div className = "card" onClick = {() => {
				this.props.handleClick(this.props.index)
			}}></div>

			<div className = "img-box">
				<img src ={this.props.image} />
			</div>
		</div>

		); 
}

}

export default PicCard; 
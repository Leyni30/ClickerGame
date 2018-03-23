import Rect from "react";
import "./picCard.css";

class picCard extends React.Component{
render (){

	return (
		<div className = "card" onClick = {() => {
			this.props.handleClick(this.props.index)
		}}>

		<div className = "img-box">
		<img src ={this.props.image} />
		</div>
		</div>

		);
}

}

export default picCard;
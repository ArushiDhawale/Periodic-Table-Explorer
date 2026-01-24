import './SmallBox.css';

// passing the color as a prop to get different color for different box
const SmallBox = ({color}) => {
    return (
        <div 
        className="small-box" style={{backgroundColor: color}}>
        </div>
    );

}

export default SmallBox;


const Circle = ({ color }) => {
  const circleStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: color,
    margin: '10px',
  };

  return (
    <div style={circleStyle}></div>
  );
}

export default Circle;
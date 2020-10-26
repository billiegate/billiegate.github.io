function Button(props) {
    return (
      <button type="button" className={`px-4 py-2 rounded ${props.className}`}>
          {
            props.children
          }
      </button>
    );
}
  
export default Button;
  
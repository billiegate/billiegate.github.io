function Badge(props) {
  return (
    <div className={`py-2 px-4 rounded flex ${props.className}`}>
        {
          props.children
        }
    </div>
  );
}

export default Badge;

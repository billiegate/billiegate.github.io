function Badge(props) {
  return (
    <a href={props.href}>
      <div className={`py-2 px-4 rounded flex ${props.className}`}>
        {
          props.children
        }
      </div>
    </a>
  );
}

export default Badge;

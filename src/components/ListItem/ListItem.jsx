const ListItem = ({ children }) => {
  return (
    <li className="flex gap-2 items-center">
      <span className="w-6 h-6 text-white bg-tomato rounded-full grid place-items-center">
        &#10003;
      </span>
      {children}
    </li>
  );
};

export default ListItem;

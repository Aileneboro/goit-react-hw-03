const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="type contact name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;

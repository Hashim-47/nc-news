const OrderBy = ({ selectedOrderBy, setSelectedOrderBy }) => {
  const handleChange = (e) => {
    setSelectedOrderBy(e.target.value);
  };

  return (
    <div className="OrderBy">
      <select onChange={handleChange} id="OrderBy" value={selectedOrderBy}>
        <option value={"desc"}>desc</option>
        <option value={"asc"}>asc</option>
      </select>
    </div>
  );
};
export default OrderBy;

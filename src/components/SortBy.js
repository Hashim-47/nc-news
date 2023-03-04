const SortBy = ({ selectedSortBy, setSelectedSortBy }) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setSelectedSortBy(undefined);
    } else {
      setSelectedSortBy(e.target.value);
    }
  };

  return (
    <div className="SortBy">
      <select onChange={handleChange} id="SortBy" value={selectedSortBy}>
        <option value="">All</option>
        <option value={"created_at"}>Date</option>
        <option value={"comment_count"}>Comment Count</option>
        <option value={"votes"}>Votes</option>
      </select>
    </div>
  );
};
export default SortBy;

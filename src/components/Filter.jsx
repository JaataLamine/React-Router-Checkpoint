// The Filter component allow us to filter by title or by rate
const Filter = ({ handleFilterChange, titleFilter, rateFilter }) => {
  return (
    <div className="row g-3 mb-4 filter">
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={(e) => handleFilterChange("title", e.target.value)}
        />
      </div>
      <div className="col">
        <input
          className="form-control"
          type="number"
          placeholder="Filter by rating"
          value={rateFilter}
          onChange={(e) => handleFilterChange("rating", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;

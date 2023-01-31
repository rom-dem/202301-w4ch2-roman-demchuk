import { useState } from "react";

const SearchForm = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form className="search-form">
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            onChange={handleChange}
            type="text"
            id="search"
            className="search form-control"
            value={search}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

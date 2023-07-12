import {
  faMagnifyingGlass,
  faMagnifyingGlassPlus,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleIconClick() {
    setShowSearch(true);
  }

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearchClick(e) {
    e.preventDefault();
    if (searchTerm) {
      setSearchTerm("");
      setShowSearch(false);
      navigate(`/city/${searchTerm}`);
    }
  }

  function handleRefreshClick() {
    window.location.reload();
  }

  return (
    <div className="header">
      <a href="/" style={{ paddingLeft: "10px", color: "white" }}>
        Forecast
      </a>
      <div style={{ paddingRight: "10px", display: "flex" }}>
        <FontAwesomeIcon
          icon={faRotateRight}
          className="refresh-icon"
          onClick={handleRefreshClick}
        />
        {showSearch ? (
          <form onSubmit={handleSearchClick}>
            <input
              type="text"
              onChange={handleInputChange}
              value={searchTerm}
              placeholder="search city"
            />
            <button type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </button>
          </form>
        ) : (
          <FontAwesomeIcon
            icon={faMagnifyingGlassPlus}
            className="icon"
            onClick={handleIconClick}
          />
        )}
      </div>
    </div>
  );
}
export default Header;

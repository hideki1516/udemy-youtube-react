import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <SHeader>
      <div className="item">
        <Link to="/">VideoTube</Link>
      </div>
      <div className="item">
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </SHeader>
  );
};

const SHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  height: 56px;
  width: 100%;
  background-color: #202020;

  a {
    color: white;
    font-size: 1.2rem;
    line-height: 56px;
    padding-left: 1rem;
    text-decoration: none;
  }

  .item {
    &:first-child {
      flex-grow: 1;
    }
    &:last-child {
      flex-grow: 2;
    }
  }

  form {
    width: 60%;
    height: 32px;
    display: flex;
    margin: 12px 0;

    input {
      width: 80%;
      text-indent: 0.5rem;
      border: #121212;
      background-color: white;
      color: white;
    }

    button {
      width: 20%;
      background-color: #303030;
      color: white;
      border: none;
    }
  }
`;

export default Header;

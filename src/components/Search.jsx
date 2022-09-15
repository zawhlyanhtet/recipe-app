import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Search = function () {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = function (e) {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="search"
        value={input}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 auto;
  width: 50%;
  position: relative;

  input {
    color: #fff;
    font-size: 1rem;
    width: 100%;
    padding: 0.8rem 3rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
  }

  svg {
    color: #fff;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
  }
`;

export default Search;

import React from "react";

const Search = ({ onChange, search }) => {
    console.log();
    return (
        <div>
            <label htmlFor="exampleDataList" className="form-label"></label>
            <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Search..."
                type="text"
                value={search}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default Search;

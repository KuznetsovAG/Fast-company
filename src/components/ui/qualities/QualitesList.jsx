import React from "react";
import PropTypes from "prop-types";
import Quality from "./Qualites";
const QualitesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Quality {...qual} key={qual._id} />
            ))}
        </>
    );
};
QualitesList.propTypes = {
    qualities: PropTypes.array
};
export default QualitesList;

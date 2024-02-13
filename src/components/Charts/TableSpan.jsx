import React, { useState, useEffect, useCallback } from "react";

const TableSpan = ({ data = [], index, background, className }) => {
    const [width, setWidth] = useState(getInitialWidth());

    const getCellWidth = useCallback(() => {
        return {
            maxWidth: getDataPoint(tryData(data, index)),
            background: background
        };
    }, [data, index, background]);


    useEffect(() => {
        setWidth(getCellWidth());
    }, [data, getCellWidth]);

    function getInitialWidth() {
        return "0";
    }

    function getDataPoint(statPoint) {
        const statPointFormatted = (statPoint * 100).toFixed(0);
        return statPointFormatted + "%";
    }

    function tryData(dataPoint, ind) {
        return (
            dataPoint &&
                dataPoint[ind] !==
                undefined ?
                dataPoint[ind] :
                ''
        );
    }

    const marginSide = (className) => {
        switch (className) {
            case "left-l5-data": return "marginLeft";
            case "right-l5-data": return "marginRight";
            default: return ""; // Or any other default value you prefer
        }
    }

    return (
        <>
            <span
                className={className}
                style={{ 
                    width: width.maxWidth, 
                    background: width.background,
                    [marginSide(className)]: '99%' // Using computed property name
                }}
            >
                {getDataPoint(tryData(data, index))}
            </span>
        </>
    );
};

export default TableSpan;
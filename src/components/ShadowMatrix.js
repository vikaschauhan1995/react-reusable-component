import React, { useState } from 'react';
import { checkMatrixData } from '../methods/checkMatrixData';
import styleVariable from '../styles/_variables.scss';
import '../styles/component/Matrix.scss';
import { ROW_INDEX, CELL_INDEX } from '../static/constant';
import { selectMerixCellsByShape } from '../methods/selectMerixCellsByShape';

const CELL_SIDE = styleVariable.matrixCellDimen;
export const Matrix = ({ matrix }) => {
  const [selectedCells, setSelectedCells] = useState([]);
  // const [selectedShape, setSelectedShape] = useState("");
  function hoverOnCell(obj) {

    const selectedCellsCoOrdinates = selectMerixCellsByShape(obj);
    setSelectedCells(selectedCellsCoOrdinates);
  }
  function isCellSelected(item) {
    for (let x = 0; x < selectedCells.length; x++) {
      if (selectedCells[x][ROW_INDEX] === item[ROW_INDEX] && selectedCells[x][CELL_INDEX] === item[CELL_INDEX]) {
        return true;
      }
    }
    return false;
  }
  const cell = (item) => {
    const isSelected = isCellSelected(item);
    // const cellBody = (item) => {
    //   const body = isSelected === true ? "" : item.cell;
    //   return body;
    // }
    return <div
      key={`${ROW_INDEX},${CELL_INDEX}`}
      className={`Matrix__cell`}
      onMouseOver={() => hoverOnCell(item)}
      style={{ width: `${CELL_SIDE}px`, height: `${CELL_SIDE}px`, backgroundColor: isSelected ? 'grey' : 'black', transition: 'all 0.2s ease-out' }}>
      <div className="Matrix__innerbody">
        {/* {cellBody(item)} */}
      </div>
    </div>
  }
  const row = (rowKey, arr, rowIndex) => {
    return arr.map((item, index) => {
      const innerRowKey = 'inner' + rowKey + '' + index;
      return <div className="Matrix__row" key={innerRowKey}>{cell({ cell: item, rowIndex, [CELL_INDEX]: index })}</div>
    });
  }
  const matrix_ = () => {
    return matrix.map((r, i) => {
      const rowKey = `row${i}`;
      return <div key={rowKey} className="Matrix__row">{row(rowKey, r, i)}</div>
    });
  }
  // console.log("selectedCells ===>>", selectedCells);
  return <div className="Matrix__container" style={{ border: '1px solid green' }}>
    {matrix_()}
  </div>
}

function ShadowMatrix({ matrix }) {
  const isDataCorrect = checkMatrixData(matrix);
  // return <div>{isDataCorrect === true ? "true" : "false"}</div>;
  return (
    <div>
      {isDataCorrect === true ?
        <Matrix matrix={matrix} />
        : "Wrong data for matrix"}
    </div>
  )
}

export default ShadowMatrix

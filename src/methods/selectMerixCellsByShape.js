import { ROW_INDEX, CELL_INDEX } from '../static/constant';

export function selectMerixCellsByShape(cell) {
  const selectedCellsCoOrdinates = [
    { [ROW_INDEX]: cell[ROW_INDEX] - 1, [CELL_INDEX]: cell[CELL_INDEX] },

    { [ROW_INDEX]: cell[ROW_INDEX] - 1, [CELL_INDEX]: cell[CELL_INDEX] - 1 },
    { [ROW_INDEX]: cell[ROW_INDEX] - 2, [CELL_INDEX]: cell[CELL_INDEX] },
    { [ROW_INDEX]: cell[ROW_INDEX] - 1, [CELL_INDEX]: cell[CELL_INDEX] + 1 },

    { [ROW_INDEX]: cell[ROW_INDEX], [CELL_INDEX]: cell[CELL_INDEX] + 1 },
    { [ROW_INDEX]: cell[ROW_INDEX], [CELL_INDEX]: cell[CELL_INDEX] + 2 },
    { [ROW_INDEX]: cell[ROW_INDEX] + 1, [CELL_INDEX]: cell[CELL_INDEX] + 1 },

    { [ROW_INDEX]: cell[ROW_INDEX], [CELL_INDEX]: cell[CELL_INDEX] },// middle

    { [ROW_INDEX]: cell[ROW_INDEX] + 1, [CELL_INDEX]: cell[CELL_INDEX] },
    { [ROW_INDEX]: cell[ROW_INDEX] + 2, [CELL_INDEX]: cell[CELL_INDEX] },
    { [ROW_INDEX]: cell[ROW_INDEX] + 1, [CELL_INDEX]: cell[CELL_INDEX] - 1 },


    { [ROW_INDEX]: cell[ROW_INDEX], [CELL_INDEX]: cell[CELL_INDEX] - 1 },
    { [ROW_INDEX]: cell[ROW_INDEX], [CELL_INDEX]: cell[CELL_INDEX] - 2 },
  ];
  return selectedCellsCoOrdinates;
}
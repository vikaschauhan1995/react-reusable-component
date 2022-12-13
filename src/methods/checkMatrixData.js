

export function checkMatrixData(data) {
  try {
    const isDataAnArray = Array.isArray(data);
    if (isDataAnArray === false) {
      return false;
    }
    const matrixLength = data.length;
    for (let x = 0; x < matrixLength; x++) {
      const isInnerDataAnArray = Array.isArray(data[x]);
      const innerDataLength = data[x].length;
      if (isInnerDataAnArray === false) {
        return false;
      }
      if (innerDataLength !== matrixLength) {
        return false;
      }
    }
    return true;
  } catch (err) {
    return false;
  }
}
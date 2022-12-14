export const scriptArray = [
  {
    script: "git status",
    output:
      `On branch master
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)`
  }, {
    script: "git add src/App.js",
    output:
      `warning: LF will be replaced by CRLF in src/App.js.
    The file will have its original line endings in your working directory`
  }
];

export const matrixData = [
  ["i", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["ii", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["iii", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["iv", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["v", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["vi", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["vii", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["viii", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["ix", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["x", 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

// const mData = 

export const ROW_INDEX = 'rowIndex';
export const CELL_INDEX = 'cellIndex';

export const DIAMOND_METRIX_SHAPE = 'diamondMetrixShape';
export const DIAMOND_OUTLINE_METRIX_SHAPE = 'diamondOutlineMetrixShape';

export const POST__COPY_CHARACTER_KEY = 'Post__copy_character_';
export const POST_ANIMATION_TARGET_CONTAINER = 'Post__animationTargetContainer'
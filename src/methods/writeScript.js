
function getAfterMilisecond(item, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, ms);
  });
}
export const writeScript = async (data, setList, setInput) => {
  const outPutList = [];
  for (let x = 0; x < data.length; x++) {
    const script = await getAfterMilisecond(data[x].script, 1000);
    const scriptArray = script.split("");
    const newScriptArray = [];
    outPutList[outPutList.length] = { script };
    outPutList[outPutList.length] = { output: data[x].output };
    for (let y = 0; y < scriptArray.length; y++) {
      const scriptLetter = await getAfterMilisecond(scriptArray[y], 100);
      newScriptArray[y] = scriptLetter;
      setInput(previousState => [...newScriptArray]);
      if (y === scriptArray.length - 1) {
        setTimeout(async () => {
          await setList(previousState => [...outPutList]);
          // setList(previousState => [...previousState, ""]);
          await setInput(previousState => []);
          if (x === data.length - 1) {
            outPutList.length = 0;
            await getAfterMilisecond("restart", 2000);
            await writeScript(data, setList, setInput);
          }
        }, 1000);
      }
    }
  }
}
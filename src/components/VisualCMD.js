import React, { useState, useEffect, useMemo } from 'react';
import { writeScript } from '../methods/writeScript';
import styles from '../styles/module/VisualCMD.module.scss';

function VisualCMD({ data }) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);

  const addItemsDelay = () => {
    writeScript(data, setList, setInput);
  }
  const Items = ({ list }) => {
    const l = list.map((item, index) => {
      if (item?.script) {
        return <li key={index}>Script: {item.script}</li>
      }
      return <li key={index}>{item.output}</li>
    });
    return l;
  }
  useEffect(() => {
    addItemsDelay();
  }, []);
  // console.log("list ==>>", list);
  return (
    <div className={styles.container}>
      <ul>
        <Items list={list} />
      </ul>
      {'>'}{input}|
    </div>
  )
}

export default VisualCMD;

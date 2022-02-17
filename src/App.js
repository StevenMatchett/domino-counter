import { Domino } from './Domino';
import './App.css';
import { useState } from 'react';

const startingDominos = [
  [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], 
  [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [2,2], 
  [2,3], [2,4], [2,5], [2,6], [3,3], [3,4], [3,5], 
  [3,6], [4,4], [4,5], [4,6], [5,5], [5,6], [6,6]
];

function App() {
  const [dominos, setDominos] = useState(startingDominos)

  const [undoStack, setUndoStack] = useState([]);
  console.log(undoStack)
  const remove = (index) => {
    const copyDominos = [...dominos];
    const removed = copyDominos.splice(index, 1);
    setDominos(copyDominos)
    setUndoStack([...undoStack, [index, ...removed]]);
  }

  const undo = () => {
    const copyUndo = [...undoStack]
    const copyDominos = [...dominos];
    const last = copyUndo.pop();
    setUndoStack(copyUndo);
    copyDominos.splice(last[0], 0, last[1]);
    setDominos(copyDominos)
  }

  const reset = () => {
    setUndoStack([]);
    setDominos(startingDominos)
  }

  const stats = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  }

  dominos.forEach(domino=>{
    domino.forEach(dots => {
      stats[dots]++;
    })
  })
  console.table(stats)
  return (
      <>
          <buton class='button' onClick={undo}>Undo</buton>
          <buton class='button' onClick={reset}>reset</buton>
          <div style={{ margin:"50px", display: 'grid', "grid-gap": "20px", "grid-template-columns": "repeat(7, 1fr)", "font-size": "20px", }}>
            <div style={{ margin:"50px", display: 'grid', "grid-gap": "20px", "grid-template-columns": "repeat(7, 1fr)", "font-size": "20px", }}>
                    {dominos.map((dom, index) => {
                      return <Domino topHalf={dom[0]} bottomHalf={dom[1]} index={index} callback={remove}/>
                    })}
            </div>
            <table style={{borderLeft:'solid', fontSize:40}}>
              <tr>
                <th>Dots</th>
                <th>Left</th>
              </tr>
              <tr>
                <td><img src="dots/blank.png"/></td>
                <td>{stats[0]}</td>
              </tr>
              <tr>
                <td><img src="dots/one.png"/></td>
                <td>{stats[1]}</td>
              </tr>
              <tr>
                <td><img src="dots/two.png"/></td>
                <td>{stats[2]}</td>
              </tr>
              <tr>
                <td><img src="dots/three.png"/></td>
                <td>{stats[3]}</td>
              </tr>
              <tr>
                <td><img src="dots/four.png"/></td>
                <td>{stats[4]}</td>
              </tr>
              <tr>
                <td><img src="dots/five.png"/></td>
                <td>{stats[5]}</td>
              </tr>
              <tr>
                <td><img src="dots/six.png"/></td>
                <td>{stats[6]}</td>
              </tr>
          
            </table>
          </div>
      </>
  )
}

export default App;

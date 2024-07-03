import { useState } from "react";
const initalBoard = () => Array(9).fill(null);


    function Logic(){
    const[boards, setBoards]= useState(initalBoard());
    const[next, setNext]= useState(true);
    const Winning_pattern= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    function handleEvent(index){
        const winner = calculateWinner(boards);
        if(winner || boards[index]) return

        const newBoard = [...boards]
        newBoard[index]= next ? 'X' : 'O';
        setBoards(newBoard);
        setNext(!next)
    }
    function calculateWinner(currentBoard){
        for(let i =0; i<Winning_pattern.length; i++){
         const [a, b, c] = Winning_pattern[i];
            if(currentBoard[a] && currentBoard[a]=== currentBoard[b] && currentBoard[a]=== currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;

    }
    function getMessage(){

        const winner = calculateWinner(boards)
        if(winner) return `Player ${winner} wins!`
        if(!boards.includes(null)) return null;
        return `Player ${next ? "X": "O"} turn`
    }
    function resetBtn(){
        setBoards(initalBoard);
        setNext(true)

    }

    return{boards, handleEvent,calculateWinner,getMessage,resetBtn}
}
export default Logic
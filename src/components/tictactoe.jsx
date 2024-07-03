import Logic from "./logic"


function TicTacToe(){
    const {boards, handleEvent, calculateWinner, getMessage,resetBtn} = Logic()

    return(
        <div className="main-section">
            <div className="status">
            {getMessage()}
            <button className="Reset-btn" onClick={resetBtn}>Reset</button>
            </div>
            <div className="boards">
                {
                    boards.map((board, index)=>(
                        <button className="btn" key={index} onClick={()=>handleEvent(index)} >{board}</button>   
                    ))
                }
            </div>
        </div>
    )

}
export default TicTacToe
// disabled={board !=null}
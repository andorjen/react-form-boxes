function Box({id, height, width, backgroundColor,deleteBox}){
    const styles = {
        height: `${height}px`,
        width:`${width}px`,
        backgroundColor:`${backgroundColor}`
    }
    return (
    <div id={id}>
        <div style={styles}></div>
        <button onClick={deleteBox(id)}>Remove the Box!</button>
    </div>
    )
}


export default Box;


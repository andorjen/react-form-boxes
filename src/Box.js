function Box({height, width, backgroundColor}){
    const styles = {
        height: `${height}px`,
        width:`${width}px`,
        backgroundColor:`${backgroundColor}`
    }
    return <div style={styles}></div>
}


export default Box;


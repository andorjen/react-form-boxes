/** Box component, displays one box with a button
 *
 * props:
 * {id, height, width, backgroundColor,deleteBox}
 * 
 * Boxlist -> Box
 */

function Box({id, height, width, backgroundColor,deleteBox}){
    function handleDelete(){
        deleteBox(id);
    }
    const styles = {
        height: `${height}px`,
        width:`${width}px`,
        backgroundColor:`${backgroundColor}`
    }
    return (
    <div>
        <div style={styles}></div>
        <button onClick={handleDelete}>Remove the Box!</button>
  
    </div>
    )
}


export default Box;


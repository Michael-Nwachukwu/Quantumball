const sitebtn = (props) => {
    return ( 
        <>
            <a href={`${props.site}`} className="px-5 py-1.5 text-xs text-black  opacity-75 heads rounded-lg">Visit Site</a>
        </>
    );
}
 
export default sitebtn;
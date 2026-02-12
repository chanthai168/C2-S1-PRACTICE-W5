
function Place(data){

    return (
        <>
        <div className="place">
            <img src={data.data.image.src} alt={data.data.image.alt} />
            <p>{data.data.title}</p>
            <p>{data.data.image.alt}</p>
        </div>
        </>
    )
}
export default Place;
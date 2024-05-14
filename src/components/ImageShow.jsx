import "./ImageShow.css";

export const ImageShow = ({image}) => {
    return (
        <div className="item">
            <img src={image} />
            {/* <img src={item.urls.raw} /> */}
        </div>
    )
}

export default ImageShow;
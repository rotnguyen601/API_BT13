import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({images}) => {
  const renderImages = images.map((item) => (
    <ImageShow image={item.urls.raw} />
  ));
  return <div className="list-images">{renderImages}</div>;
};

export default ImageList;
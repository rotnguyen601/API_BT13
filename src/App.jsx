import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { searchPhotos, getAllPhotos } from "./api";
import { useEffect, useState } from "react";

const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (term) => {
        setLoading(true);
        const photos = await searchPhotos(term);
        setImages(photos);
        setLoading(false);
    };

    useEffect(async () => {
        setLoading(true);
        const photos = await getAllPhotos();
        setImages(photos);
        setLoading(false);
    }, []);

    return (
        <>
            <SearchBar functionSearchParent={handleSearch} />
            {!loading && (<ImageList images={images} />)}
            {loading && (<>Đang load hình ảnh</>)}

        </>
    );
};

export default App;
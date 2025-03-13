import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Image } from "./interface/image.interface.ts";
import { ImageService } from "./service/ImageService.ts";
import AddImagePopUp from "./components/AddImagePopUp/AddImagePopUp.component.tsx";
import "./App.css";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel.component.tsx";

const queryClient = new QueryClient();

function App() {
    const [newImage, setNewImage] = useState<Image>({ id: 0, title: "", orderIndex: 0, imageUrl: "", description: "" });
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { data: images = [], refetch } = useQuery({
        queryKey: ["images"],
        queryFn: ImageService.fetchImages,
        staleTime: 1000 * 60 * 5, // Cache valide 5 minutes
    });

    const handleDelete = async (id: number) => {
        await ImageService.deleteImage(id);
        refetch();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await ImageService.addImage(newImage);
        setNewImage({ id: 0, orderIndex: 0, title: "", imageUrl: "", description: "" });
        setIsPopupOpen(false);
        refetch();
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className={`container ${isPopupOpen ? "popup-active" : ""}`}>
                <button className="add-button" onClick={() => setIsPopupOpen(true)}>+</button>
                <h1>Vitrine de Nath</h1>

                <CustomCarousel images={images}
                                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                                currentIndex={currentIndex}
                                onClick1={() => handleDelete(images[currentIndex]?.id)}
                                onClick2={() => setCurrentIndex((prev) => (prev + 1) % images.length)} />

                {isPopupOpen && (
                    <AddImagePopUp onClick={() => setIsPopupOpen(false)}
                                   onSubmit={handleSubmit}
                                   newImage={newImage}
                                   onChange={(e) => setNewImage({ ...newImage, imageUrl: e.target.value })}
                                   onChange1={(e) => setNewImage({ ...newImage, description: e.target.value })} />
                )}

                <footer>
                    <p>Description du projet: Une vitrine d'images en React et Spring Boot. Copyright Nathaniel</p>
                </footer>
            </div>
        </QueryClientProvider>
    );
}

export default App;
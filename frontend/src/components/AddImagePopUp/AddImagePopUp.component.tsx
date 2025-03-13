import {memo} from "react";
import {Image} from "../../interface/image.interface.ts";
import "./AddImagePopUp.component.css";

interface AddImagePopUpProps {
    onClick: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    newImage: Image;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddImagePopUp = memo(({onClick, onSubmit, newImage, onChange, onChange1}: AddImagePopUpProps) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close-btn" onClick={onClick}>&times;</span>
                <h2>Ajouter une image</h2>
                <form className="add-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="URL de l'image"
                        value={newImage.imageUrl}
                        onChange={onChange}
                        required
                    />
                    <input
                        type="text"
                        className="description"
                        placeholder="Description"
                        value={newImage.description}
                        onChange={onChange1}
                        required
                    />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
});

export default AddImagePopUp;

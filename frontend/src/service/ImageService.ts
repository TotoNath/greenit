import {Image} from "../interface/image.interface.ts";

const API_URL = "http://localhost:8080/api/images";

export const ImageService = {
    async fetchImages(): Promise<Image[]> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Erreur lors du chargement des images");
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    async deleteImage(id: number): Promise<boolean> {
        try {
            const response = await fetch(`${API_URL}/${id}`, {method: "DELETE"});
            if (!response.ok) throw new Error("Erreur lors de la suppression de l'image");
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    async addImage(newImage: { imageUrl: string; description: string }): Promise<Image | null> {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newImage),
            });
            if (!response.ok) throw new Error("Erreur lors de l'ajout de l'image");
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};
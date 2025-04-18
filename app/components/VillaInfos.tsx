"use client"
import {FC} from "react"
import {CookingPot, Waves, Bath, Bed, Square} from "lucide-react"

interface VillaInfosProps {
    surface: number,
    bedrooms: number,
    bathrooms: number,
    hasPool: boolean,
    hasKitchen: boolean
}

const VillaInfo: FC<VillaInfosProps> = ({
    surface, bedrooms,bathrooms,hasPool,hasKitchen
}) => {
    return (
        <div className="max-w-[800px] b mx-auto p-6 bg-white shadow-lg roudend-md">
            <h2 className="text-2xl font-semibold mb-4">
                Informations
            </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-2">
                        {hasPool && <Waves className="text-blue-500" />}
                        <span className="text font-medium">Piscine</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        {hasKitchen && <CookingPot className="text-red-500" />}
                        <span className="text font-medium">Cuisine Amménagée</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Bath className="text-green-500" />
                        <span className="text font-medium">{bathrooms} Salle(s) de bain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Bed className="text-yellow-500" />
                        <span className="text font-medium">{bedrooms} Chambre(s)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Square className="text-grey-500" />
                        <span className="text font-medium">{surface} m²</span>
                    </div>
                    <p className="px-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quae tenetur reprehenderit distinctio ratione inventore commodi quod quo corporis odio accusantium molestias, doloremque pariatur delectus at modi possimus qui harum fugiat laboriosam maiores, optio ab! Tempora, deleniti? Tempore nam minima maiores quos tenetur magnam, dolore minus totam alias molestiae error.</p>
                </div>
        </div>
    )
}

export default VillaInfo

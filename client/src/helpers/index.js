export function colorTypePokemon(input) {
    let colorType = ""
    switch (input) {  
        case "normal":
            colorType = "#9ca3af"
            break;
        case "fighting":
            colorType = "#DC2626"
            break;
        case "flying":
            colorType = "#A5B4FC"
            break;
        case "poison":
            colorType = "#7C3AED"
            break;
        case "ground":
            colorType = "#a7702e"
            break;
        case "rock":
            colorType = "#aa8e2a"
            break;
        case "bug":
            colorType = "#7ec35a"
            break;
        case "ghost":
            colorType = "#A78BFA"
            break;
        case "steel":
            colorType = "#6B7280"
            break;
        case "fire":
            colorType = "#ed6d24"
            break;
        case "water":
            colorType = "#3B82F6"
            break;
        case "grass":
            colorType = "#10B981"
            break;
        case "electric":
            colorType = "#FCD34D"
            break;
        case "psychic":
            colorType = "#EC4899"
            break;
        case "ice":
            colorType = "#BFDBFE"
            break;
        case "dragon":
            colorType = "#6366F1"
            break;
        case "dark":
            colorType = "#1F2937"
            break;
        case "fairy":
            colorType = "#F9A8D4"
            break;
        default:        
            colorType = "#D1D5DB"
      }
    return colorType
}

 
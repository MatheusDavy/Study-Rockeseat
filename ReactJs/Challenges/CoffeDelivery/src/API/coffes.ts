import {useState} from "react";
import nextId from "react-id-generator";  

export const AllCoffes = [
    {
      id: nextId(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
      informations: [
        'INFORMATIONS',
        'INFORMATION',
      ],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,00",
      amount: 1,
      isSelected: false,
    },
    {
      id: nextId(),
      image: 'data:image/jpeg;base64,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',
      informations: [
        'INFORMATIONS',
      ],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "10,00",
      amount: 1,
      isSelected: false,
    },
    {
      id: nextId(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrb93v-Kx_YJnZANXJcRhUSCsuH3HiOfoGQ&usqp=CAU',
      informations: [
        'INFORMATIONS',
        'INFORMATION',
        'INFORMATIO'
      ],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "15,00",
      amount: 1,
      isSelected: false,
    },
  ]
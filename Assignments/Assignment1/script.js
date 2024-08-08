var pets = [
    { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
    { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
    { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
    { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
    { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
    { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
    { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
    { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
    { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
    { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler{
    constructor(array){
        this.pets = array;
    }

    findPetsInAgeRange(minAge,maxAge){
        return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
    }

    listAdoptedPetsByDate(){
        return pets.filter(pet => pet.adopted).sort((a,b) => a.adoptedDate.localeCompare(b.adoptedDate));
    }

    listPets(...args){
        const createPetItem = (pet) =>{
            let petInfo = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
            if(pet.adopted){
                petInfo += ` | Adopted: ${pet.adoptedDate}`;
            }
            return petInfo;
        }

        let myList;
        if(args.length === 0){
            myList = pets;
        }
        else if(args.length === 1 && Array.isArray(args[0])){
            myList = args[0];
        }
        else{
            myList = args;
        }

        return myList.map(createPetItem);
    }

    calculateUniqueAdoptionFee(...petNames){
        const names = [...new Set(petNames)];
        const petList = this.pets.filter(pet => names.includes(pet.name));
        return petList.reduce((sum,pet) => sum + (pet.adoptionFee || 0), 0);
    }
}

Array.prototype.findPetsInAgeRange = function(min,max){
    return this.filter(pet => pet.age >= min && pet.age <= max);
}

Array.prototype.listPets = function(){
    const createPetItem = (pet) =>{
        let petInfo = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
        if(pet.adopted){
            petInfo += ` | Adopted: ${pet.adoptedDate}`;
        }
        return petInfo;
    };

    return this.map(createPetItem);
}

Array.prototype.calculateUniqueAdoptionFee = function(...petNames){
    const names = [...new Set(petNames)];
    const petList = this.filter(pet => names.includes(pet.name));
    return petList.reduce((sum,pet) => sum + (pet.adoptionFee || 0), 0);
}

Array.prototype.listAdoptedPetsByDate = function(){
    return this.filter(pet => pet.adopted).sort((a,b) => a.adoptedDate.localeCompare(b.adoptedDate));
}

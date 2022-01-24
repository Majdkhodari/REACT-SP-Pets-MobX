import { makeAutoObservable } from "mobx";
import petsData from "../src/petsData";
class PetsStore {
  pets = petsData;
  constructor() {
    makeAutoObservable(this);
  }

  handleAdopt = (petId) => this.pets.filter(pet.id !== petId);
}

const petStore = new PetsStore();
export default PetsStore;

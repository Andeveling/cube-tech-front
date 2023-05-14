import axios from 'axios';
import { IAccessory } from '../models/Item/Accessories/Accessory.types';

export const getAccessories = async () => {
  try {
    const response = await axios.get<IAccessory[]>('http://localhost:4000/accessories');
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

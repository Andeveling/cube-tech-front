import axios from 'axios';
import { IProfile } from '../models/Item/Profiles/Profile.types';

export const getProfiles = async () => {
  try {
    const response = await axios.get<IProfile[]>(' http://localhost:4000/profiles');
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

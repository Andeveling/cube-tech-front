import axios from 'axios';
import { GlazingBeadGlassResponse } from '../models/Item/GlazingBead/GlazingBeadGlassCaliber.types';
import { GlazingGlassCaliberAdapter } from '../models/Item/GlazingBead/GlazingBeadGlassCaliber.adapter';

export const getSystemDeep = async (id: number | string) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/system-pvcs/${id}?populate=deep`);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getGlassGlazingDeep = async (id: number | string) => {
  try {
    const response = await axios.get<GlazingBeadGlassResponse>(
      `http://localhost:1337/api/glass-glazing-bead-systems/${id}?populate=deep`,
    );
    const data = response.data;
    const glazingAdapted = GlazingGlassCaliberAdapter(data);
    return glazingAdapted;
  } catch (error) {
    throw error;
  }
};

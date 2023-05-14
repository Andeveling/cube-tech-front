import axios from 'axios';
import { IModelWindow } from '../models/WindowModel/WindowModel.types';
import { windowModelEndpoint } from './strapiEndpoints.service';
import { WindowModelAdapter } from '../models/WindowModel/WindowModel.adapter';
import { WindowModelResponse } from '../models/WindowModel/WindowModel.strapi';

export const getModels = async () => {
  try {
    const response = await axios.get<IModelWindow[]>('http://localhost:4000/windows_models');
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getModelById = async (id: string | number) => {
  try {
    const response = await axios.get<WindowModelResponse>(
      `http://localhost:1337${windowModelEndpoint.base}/${id}${windowModelEndpoint.query}`,
    );
    const data = response.data;
    const model = WindowModelAdapter(data);
    return model;
  } catch (error) {
    throw error;
  }
};

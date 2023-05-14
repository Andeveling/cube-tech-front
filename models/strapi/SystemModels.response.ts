import { WindowModelsEnum } from "../windowPVC.model";
import { Meta } from "./Global.response";

export type SystemModelsResponseI = {
    data: Data;
    meta: Meta;
}

export type Data = {
    id:         number;
    attributes: DataAttributes;
}

export type DataAttributes = {
    name:          string;
    createdAt:     Date;
    updatedAt:     Date;
    publishedAt:   Date;
    showName:      string;
    window_models: WindowModels;
}

export type WindowModels = {
    data: Datum[];
}

type Datum = {
    id:         number;
    attributes: DatumAttributes;
}

 type DatumAttributes = {
    name: string;
    draw_ref: WindowModelsEnum
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}


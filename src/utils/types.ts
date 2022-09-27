//********** Types **********//
export interface TGVData {
  identifier?: string;
  model?: TGV_MODEL;
  year?: string;
  commentary?: string;
}

export interface TGVSheet extends TGVData {
  date: string;
  reference: string;
}

export interface TGVForm extends TGVData {
  date?: string;
  reference?: string;
}

export type TGV_MODEL =
  | "TGV Atlantique"
  | "TGV Réseau"
  | "TGV Duplex"
  | "TGV POS"
  | "Euroduplex"
  | "";

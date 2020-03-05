export interface Serie {
  fecha: Date;
  valor: number;
}

export interface USD {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: Serie[];
}


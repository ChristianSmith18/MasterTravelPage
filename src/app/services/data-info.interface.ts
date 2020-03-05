export interface dataInfo {
  facebook: number;
  instagram: number;
  twitter: number;
  visitas: number;
  visitasContacto: number;
  visitasOtros: number;
  visitasSalidas: number;
  whatsapp: number;
  mantencionMode: boolean;
  mensajesContacto: Mensaje[];
}

export interface Mensaje {
  empresa?: string;
  email: string;
  fecha: string;
  mensaje: string;
  nombre: string;
  numeroTelefonico: string;
  visto: boolean;
}

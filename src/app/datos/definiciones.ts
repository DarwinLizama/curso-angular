export interface Caminar {
  cantidadPies: number;
  correr: () => void;
  correrDevolviendoAlgo: () => number;
  correrConParametros: (velocidad: number) => number;
}

export const ROLES = {
  Usuario: 1, // Id
  Administrador: 2
}

export function miFuncion(var1: number): number {
  const var2: number = 2;
  return var1 * var2;
}

export const miFuncionAnominaODeFlecha = (var1: number): number => {
  return var1 * 2;
}

export type MiTipo = number | string;

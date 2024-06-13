// src/app/models/producto.model.ts
export class Producto {
  idProducto!: number;
  fabricante!: {
    idFabricante: number;
    nombre: string;
    fechaFundacion: string;
    pais: string;
    paginaWeb: string;
    descripcion: string;
    imagenUrl: string;
  };
  subcategoria!: {
    idSubcategoria: number;
    categoria: {
      idCategoria: number;
      nombre: string;
      imagenUrl: string;
    };
    nombre: string;
    imagenUrl: string;
  };
  nombre!: string;
  descripcion!: string;
  detalles!: string;
  precio!: number;
  stock!: number;
  novedad!: boolean;
  tipoDescuento!: string;
  descuento!: number | null;
  precioFinal!: number;
  numeroValoraciones!: number;
  valoracionMedia!: number;
  fechaCreacion!: string;
  fechaActualizacion!: string;
  imagenes!: {
    idImagen: number;
    imagenUrl: string;
  }[];
}

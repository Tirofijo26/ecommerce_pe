import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface Usuario {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  contraseña: string;
  rol: string;
  fechaRegistro: string;
}

interface State {
  usuarios: Usuario[];
  usuarioIniciado: Usuario;
  getUsuarios: () => Usuario[];
  updateUsuarioIniciado: (usuario: Usuario) => void;
}

export const useUsuario = create<State>()((set, get) => ({
  usuarioIniciado: {
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    contraseña: "",
    rol: "",
    fechaRegistro: "",
  },
  usuarios: [
    {
      nombre: "Alex",
      correo: "alex@gmail.com",
      telefono: "3108582340",
      direccion: "Calle Mayor 123, 28001 Madrid, España",
      contraseña: "alex1234",
      rol: "vendedor",
      fechaRegistro: "15 de Marzo, 2022",
    },
    {
      nombre: "ulloa",
      correo: "ulloa@gmail.com",
      telefono: "3208731705",
      direccion: "URB RÍO 123 calle Piedra HATILLO PR 00659, Puerto Rico",
      contraseña: "ulloa1234",
      rol: "comprador",
      fechaRegistro: "15 de Marzo, 2022",
    },
  ],
  getUsuarios: () => {
    const { usuarios } = get();
    return usuarios;
  },
  updateUsuarioIniciado: (usuario: Usuario) => {
    set({
      usuarioIniciado: {
        nombre: usuario.nombre,
        correo: usuario.correo,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        contraseña: usuario.contraseña,
        rol: usuario.rol,
        fechaRegistro: usuario.fechaRegistro,
      },
    });
  },
}));

import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface Usuario {
  nombre: string;
  correo: string;
  contraseña: string;
  rol: string;
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
    contraseña: "",
    rol: "",
  },
  usuarios: [
    {
      nombre: "Alex",
      correo: "alex@gmail.com",
      contraseña: "alex1234",
      rol: "vendedor",
    },
    {
      nombre: "ulloa",
      correo: "ulloa@gmail.com",
      contraseña: "ulloa1234",
      rol: "comprador",
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
        contraseña: usuario.contraseña,
        rol: usuario.rol,
      },
    });
  },

}));

const verificarRuta = (ruta) => {
    const rpta = path.isAbsolute(ruta);
    if (rpta === true) {
        return true;
    } else {
        return false;
    }
}
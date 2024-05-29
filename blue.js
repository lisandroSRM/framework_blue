import fs from "fs";
import path from "path";

class Blue {
    constructor() {
        this.tipo_archivo = {
            "controller": nombreClase => `<?php\n\nnamespace controller;\n\nuse config\\View;\n\nclass ${nombreClase} extends View\n{\n    public function index()\n    {\n        echo "HolaMundo";\n    }\n}\n\n$controlador = new ${nombreClase}();`,
            "model": nombreClase => `<?php\n\nnamespace model;\n\nuse config\\ORM;\n\nclass ${nombreClase} extends ORM\n{\n    protected $tabla = '';\n    protected $id_tabla = '';\n}`,
            "view": () => `<div class="container">\n\t<div class="row">\n\t\t<div class="col">\n\t\t\t<!-- Hola  -->\n\t\t</div>\n\t</div>\n</div>  `  
        };
    }

    comprobar_ruta(ruta) {
        if (!fs.existsSync(ruta)) {
            fs.mkdirSync(ruta, { recursive: true });
            console.log(`Creación de carpeta correcta: ${ruta}`);
        }
    }

    crear_archivo([tipo, subcarpeta, nombre]) {
        if (!this.tipo_archivo[tipo]) {
            console.log("Tipo de archivo no válido");
            return;
        }

        const basePath = tipo === "view" ? "./view/" : `./app/${tipo}/`;
        const extension = tipo === "view" ? ".view.php" : ".php";
        const fullPath = path.join(basePath, subcarpeta, nombre + extension);
        const dirPath = path.dirname(fullPath);

        this.comprobar_ruta(dirPath);

        let contenido = this.tipo_archivo[tipo](nombre);

        fs.writeFile(fullPath, contenido, error => {
            if (!error) {
                console.log("Creación correcta");
            } else {
                console.log("Error al crear el archivo");
            }
        });
    }
}

let blue = new Blue();
let argumentos = process.argv.slice(2);
blue.crear_archivo(argumentos);
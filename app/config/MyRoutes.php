<?php

namespace Config;

use config\Config;

require_once realpath('./vendor/autoload.php');
$router = new Config;
$router->get("/", ["Lisandro", "index"]);
$router->get("/eliminar",["Lisandro","eliminarRegistro"]);



$router->run();


?>
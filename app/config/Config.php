<?php

namespace Config;

require_once realpath('./vendor/autoload.php');

use controller\Usuarios;

class Config
{
    public const SERVER = "http://project.local/";
    public const DEP_IMG = self::SERVER . "public/img/";
    public const DEP_CSS = self::SERVER . "public/css/";
    public const DEP_JS = self::SERVER . "public/js/";
    public const ERROR = ['Error', 'index'];

    private $controller;
    private $method;
    private $routes = [];
    private $ruta2 = [];
    protected $importacion;
    private $directorio;

    public function __construct()
    {
        $this->importacion;
    }

    public function get($ruta, $metodo)
    {
        $ruta_final = trim($ruta, '/');
        $this->routes['GET'][$ruta_final] = $metodo;
    }

    public function post($ruta, $metodo)
    {
        $ruta_final = trim($ruta, '/');
        $this->routes['POST'][$ruta_final] = $metodo;
    }

    public function put($ruta, $metodo)
    {
        $ruta_final = trim($ruta, '/');
        $this->routes['PUT'][$ruta_final] = $metodo;
    }

    public function delete($ruta, $metodo)
    {
        $ruta_final = trim($ruta, '/');
        $this->routes['DELETE'][$ruta_final] = $metodo;
    }

    public function match_route($ruta, $method)
    {
        if (preg_match('/[a-zA-Z0-9_-]\/[a-zA-Z0-9_-]/', $ruta)) {
            $this->ruta2 = explode('/', $ruta);
            $this->controller = array_key_exists($this->ruta2[0], $this->routes[$method]) ? $this->routes[$method][$this->ruta2[0]] : self::ERROR;
        } else {
            $this->controller = array_key_exists($ruta, $this->routes[$method])
                ? $this->routes[$method][$ruta] : self::ERROR;
        }
        $this->method = $this->controller[1];
        require_once './app/controller/' . $this->controller[0] . '.php';
        $this->importacion = $controlador;
    }

    public function run()
    {
        self::iniciarSesion();
        $ruta = $_SERVER['REQUEST_URI'];
        $ruta = trim($ruta, '/');
        $this->match_route($ruta, $_SERVER['REQUEST_METHOD']);
        $metodo = $this->method;
        if(count($this->ruta2)>1){
            $this->importacion->$metodo($this->ruta2[1]);
        }else{

            $this->importacion->$metodo();
        }
    }

    public function redireccion($ruta)
    {
        $ruta_completa = self::SERVER . $ruta;
        return $ruta_completa;
    }


    public function iniciarSesion()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
    }

    public function cerrarSesion()
    {
        self::iniciarSesion();
        $_SESSION = array();
        session_destroy();
        Config::redirigir('login');
    }

    public function verificarSesion()
    {
        #self::iniciarSesion();
        if (!isset($_SESSION['usuario'])) {
            self::redirigir('login');
            exit;
        }
        
    }

    public function verificarLogin()
    {
        if (isset($_SESSION['usuario'])) {
            self::redirigir('home');
            exit;
        }
        
    }


    public function sesionIniciada()
    {
        self::iniciarSesion();
        if (isset($_SESSION['usuario'])) {
            self::redirigir('home');
            exit;
        }
    }

    public function dep_css($archivo)
    {
        return self::DEP_CSS . $archivo . '.css';
    }

    public function dep_png($png)
    {
        return self::DEP_IMG . $png . '.png';
    }

    public function dep_js($archivo)
    {
        return self::DEP_JS . $archivo . '.js';
    }

    public function redirigir($ruta)
    {
        echo '
        <script>
            window.location="' . self::SERVER . $ruta . '";
        </script>
        ';
    }
}

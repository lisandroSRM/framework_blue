<?php

    namespace Config;

    class SecurityToken{
        private $sesionKey;

        public function __construct($sesionKey =  'csrf_token')
        {
            if (session_status() === PHP_SESSION_NONE) {
                session_start();
            }
            $this->sesionKey = $sesionKey;
        }

        public function generarToken(){
            $token = bin2hex(random_bytes(32));
            $_SESSION[$this->sesionKey] = $token;
            return $token;
        }

        public function obtenerToken(){
            return $_SESSION[$this->sesionKey] ?? null;
        }

        public function validarToken($token){
            return hash_equals($this->obtenerToken(), $token);
        }

        public function invalidarToken(){
            unset($_SESSION[$this->sesionKey]);
        }
    }


?>
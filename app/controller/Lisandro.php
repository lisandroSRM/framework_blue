<?php

namespace controller;
use model\Ejemplo;
use config\View;

class Lisandro extends View
{
    public function index()
    {
        $consulta=new Ejemplo;
        $datos=$consulta->consulta()->all();
        return parent::vista('lisandro',$datos);
    }
    
    public function eliminarRegistro($id){
        $usuario = new Ejemplo();
        $usuario->eliminar()->where('id_ejemplo',$id)->get();
        $this->index();
    }
}

$controlador = new Lisandro();
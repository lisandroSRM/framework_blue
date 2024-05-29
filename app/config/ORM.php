<?php

namespace config;

use config\Conexion;
use PDO;
use PDOException;

require_once realpath('./vendor/autoload.php');

class ORM
{
    protected $tabla;
    protected $id_tabla;
    protected $atributos;
    private $query;
    private $contadorWhere;

    function __construct()
    {
        $this->atributos = $this->atributos_tabla();
    }

    private function atributos_tabla()
    {
        try {
            $consulta = Conexion::obtener_conexion()->prepare("DESCRIBE $this->tabla");
            $consulta->execute();
            $campos = $consulta->fetchAll(PDO::FETCH_ASSOC);
            $atributos = [];
            foreach ($campos as $campo) {
                array_push($atributos, $campo['Field']);
            }
            return $atributos;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return [];
        }
    }

    public function where($campo, $valor_campo, $tipo = "AND")
    {
        $queryFinal = $this->query;
        if ($this->contadorWhere > 0) {
            $this->query = "$queryFinal " . ($tipo != "AND" ? 'OR' : $tipo) . " $campo = '$valor_campo'";
        } else {
            $this->query = "$queryFinal WHERE $campo = '$valor_campo'";
            $this->contadorWhere++;
        }
        return $this;
    }

    public function all()
    {
        try {
            $queryFinal = $this->query;
            $consulta = Conexion::obtener_conexion()->prepare($queryFinal);
            if ($consulta->execute()) {
                $data = $consulta->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $data = [];
            }
            return $data;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return [];
        }
    }

    public function first()
    {
        try {
            $queryFinal = $this->query;
            $consulta = Conexion::obtener_conexion()->prepare($queryFinal);
            if ($consulta->execute()) {
                $data = $consulta->fetch(PDO::FETCH_ASSOC);
            }else {
                $data = [];
            }
            return $data;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }

    public function get()
    {
        try {
            $queryFinal = $this->query;
            $consulta = Conexion::obtener_conexion()->prepare($queryFinal);
            if ($consulta->execute()) {
                $data = $consulta->fetch(PDO::FETCH_ASSOC);
            } else {
                $data = [];
            }
            return $data;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return [];
        }
    }

    public function consulta($seleccion = ['*'])
    {
        $seleccion = implode(',', $seleccion);
        $this->query = "SELECT $seleccion FROM $this->tabla";
        return  $this;
    }

    public static function mostrar_datos()
    {
        try {
            $consulta = Conexion::obtener_conexion()->prepare("SELECT * FROM t_persona");
            if (!$consulta->execute()) {
                echo 'Error de consulta consulta';
            } else {
                $dato = $consulta->fetchAll(PDO::FETCH_ASSOC);
                echo print_r($dato);
                echo 'Se completo  con exito';
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function insercion($datos)
    {
        try {
            $temp = array();
            foreach ($this->atributos as $valor) {
                if ($this->id_tabla != $valor) {
                    array_push($temp, $valor);
                }
            }
            $propiedades  = implode(",", $temp);
            $propiedades_key = ":" . implode(", :", $temp);
            $consulta = Conexion::obtener_conexion()->prepare("INSERT INTO $this->tabla ($propiedades) VALUES ($propiedades_key)");
            if ($consulta->execute($datos)) {
                return ([1, "Insercion correcta"]);
            } else {
                return ([0, "Error al insertar datos"]);
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return [0, "Error al insertar datos"];
        }
    }

    public function actualizar($datos)
    {
        try {
            $queryBloque = [];
            foreach (array_keys($datos) as $key) {
                if ($this->id_tabla != $key) {
                    array_push($queryBloque, $key . '=' . "'$datos[$key]'");
                }
            }
            $queryBloque = implode(', ', $queryBloque);
            $this->query = "UPDATE $this->tabla SET $queryBloque";
            return $this;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return $this;
        }
    }

    public function eliminar()
    {
        try {
            $this->query = "DELETE FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return $this;
        }
    }
    
    public function count($seleccion)
    {
        try {
            $seleccion = implode(',', $seleccion);
            $this->query = "SELECT COUNT($seleccion) FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    
    public function limit($limit, $offset = 0)
    {
        try {
            $this->query .= " LIMIT $limit";
            if ($offset > 0) {
                $this->query .= " OFFSET $offset";
            }
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'limit': " . $e->getMessage();
        }
    }

    public function like($campo, $valor1, $valor2)
    {
        try {
            $queryFinal = $this->query;
            if ($this->contadorWhere > 0) {
                $this->query = "$queryFinal AND $campo LIKE '$valor1%$valor2%'";
            } else {
                $this->query = "$queryFinal WHERE $campo LIKE '$valor1%$valor2%'";
            }
            $this->contadorWhere++;
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'like': " . $e->getMessage();
            return false;
        }
    }

    public function max($campo)
    {
        try {
            $this->query = "SELECT MAX($campo) FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'max': " . $e->getMessage();
        }
    }

    public function min($campo)
    {
        try {
            $this->query = "SELECT MIN($campo) FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'min': " . $e->getMessage();
        }
    }

    public function sum($campo)
    {
        try {
            $this->query = "SELECT SUM($campo) FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'sum': " . $e->getMessage();
        }
    }

    public function avg($campo)
    {
        try {
            $this->query = "SELECT AVG($campo) FROM $this->tabla";
            return $this;
        } catch (PDOException $e) {
            echo "Error en la función 'avg': " . $e->getMessage();
        }
    }
}

?>
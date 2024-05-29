<div class="container">
	<div class="row">
		<div class="col">
			<!-- Hola  -->
			<h2>bienvenido</h2>
			<a href="/registrar"></a>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>nombre</th>
						<th>apellido</th>
						<th>elimonar</th>
						<th>editar</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ($datos as $dato) :?>
						<tr>
							<td><?= $dato['id_ejemplo']?></td>
							<td><?= $dato['nombre_ejemplo']?></td>
							<td><?= $dato['apellido_ejemplo']?></td>
							<td><a href="/eliminar/<?= $dato['id_ejemplo']?>">Eliminar</a></td>
						</tr>
					<?php endforeach;?>
				</tbody>

			</table>
		</div>
	</div>
</div>  
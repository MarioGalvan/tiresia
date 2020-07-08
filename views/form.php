 <div style="margin-left:5px" class="row justify-content-center">
     <div class="col-md-6">
         <br>
         <div class="card card-outline-secondary">
             <div class="card-header">
                 <h3 class="mb-0">Informacion del cliente</h3>
             </div>
             <div class="card-body">
                 <form method="post" autocomplete="off" class="formvalidator" role="form" data-toggle="validator">
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Identificación</label>
                         <div class="col-lg-9">
                             <input name="identificacion" id="identificacion" class="form-control" type="tel"
                                 required="">
                         </div>
                     </div>
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Nombre</label>
                         <div class="col-lg-9">
                             <input class="form-control" id="nombre" name="nombre" type="text" placeholder="pedro"
                                 required="">
                         </div>
                     </div>
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Telefono</label>
                         <div class="col-lg-9">
                             <input class="form-control" name="telefono" id="telefono" type="number"
                                 placeholder="0000000" required="">
                         </div>
                     </div>
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Dirección</label>
                         <div class="col-lg-9">
                             <input class="form-control" name="direccion" id="direccion" type="text"
                                 placeholder="av 23 #24-21" required="">
                         </div>
                     </div>
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Pais</label>
                         <div class="col-lg-9">
                             <select name="paises" id="paises" class="form-control" required="">
                                 <option value="">Seleccione..</option>
                                 <option value="1">Colombia</option>
                                 <option value="2">Venezuela</option>


                             </select>
                         </div>
                     </div>

                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Departamento</label>
                         <div class="col-lg-9">
                             <select name="departamentos" id="departamentos" class="form-control" required="">
                                 <option value="">Seleccione</option>

                             </select>
                         </div>
                     </div>
                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label">Ciudad</label>
                         <div class="col-lg-9">
                             <select name="ciudades" id="ciudades" class="form-control" required="">
                                 <option value="">Seleccione</option>

                             </select>
                         </div>
                     </div>

                     <div class="form-group row">
                         <label class="col-lg-3 col-form-label form-control-label"></label>
                         <div class="col-lg-9">
                             <input class="btn btn-secondary" type="reset" value="Cancelar">
                             <input class="btn btn-primary" id="guardar" type="button" value="Guardar">
                         </div>
                     </div>
                 </form>
             </div>
         </div><!-- /form user info -->
     </div>
 </div>
package leyva.gonzalez.citas.citas.Repositorio;

import leyva.gonzalez.citas.citas.Modelo.Cita;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CitaRepository extends CrudRepository<Cita, Integer> {
    List<Cita> findAll();
    Cita findByIdCita(int idCita);
    List<Cita>findAllByFecha(String fecha);
    Cita save(Cita cita);
    void delete(Cita cita);
}
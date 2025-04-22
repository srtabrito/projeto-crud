package br.com.anm.projeto_crud.produtos.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.anm.projeto_crud.produtos.modelo.ProdutoModelo;

public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {

}
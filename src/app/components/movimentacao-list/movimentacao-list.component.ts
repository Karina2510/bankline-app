import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
movimentacoes:any;
correntistas:any;
correntista:any;
  constructor(
    private movimentacaoService: MovimentacaoService, 
    private CorrentistaService: CorrentistaService) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.CorrentistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  listMovimentacoes(): void{
    this.movimentacaoService.findyByIdConta(this.correntista.id)
    .subscribe(
      data => {
        this.movimentacoes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
  
  }

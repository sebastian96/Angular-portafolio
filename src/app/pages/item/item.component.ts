import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { itemDescripcion } from 'src/app/interface/item-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: itemDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public itemService: ProductosService) { }

  ngOnInit() {
    
    this.route.params
      .subscribe( parametros => {
        this.itemService.getProducto(parametros['id'])
          .subscribe((producto: itemDescripcion) => {
            this.id = parametros['id'];
            this.item = producto;
          })
      })
  }

}

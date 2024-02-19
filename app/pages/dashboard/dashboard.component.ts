import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  route: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  // ecommerce card
  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/angetes.png',
      title: 'Agentes',
      route: '/ui-components/lists',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/asignar.png',
      title: 'Asignacion de Libretines',
      route: '/ui-components/menu',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/aplicacionmovil.png',
      title: 'Aplicacion Movil',
      route: '/extra/icons',
    },
    
    
  ];
}

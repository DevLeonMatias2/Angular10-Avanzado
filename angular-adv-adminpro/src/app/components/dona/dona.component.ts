import {Component, Input} from '@angular/core';
import {Color, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title = 'Sin titulo';

  @Input() ['labels']; doughnutChartLabels: Label[] = ['huevo', 'leche', 'arroz'];
  @Input() ['data']; doughnutChartData: MultiDataSet = [
    [10, 15, 40],
  ];
  public colors: Color[] = [
    { backgroundColor: ['#6857E6', ' #009FEE ' , '#F02059']}
  ];
}

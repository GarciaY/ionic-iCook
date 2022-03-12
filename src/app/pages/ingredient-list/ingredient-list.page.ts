import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.page.html',
  styleUrls: ['./ingredient-list.page.scss'],
})
export class IngredientListPage implements OnInit {

  
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];


  constructor() { }

  ngOnInit() {
  }

}

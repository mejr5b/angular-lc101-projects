import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Walk Banjo', 'Do LaunchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", tasks: ['Wash Dishes', 'Finish LaunchCode prep work', 'Buy Icecream']},
      {title: "Tomorrow's Chores", tasks: ['Walk Banjo AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']},
   ]

   constructor() { }

   ngOnInit() {
   }

}
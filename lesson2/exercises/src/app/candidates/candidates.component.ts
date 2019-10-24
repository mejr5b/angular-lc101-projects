import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot";
   editMissionName = false;
   
   candidates = [
    {name: 'Nicholas Jones', data: {age: 26, mass: '175 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Melanie Jones', data: {age: 24, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Warren Jones', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Mary Jones', data: {age: 54, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }
  addToCrew(person: object) {
    if(!this.crew.includes(person)){
      this.crew.push(person);
    }
  }
  changeMissionName(name: string){
    this.missionName = name;
    return false;
 }

}

import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import * as fromCat from '@actions/cat.action';
import * as fromZombie from '@actions/zombie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'web';
  cats = [];
  zombies = [];

  constructor(protected store: Store<fromRoot.State>) {

    this.cats = [
      {
        name: 'Minou',
        life: 100,
        attack: 28,
        defense: 12
      },
      {
        name: 'Lion',
        life: 65,
        attack: 10,
        defense: 27
      },
      {
        name: 'Litchi',
        life: 80,
        attack: 48,
        defense: 1
      }
    ];
    this.zombies = [
      {
        name: 'Beyonce',
        life: 98,
        attack: 24,
        defense: 5
      },
      {
        name: 'Franck',
        life: 87,
        attack: 5,
        defense: 25
      },
      {
        name: 'Freak',
        life: 75,
        attack: 45,
        defense: 7
      }
    ];
  }

  private  _sorMaxProperty(arr: any[], propName: 'attack' | 'defense'): any[]  {
    arr.sort(function (a, b) {
      const valueA = a[propName];
      const valueB = b[propName];
      return valueB - valueA;
    });
    return arr;
  }

  ngAfterViewInit() {
    let isCatTour = false;
    let catArr = [...this.cats];
    let zombieArr = [...this.zombies];
    let round = 0;
    setTimeout(() => {
      while ( catArr.length && zombieArr.length) {
        const minLength = Math.min(zombieArr.length,  catArr.length);
        if (isCatTour) {
          catArr = this._sorMaxProperty(catArr, 'attack');
          zombieArr = this._sorMaxProperty(zombieArr, 'defense');
          for (let i = 0; i < minLength; i ++) {
            const diff = catArr[i].attack - zombieArr[i].defense;
            if (diff > 0) {
              zombieArr[i].life = zombieArr[i].life - diff;
            }
          }
          zombieArr = zombieArr.filter( x => x.life > 0);
        } else {
          for (let i = 0; i < minLength; i ++) {
            const diff = zombieArr[i].attack - catArr[i].defense;
            if (diff > 0) {
              catArr[i].life = catArr[i].life - diff;
            }
          }
          catArr = catArr.filter( x => x.life > 0);
        }
        isCatTour = !isCatTour;
        round = round + 1;

        console.log(`ROUND: ${round}`);
        console.log(...zombieArr);
        console.log(...catArr);
        if (round > 100) {
          break;
        }
      }
    });
  }

  ngOnInit() {
    // this.store.dispatch(new fromCat.FetchDataFromServer());
    // this.store.dispatch(new fromZombie.FetchDataFromServer());
    // this.catSub = this.store.select(fromRoot.getCatList).subscribe(cat => {
    //   this.cat = cat;
    // });
    // this.zombieSub = this.store
    //   .select(fromRoot.getZombieList)
    //   .subscribe(zombies => {
    //     this.zombies = zombies;
    //   });
  }

  ngOnDestroy() {
  }
}

/*
[
    {
        "name": "Beyonce",
        "icon": "http://i.giphy.com/hyYMouu2tR5mM.gif",
        "life": 98,
        "attack": 24,
        "defense": 5
    },
    {
        "name": "Franck",
        "icon": "http://i.giphy.com/4cfV5bkDSYUx2.gif",
        "life": 87,
        "attack": 5,
        "defense": 25
    },
    {
        "name": "Freak",
        "icon": "http://i.giphy.com/NKSq1x79SPTGg.gif",
        "life": 75,
        "attack": 45,
        "defense": 7
    }
]

[
    {
        "name": "Minou",
        "icon": "http://i.giphy.com/l4KhS0BOFBhU2SYIU.gif",
        "life": 100,
        "attack": 28,
        "defense": 12
    },
    {
        "name": "Lion",
        "icon": "http://i.giphy.com/l41lTn1liPDzkv0Zi.gif",
        "life": 65,
        "attack": 10,
        "defense": 27
    },
    {
        "name": "Litchi",
        "icon": "http://i.giphy.com/emWySpOLFLUAM.gif",
        "life": 80,
        "attack": 48,
        "defense": 1
    }
]
 */

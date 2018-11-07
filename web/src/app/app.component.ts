import { Component, OnInit, OnDestroy } from '@angular/core';

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
export class AppComponent implements OnInit, OnDestroy {
  title = 'web';
  cat = [];
  zombies = [];

  catSub: any;
  zombieSub: any;

  constructor(
    protected store: Store<fromRoot.State>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new fromCat.FetchDataFromServer());
    this.store.dispatch(new fromZombie.FetchDataFromServer());


    this.catSub = this.store.select(fromRoot.getCatList).subscribe(cat => {
      this.cat = cat;
    });
    this.zombieSub = this.store.select(fromRoot.getZombieList).subscribe(zombies => {
      this.zombies = zombies;
    });
  }

  ngOnDestroy() {
    this.catSub.unsubcribe();
    this.zombieSub.unsubcribe();
  }
}

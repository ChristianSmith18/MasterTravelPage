import { Component, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements AfterContentChecked {
  keyAfterContentChecked = true;

  constructor(
    private title: Title
  ) {
    this.title.setTitle('Catálogo');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 650) {
        document.getElementById('button-up').style.display = '';
      } else {
        document.getElementById('button-up').style.display = 'none';
      }
    });
  }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      if (window.scrollY >= 650) {
        document.getElementById('button-up').style.display = '';
      } else {
        document.getElementById('button-up').style.display = 'none';
      }
      this.keyAfterContentChecked = false;
    }
  }
}

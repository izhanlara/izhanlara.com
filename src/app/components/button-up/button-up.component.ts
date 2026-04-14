import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.scss'],
})
export class ButtonUpComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  public scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  private onScroll(): void {
    const btnUp = document.querySelector('.button-up') as HTMLElement;
    if (window.scrollY > 20) {
      btnUp.style.display = 'block';
    } else {
      btnUp.style.display = 'none';
    }
  }
}

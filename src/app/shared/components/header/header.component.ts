import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  logged: boolean = false;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
    this.total$ = this.cartService.cart$
      .pipe(map((products) => products.length))
  }

  ngOnInit(): void {
    this.authService.hasUser().subscribe(user => {
      if (user === null) {
        this.logged = false;
      } else {
        this.logged = true;
      }
    })
    console.log(this.logged);
  }

  logout() {
    this.authService.logout()
    .then(() => {
      window.location.reload();
      this.router.navigate(['/home']);
    })
  }
}

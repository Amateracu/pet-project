import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { AuthService } from 'src/app/shared/services/api/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() public openedSideBar = new EventEmitter<boolean>();

  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService,
  ) {}

  public opened(): void {
    this.openedSideBar.emit();
  }

  public changeLang(lang: string): void {
    this.translate.use(lang);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate([AUTH_ROUTE.path]);
  }
}

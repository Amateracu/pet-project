import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HttpLoaderFactory } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';
import { TokenExpirationInterceptor } from './shared/interceptors/token-expiration.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { StateModule } from './store/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    StateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenExpirationInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}

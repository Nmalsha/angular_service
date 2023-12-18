import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from './cocktail.service';
@NgModule({
  declarations: [AppComponent, CocktailListComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}

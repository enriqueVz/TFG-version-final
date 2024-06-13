import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FabricanteListComponent } from './components/fabricante-list/fabricante-list.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { ProductosByCategoriaComponent } from './components/productos-by-categoria/productos-by-categoria.component';
import { IndexComponent } from './components/index/index.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ImageService } from './services/image.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from './services/shared.service';
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { TruncatePipe } from './truncate.pipe';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: 'fabricantes', component: FabricanteListComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categoria', component: CategoriaListComponent },
  { path: 'categoria/:nombreCategoria', component: ProductosByCategoriaComponent },
  { path: 'subcategoria/:nombreSubcategoria', component: SubcategoriaComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/index' }, // Fallback route for undefined paths
  { path: 'signup', component: SignUpComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriaListComponent,
    ProductosByCategoriaComponent,
    ProductoListComponent,
    FabricanteListComponent,
    IndexComponent,
    NavbarComponent,
    SubcategoriaComponent,
    TruncatePipe,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    NgbModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [AuthService, ImageService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

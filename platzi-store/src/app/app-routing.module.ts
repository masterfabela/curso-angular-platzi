import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductDetailComponent } from './modules/products/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./modules/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
    ],
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./modules/demo/demo.module').then((module) => module.DemoModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
          import('./routes/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./routes/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./routes/contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./routes/order/order.module').then(
            (module) => module.OrderModule
          ),
      },
    ],
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./routes/demo/demo.module').then((module) => module.DemoModule),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./routes/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./routes/page-not-found/page-not-found.module').then(
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

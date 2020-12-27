import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private produtsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const id: string = params.id;
      this.produtsService.getProduct(id).subscribe((product) => {
        this.product = product;
        this.form.patchValue(product);
      });
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product: Product = this.form.value;
      console.log(`Update enviado`, product);
      this.produtsService
        .updateProduct(this.product.id, product)
        .subscribe(() => {
          this.router.navigate(['/admin/products']);
        });
    }
  }
}

package com.ecom.ProductCatalog.Controller;

import com.ecom.ProductCatalog.Model.Product;
import com.ecom.ProductCatalog.Service.ProductService;
import jakarta.persistence.Id;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;


    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductByCategory(@PathVariable Long categoryId){
        return productService.getProductByCategory(categoryId);
    }
}
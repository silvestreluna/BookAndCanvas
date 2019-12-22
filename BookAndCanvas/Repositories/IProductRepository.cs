﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Repositories
{
    public interface IProductRepository
        {
            Product AddNewProduct(NewProductDTO newProduct);
            IEnumerable<Product> GetAllProducts();

         bool DeleteProdById(int productId);
        bool UpdateProductById(Product updatedProduct, int id);
        IEnumerable<Product> GetProductById(int prodId);

    }
}


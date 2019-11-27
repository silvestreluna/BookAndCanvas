﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;

namespace BookAndCanvas.Repositories
{
    public interface IProductRepository
        {
            Product AddNewProduct(NewProductDTO newProduct);
            IEnumerable<Product> GetAllProducts();
        }
    }

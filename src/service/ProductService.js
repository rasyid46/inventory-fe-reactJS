import axios from 'axios';
 
const INVENTORY_API_BASE_URL ="http://localhost:8080/api/v1/produks";

class ProductService {
    getProduk(){
        return axios.get(INVENTORY_API_BASE_URL)
    }

    createProduk(produk){
        return axios.post(INVENTORY_API_BASE_URL, produk)
    }
}

export default new ProductService;
import axios from 'axios';
 
const INVENTORY_API_BASE_URL ="http://localhost:8080/api/v1/produks";

class ProductService {
    getProduk(){
        return axios.get(INVENTORY_API_BASE_URL)
    }

    createProduk(produk){
        return axios.post(INVENTORY_API_BASE_URL, produk)
    }

    getProdukById( produkId){
        return axios.get(INVENTORY_API_BASE_URL + '/' + produkId)
    }

    updateProduk(produk, produkId){
        return axios.put(INVENTORY_API_BASE_URL + '/' + produkId,produk)
    }

    deleteProduk( produkId){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + produkId)
    }
}

export default new ProductService;
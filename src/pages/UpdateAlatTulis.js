import React, { Component } from 'react';
import ProductService from '../service/ProductService'
class UpdateAlatTulis extends Component {
    constructor(props){
        super(props) 
         this.state ={
             produks:[],
             id : this.props.match.params.id,
             nama:'',
             deskripsi:'',
             hargaBeli:'',
             stock: '',
        }
        this.saveProduk = this.saveProduk.bind(this);
        this.changeNamaHandler = this.changeNamaHandler.bind(this);
        this.changeDeskripsiHandler = this.changeDeskripsiHandler.bind(this);
        this.chageHargaBeliHandler = this.chageHargaBeliHandler.bind(this);
        this.changeStockHandler = this.changeStockHandler.bind(this);
     
       
        
         
     }
     componentDidMount(){
        ProductService.getProdukById(this.state.id).then((res) => {
            console.log(res.data)
            let produk = res.data
            this.setState({
               nama: produk.nama,
               deskripsi: produk.deskripsi,
               hargaBeli: produk.hargaBeli,
               stock: produk.stock,
            })
        })
     }

    changeNamaHandler =(event) => {
        this.setState({
            nama: event.target.value
        })
    }

    changeDeskripsiHandler =(event) => {
        this.setState({
            deskripsi: event.target.value
        })
    }

    chageHargaBeliHandler =(event) => {
         this.setState({
             hargaBeli: event.target.value
         })
    }
    changeStockHandler  =(event) => {
        this.setState({
            stock: event.target.value
        })
    }

   
    saveProduk =(e) =>{
        e.preventDefault();
        let produk ={
            nama : this.state.nama,
            deskripsi : this.state.deskripsi,
            hargaBeli : this.state.hargaBeli,
            stock : this.state.stock,
        }
        console.log('produk =>'+ JSON.stringify(produk))

        ProductService.updateProduk(produk,this.state.id).then(
            res => {
                this.props.history.push('/')
            }
        );
    }
    render() {
        return (
            <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-10 offset-md-1 offset-md-1">
                        {
                            " Update Alat Tulis"
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama </label>
                                    <input placeholder="Nama Barang"  name="nama" className="form-control" 
                                    onChange={this.changeNamaHandler} value={this.state.nama}/> 
                                </div>

                                <div className="form-group">
                                    <label>Deskripsi </label>
                                    <input placeholder="Deskripsi"  name="deskripsi" className="form-control"
                                        onChange={this.changeDeskripsiHandler} value={this.state.deskripsi}
                                    /> 
                                </div>

                                <div className="form-group">
                                    <label>Harga Beli</label>
                                    <input placeholder="Harga"  name="hargaBeli" className="form-control"
                                       onChange={this.chageHargaBeliHandler} value={this.state.hargaBeli} 
                                    /> 
                                </div>


                                <div className="form-group">
                                    <label>Stock</label>
                                    <input placeholder="Stok"  name="stock" className="form-control"
                                        onChange={this.changeStockHandler} value={this.state.stock} 
                                    /> 
                                </div>

                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={this.saveProduk} className="btn btn-success" data-bs-dismiss="modal">Save changes</button>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default UpdateAlatTulis;
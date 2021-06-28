 import React, { Component } from 'react';
 import ProductService from '../service/ProductService'
 class MainPage extends Component {
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
        this.editProduk = this.editProduk.bind(this);
        this.deleteProduk = this.deleteProduk.bind(this);
     }

     componentDidMount(){
        ProductService.getProduk().then((res) => {
            console.log(res.data)
            this.setState({
                produks:res.data
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

        ProductService.createProduk(produk).then(
            (res) => {
             console.log(res)
            }
        );

        window.location.reload(false);
    }
     
    editProduk(id){
        this.props.history.push(`/updateAlatTulis/${id}`)
    }
    deleteProduk(id){
      ProductService.deleteProduk(id).then(() =>{
          this.setState({produks : this.state.produks.filter(produks => produks.id !== id)});
      });
    }
     render() {

         return (
            <div 
                style={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'Left',
                    height:'100vh'
                    }} 
            >

                
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> Add Alat Tulis</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           
                              
                           
                           
                            </div>
                            <div className="modal-body">
                                <div>
                                    <br/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="card col-md-10 offset-md-1 offset-md-1">
                                                {
                                                    "Alat Tulis"
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

                                                         

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={this.saveProduk} className="btn btn-success" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    
                <div>
                    <h2 className="text-center">Alat Tulis</h2>
                    <div className="row">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add alat tulis </button>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama</th>
                                    <th>Deskripsi</th>
                                    <th>Harga Beli</th>
                                    <th>Stok</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produks.map(
                                        produk =>
                                        <tr key={produk.id}>
                                        <td>{produk.id}</td>
                                        <td>{produk.nama}</td>
                                        <td>{produk.desktipsi}</td> 
                                        <td>Rp .{produk.hargaBeli}</td>
                                        <td>{produk.stock}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={ ()=> this.editProduk(produk.id)} >Update</button>
                                            <button style={{ marginLeft: "10px"}} className="btn btn-danger" onClick={()=>this.deleteProduk(produk.id)}>Delete</button>
                                        </td>
                                    </tr>
  
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>     
            </div>
         );
     }
 }
 
 export default MainPage;
import React, {Component} from "react";
import './MahasiswaPost.css';
import Mahasiswa from "../../component/MahasiswaPost/Mahasiswa"

class MahasiswaPost extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listMahasiswa: result
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((response) => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No. HP</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Tahun Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status Mahasiswa</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>

                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Mahasiswa 
                        key={mahasiswa.id} 
                        nim={mahasiswa.nim} 
                        nama={mahasiswa.nama}
                        alamat={mahasiswa.alamat}
                        hp={mahasiswa.hp} 
                        angkatan={mahasiswa.angkatan} 
                        status={mahasiswa.status} 
                        idMahasiswa={mahasiswa.id} 
                        hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;  
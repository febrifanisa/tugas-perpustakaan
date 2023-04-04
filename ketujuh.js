function cekform(){
    Nim = document.getElementById('id');
    nama = document.getElementById('name');
    Jurusan = document.getElementById('jurusan');
    Studi = document.getElementById('studi');
    jeniskelamin = document.getElementById('opsi');
    alamt = document.getElementById('txtalamat');
    if(Nim.value=='') {
        alert('Nim kosong');
        Nim.focus();
        return false;
    } else if(nama.value==''){
        alert('nama tidak buleh kosong');
        nama.focus();
        return false;
    }else if(Jurusan.value==''){
        alert('jurusan belum di isi');
        Jurusan.focus();
        return false;
    }else if(studi.value==''){
        alert('prodi masih kosong');
        Studi.focus();
        return false;
    }else if(jeniskelamin.value==''){
        alert('jenis kelamin belum diisi');
        jeniskelamin.focus();
        return false;
    }else if(alamat.value==''){
        alert('alamat masih kosong');
        alamat.focus();
        return false;
    }else{
        alert('Terimaksih telah mengisi data')
        return true;
    }
}
function cekform(){
    Nama = document.getElementById('nama');
    Nim = document.getElementById('id');
    Tanggalpinjam = document.getElementById('tglpinjam');
    Tanggalkembali = document.getElementById('tglkembali');
    if(Nama.value=='') {
        alert('Nama Tidak Boleh Kosong');
        Nama.focus();
        return false;
    } else if(Nim.value==''){
        alert('NIM Belum Di isi');
        Nim.focus();
        return false;
    }else if(Tanggalpinjam.value==''){
        alert('Tanggal Kembali belum di isi');
        Tanggalpinjam.focus();
        return false;
    }else if(Tanggalkembali.value==''){
        alert('tanggal pinjam masih kosong');
        Tanggalkembali.focus();
        return false;
    }else{
        alert('Terimaksih telah mengisi data')
        return true;
    }
}
function cekform(){
    Judul = document.getElementById('judul');
    Pengarang = document.getElementById('pengarang');
    Penerbit = document.getElementById('penerbit');
    Isbn = document.getElementById('isbn');
    Jumlahbuku = document.getElementById('jmlbuku');
    Keterangan = document.getElementById('keterangan');
    Tanggalinput = document.getElementById('tanggal');
    if(Judul.value=='') {
        alert('Judul Tidak Boleh Kosong');
        Judul.focus();
        return false;
    } else if(Pengarang.value==''){
        alert('Pengarang Belum Di isi');
        Pengarang.focus();
        return false;
    }else if(Penerbit.value==''){
        alert('Penerbit belum di isi');
        Penerbit.focus();
        return false;
    }else if(Isbn.value==''){
        alert('ISBN masih kosong');
        Isbn.focus();
        return false;
    }else if(Jumlahbuku.value==''){
        alert('jumlah buku belum diisi');
        Jumlahbuku.focus();
        return false;
    }else if(Keterangan.value==''){
        alert('Keterangan Buku blm di sis');
        Keterangan.focus();
        return false;
    }else if(Tanggalinput.value==''){
        alert('Tanggal Input masih kosong');
        Tanggalinput.focus();
        return false;
    }else{
        alert('Terimaksih telah mengisi data')
        return true;
    }
}
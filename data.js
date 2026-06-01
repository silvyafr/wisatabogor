let wisataData =
JSON.parse(localStorage.getItem("wisataData")) || [

{
    id:1,
    nama:"Kebun Raya Bogor",
    kategori:"Wisata Alam",
    lokasi:"Bogor",
    harga:25000,
    gambar:"https://picsum.photos/500/300?1",
    deskripsi:"Kebun botani terbesar di Indonesia"
},

{
    id:2,
    nama:"Curug Leuwi Hejo",
    kategori:"Curug",
    lokasi:"Sentul",
    harga:15000,
    gambar:"https://picsum.photos/500/300?2",
    deskripsi:"Curug dengan air jernih"
}

];

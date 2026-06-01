const form =
document.getElementById("wisataForm");

const wisataList =
document.getElementById("wisataList");

function saveData(){

    localStorage.setItem(
        "wisataData",
        JSON.stringify(wisataData)
    );

}

function tampilkanWisata(){

    wisataList.innerHTML = "";

    wisataData.forEach((item)=>{

        wisataList.innerHTML += `

        <div class="card">

            <img src="${item.gambar}">

            <div class="card-content">

                <h3>${item.nama}</h3>

                <p>Kategori : ${item.kategori}</p>

                <p>Lokasi : ${item.lokasi}</p>

                <p>Harga : Rp ${item.harga}</p>

                <p>${item.deskripsi}</p>

                <div class="action">

                    <button
                    class="edit"
                    onclick="editWisata(${item.id})">
                    Edit
                    </button>

                    <button
                    class="delete"
                    onclick="hapusWisata(${item.id})">
                    Hapus
                    </button>

                </div>

            </div>

        </div>

        `;
    });

}

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const wisataBaru = {

        id:Date.now(),

        nama:
        document.getElementById("nama").value,

        kategori:
        document.getElementById("kategori").value,

        lokasi:
        document.getElementById("lokasi").value,

        harga:
        document.getElementById("harga").value,

        gambar:
        document.getElementById("gambar").value,

        deskripsi:
        document.getElementById("deskripsi").value

    };

    wisataData.push(wisataBaru);

    saveData();

    tampilkanWisata();

    form.reset();

});

function hapusWisata(id){

    wisataData =
    wisataData.filter(
        wisata => wisata.id !== id
    );

    saveData();

    tampilkanWisata();

}

function editWisata(id){

    const wisata =
    wisataData.find(
        item => item.id === id
    );

    document.getElementById("nama").value =
    wisata.nama;

    document.getElementById("kategori").value =
    wisata.kategori;

    document.getElementById("lokasi").value =
    wisata.lokasi;

    document.getElementById("harga").value =
    wisata.harga;

    document.getElementById("gambar").value =
    wisata.gambar;

    document.getElementById("deskripsi").value =
    wisata.deskripsi;

    hapusWisata(id);

}

tampilkanWisata();

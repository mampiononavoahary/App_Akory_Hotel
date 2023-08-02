function showAllClientNopay(data) {
    const body_table = document.querySelector('#table_body');

    data.map((values)=> {
        let dataInitial = "";
        dataInitial += `<tr>
      <td>${values.id_client}</td>
      <td>${values.name}</td>
      <td>${values.email}</td>
      
    </tr>`;
    body_table.innerHTML += dataInitial;
    });
}

function infoClientNoPay(){
    fetch("http://localhost:5000/ClientNoPay")
.then((data) => {
    return data.json();
})
.then((data)=>{
    showAllClientNopay(data)
})
.catch(data =>alert(data))
}
infoClientNoPay();
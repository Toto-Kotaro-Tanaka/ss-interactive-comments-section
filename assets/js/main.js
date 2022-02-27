"use strict";

fetch("./data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        appendData(data);
    })
    .catch(function(err) {
        console.log("Error, no data");
    });

function appendData(data) {
    const mainContainer = document.getElementById("myData");
    for (let i = 0; i < data.comments.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="card mt-3 mx-auto w--90">
                <div class="row">
                    <div class="col-md-1 d-none d-md-inline mt-3 pb-3">
                        <div class="ml-4 input-group">
                            <div class="input-group-btn mx-auto">
                                <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                    <div class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></div>
                                </button>
                            </div>
                            <div>
                                <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center" value="${data.comments[i].score}" min="1" max="99">
                            </div>
                            <div class="input-group-btn mx-auto">
                                <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                    <div class="glyphicon glyphicon-minus"><i class="fa-solid fa-minus fa-sm"></i></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-11">
                        <div class="p-3">
                            <img class="d-inline --avatar" src="${data.comments[i].user.image.png}" alt="avatar">
                            <h5 class="d-inline">${data.comments[i].user.username}</h5>
                            <p class="d-inline --time">${data.comments[i].createdAt}</p>
                            <btn class="btn d-none d-md-inline float-md-right --reply"><i class="fa-solid fa-reply"></i><span class="pl-2 pr-0">Reply</span></btn>
                        </div>
                        <div class="mb-md-3">
                            <p class="card-text --text">${data.comments[i].content}</p>
                        </div>
                    </div>
                </div>

                <div class="card-body row d-md-none">
                    <!-- Credit: Bootsnip https://bootsnipp.com/snippets/dGWP -->
                    <div class="col m-0 --input">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number pl-2 pr-2" disabled="disabled" data-type="minus" data-field="quant[1]">
                                    <span class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></span>
                            </button>
                            </span>
                            <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center num--input" value="${data.comments[i].score}" min="1" max="99">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number pl-2 pr-2" data-type="plus" data-field="quant[1]">
                                    <span class="glyphicon glyphicon-minus"><i class="fa-solid fa-minus fa-sm"></i></span>
                            </button>
                            </span>
                        </div>
                    </div>
                    <div class="col p-0 --reply">
                    </div>
                    <div class="col p-0 --reply">
                        <btn class="btn --reply"><i class="fa-solid fa-reply"></i><span class="pl-2 pr-0">Reply</span></btn>
                    </div>
                </div>
            </div>
        `;
        mainContainer.appendChild(div);
    }
}
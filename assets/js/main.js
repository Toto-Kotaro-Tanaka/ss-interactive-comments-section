"use strict";

fetch("./data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(data);
        appendData(data);
    })
    .catch(function(err) {
        console.log("Error, no data");
    });

function appendData(data) {
    const comments = document.getElementById("comments");
    const replyOne = document.getElementById("replyOne");
    const replyTwo = document.getElementById("replyTwo");

    for (let i = 0; i < data.comments.length; i++) {
        let commentDiv = document.createElement("div");
        commentDiv.innerHTML = `
            <div class="card mt-3 mx-auto w--90">
                <div class="row">
                    <div class="col-md-1 d-none d-md-inline mt-3 pb-3">
                        <div class="ml-4 input-group">
                            <div class="input-group-btn mx-auto">
                                <button type="button" id="btn--plus" class="btn btn-default btn-number pl-0 pr-0" data-type="minus" data-field="quant[1]">
                                    <div class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></div>
                                </button>
                            </div>
                            <div>
                                <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center" value="${data.comments[i].score}" min="1" max="99">
                            </div>
                            <div class="input-group-btn mx-auto">
                                <button type="button" class="btn btn-default btn-number pl-0 pr-0" data-type="plus" data-field="quant[1]">
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
                    <div class="col m-0 --input">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number pl-2 pr-2" data-type="minus" data-field="quant[1]">
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

        comments.appendChild(commentDiv);

        if (data.comments[i].replies.length !== 0) {
            let replyDivOne = document.createElement("div");
            replyDivOne.innerHTML = `
                <div class="comment-reply">
                    <div class="card mt-3 mx-auto w--90">
                        <div class="row">
                            <div class="col-md-1 d-none d-md-inline mt-3 pb-3">
                                <div class="ml-4 input-group">
                                    <div class="input-group-btn mx-auto">
                                        <button type="button" class="btn btn-default btn-number pl-0 pr-0" data-type="minus" data-field="quant[1]">
                                            <div class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></div>
                                        </button>
                                    </div>
                                    <div>
                                        <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center" value="${data.comments[i].replies[0].score}" min="1" max="99">
                                    </div>
                                    <div class="input-group-btn mx-auto">
                                        <button type="button" class="btn btn-default btn-number pl-0 pr-0" data-type="plus" data-field="quant[1]">
                                            <div class="glyphicon glyphicon-minus"><i class="fa-solid fa-minus fa-sm"></i></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-11">
                                <div class="p-3">
                                    <img class="d-inline --avatar" src="${data.comments[i].replies[0].user.image.png}" alt="avatar">
                                    <h5 class="d-inline">${data.comments[i].replies[0].user.username}</h5>
                                    <p class="d-inline --time">${data.comments[i].replies[0].createdAt}</p>
                                    <btn class="btn d-none d-md-inline float-md-right --reply"><i class="fa-solid fa-reply"></i><span class="pl-2 pr-0">Reply</span></btn>
                                </div>
                                <div class="mb-md-3">
                                    <p class="card-text --text"><a class="font-weight-bold --at" href="#">@${data.comments[i].replies[0].replyingTo}</a> ${data.comments[i].replies[0].content}</p>
                                </div>
                            </div>
                        </div>

                        <div class="card-body row d-md-none">
                            <div class="col m-0 --input">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-number pl-2 pr-2" data-type="minus" data-field="quant[1]">
                                            <span class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></span>
                                    </button>
                                    </span>
                                    <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center num--input" value="${data.comments[i].replies[0].score}" min="1" max="99">
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
                </div>
                `;

            replyOne.appendChild(replyDivOne);

            let replyDivTwo = document.createElement("div");
            replyDivTwo.innerHTML = `
                <div class="card mt-3 mx-auto w--90">
                    <div class="row">
                        <div class="col-md-1 d-none d-md-inline mt-3 pb-3">
                            <div class="ml-4 input-group">
                                <div class="input-group-btn mx-auto">
                                    <button type="button" class="btn btn-default btn-number pl-0 pr-0" data-type="minus" data-field="quant[1]">
                                        <div class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></div>
                                    </button>
                                </div>
                                <div>
                                    <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center" value="${data.comments[i].replies[1].score}" min="1" max="99">
                                </div>
                                <div class="input-group-btn mx-auto">
                                    <button type="button" class="btn btn-default btn-number pl-0 pr-0" data-type="plus" data-field="quant[1]">
                                        <div class="glyphicon glyphicon-minus"><i class="fa-solid fa-minus fa-sm"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-11">
                            <div class="p-3">
                                <img class="d-inline --avatar" src="${data.comments[i].replies[1].user.image.png}" alt="avatar">
                                <h5 class="d-inline">${data.comments[i].replies[1].user.username}</h5>
                                <button class="btn btn--you">you</button>
                                <p class="d-inline --time">${data.comments[i].replies[1].createdAt}</p>
                                <btn type="button" class="btn --delete d-none d-md-inline float-md-right" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-solid fa-trash"></i><span class="pl-2 pr-0">Delete</span></btn>
                                <btn href="#" class="btn --edit d-none d-md-inline float-md-right"><i class="fa-solid fa-pen"></i><span class="pl-2 pr-0">Edit</span></btn>
                            </div>
                            <div class="mb-md-3">
                                <p class="card-text --text"><a class="font-weight-bold --at" href="#">@${data.comments[i].replies[1].replyingTo}</a> ${data.comments[i].replies[1].content}</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body row d-md-none">
                        <div class="col m-0 --input">
                            <div class="input-group">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-number pl-2 pr-2" data-type="minus" data-field="quant[1]">
                                        <span class="glyphicon glyphicon-plus"><i class="fa-solid fa-plus fa-sm"></i></span>
                                </button>
                                </span>
                                <input type="text" name="quant[1]" class="form-control input-number font-weight-bold text-center num--input" value="${data.comments[i].replies[1].score}" min="1" max="99">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-number pl-2 pr-2" data-type="plus" data-field="quant[1]">
                                        <span class="glyphicon glyphicon-minus"><i class="fa-solid fa-minus fa-sm"></i></span>
                                </button>
                                </span>
                            </div>
                        </div>
                        <div class="col p-0 --reply">
                            <btn type="button" class="btn pr-0 --delete" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-solid fa-trash"></i><span class="pl-2 pr-0">Delete</span></btn>
                        </div>
                        <div class="col-3 p-0 --reply">
                            <btn href="#" class="btn pl-0 --edit"><i class="fa-solid fa-pen"></i><span class="pl-2 pr-0">Edit</span></btn>
                        </div>
                    </div>
                </div>
                `;

            replyTwo.appendChild(replyDivTwo);
        }
    }
}

// Increment and decrement btns test
const incrementButton = document.getElementById("btnInc");
const decrementButton = document.getElementById("btnDec");
let input = document.getElementById("input");

function quantity(qty) {
    console.log(`clicked ${qty} button`);
    if (qty === "+" && input.value < 99) {
        input.value = parseInt(input.value) + 1;
    }
    if (qty === "-" && input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function disableIncBtn() {
    incrementButton.disabled = true;
}

function disableDecBtn() {
    decrementButton.disabled = true;
}

incrementButton.addEventListener("click", () => {
    quantity("+");
    disableIncBtn();
});

decrementButton.addEventListener("click", () => {
    quantity("-");
    disableDecBtn();
});
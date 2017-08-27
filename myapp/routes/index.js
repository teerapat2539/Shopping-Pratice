{{# if this.products }}
    <div class="row">
        <div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
            <ul class="list-group">
                {{#each products}}
                    <li class="list-group-item">
                        <span class="badge">{{this.qty}}</span>
                        <span style="font-weight: bold">{{this.item.title}}</span>
                        <span class="label label-success">${{this.price}}</span>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Action <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Reduce by 1</a></li>
                                <li><a href="#">Remove All</a></li>
                            </ul>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
            <strong>Total: {{totalPrice}}</strong>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
            <button type="button" class="btn btn-success">Checkout</button>
        </div>
    </div>
    {{ else }}
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
            <h2>No Items in Cart yet!</h2>
        </div>
    </div>
{{/if}}

// Model
const app = document.getElementById('app');

// View
updateView();
function updateView(){
    html = /*html*/ `
    <div id="flagg">
        <!-- row 1-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 2-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 3-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 4-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 5-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 6-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 7-->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <!-- row 8-->
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>

        <!-- row 9-->
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="blue"></div>

        <!-- row 10-->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <!-- row 11-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 12-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 13-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 14-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 15-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

        <!-- row 16-->
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>
        <div class="red"></div>

    </div>
    `;
    app.innerHTML = html;
}

// Controler

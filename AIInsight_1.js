console.log("AIInsights JS Loaded");

(function () {

    class AIInsights extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({ mode: "open" });

            this.shadowRoot.innerHTML =
                "<div>AI Widget Loaded</div>";
        }
    }

    customElements.define(
        "com-custom-aiinsights",
        AIInsights
    );

    console.log("Custom element registered");

})();

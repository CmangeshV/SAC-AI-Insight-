(function () {

    class AIInsights extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({ mode: "open" });

            this.shadowRoot.innerHTML = `
                <div style="
                    padding:10px;
                    font-family:Arial;
                    border:1px solid #ccc;
                ">
                    AI Insights Widget Loaded Successfully
                </div>
            `;
        }

        onCustomWidgetAfterUpdate(changedProps) {
            console.log("Widget Updated", changedProps);
        }
    }

    customElements.define(
        "com-custom-aiinsights",
        AIInsights
    );

})();

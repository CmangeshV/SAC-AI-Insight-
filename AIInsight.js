(function () {

    class AIInsights extends HTMLElement {

        constructor() {

            super();

            this.attachShadow({ mode: "open" });

            this.shadowRoot.innerHTML = `
                <style>
                    .container{
                        font-family: Arial;
                        padding:10px;
                    }

                    button{
                        padding:8px 12px;
                        cursor:pointer;
                    }

                    #output{
                        margin-top:10px;
                        border:1px solid #ccc;
                        padding:10px;
                        min-height:120px;
                        white-space:pre-wrap;
                    }
                </style>

                <div class="container">
                    <h3>AI Insights Panel</h3>

                    <button id="analyzeBtn">
                        Analyze Data
                    </button>

                    <div id="output">
                        Waiting for data...
                    </div>
                </div>
            `;

            this.chartData = [];

            this.shadowRoot
                .getElementById("analyzeBtn")
                .addEventListener(
                    "click",
                    () => this.analyzeData()
                );
        }

        onCustomWidgetAfterUpdate(changedProperties) {

            console.log(
                "Widget Update",
                changedProperties
            );

            if (
                changedProperties.dataBinding &&
                changedProperties.dataBinding.state === "success"
            ) {

                let data =
                    changedProperties.dataBinding.data;

                console.log("Data", data);

                this.chartData = data;

                this.shadowRoot
                    .getElementById("output")
                    .innerText =
                        JSON.stringify(
                            data,
                            null,
                            2
                        );
            }
        }

        analyzeData() {

            if (
                !this.chartData ||
                this.chartData.length === 0
            ) {

                this.shadowRoot
                    .getElementById("output")
                    .innerText =
                        "No data received.";

                return;
            }

            let rows =
                this.chartData.length;

            this.shadowRoot
                .getElementById("output")
                .innerHTML = `
                    <b>Sample Insight</b><br><br>
                    Total Records : ${rows}<br>
                    Data successfully received from SAC.
                `;
        }
    }

    customElements.define(
        "com-mangesh-aiinsights",
        AIInsights
    );

})();
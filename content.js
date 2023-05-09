// Check if the user is on EIOS website
if (location.href.includes('portal.who.int/eios')) {

    // Define a function to to extract the current row data 
    const extractPlainText = (element) => {
        var nodes = $(element).find("*").addBack();
        var plainText = [];

        nodes.each(function (i) {
            var nodeType = this.nodeName.toLowerCase();
            if (nodeType == "div" || nodeType == "span") {
                var text = $(this).text().trim();
                if (text !== "") {
                    plainText.push({ ["node_" + i]: text });
                }
            } else if (nodeType == "a") {
                var href = $(this).attr("href");
                var text = $(this).text().trim();
                if (text !== "") {
                    plainText.push({ ["node_" + i]: { "text": text, "href": href } });
                }
            }
        });

        return plainText;
    }

    function extractEIOSRowData() {
        const div = $(this).parents('div.pr-0').parent();
        const plainText = extractPlainText(div);
        console.log(plainText);
        const data = {
            title: $(div).find("div.item-main-row__title").text().trim(),
            url: $(div).find("div.item-main-row__links a:first").attr("href"),
            user: $("#dnn_pageHeaderFluid_user1_enhancedRegisterLink").text(),
            date: new Date().toISOString()
        }
        console.log(data);
        alert(JSON.stringify(data, null, 4))
    };

    const createDHIS2Buttons = () => {
        console.log('createDHIS2Buttons')
        let image = chrome.runtime.getURL("images/logo-dhis2.png")
        let template = `<item-export-marker class='mr-3 hir-add-to-dhis2'>
                <img src='${image}' width='77' height='26' class='d-inline-block export-marker not-marked-for-export hir-add-to-dhis2'/>
            </item-export-marker>`

        // Get the button containers on the page
        $('li div.item-main-row div.pr-0 div.d-flex:nth-child(even):not(:has(.hir-add-to-dhis2))').append(template);

        // Add an event listener to the button that will trigger the copy function
        $('img.hir-add-to-dhis2').on('click', extractEIOSRowData);
    }

    // Create the DHIS2 buttons
    setTimeout(createDHIS2Buttons, 15000);

    //window.addEventListener("DOMSubtreeModified", (event) => console.log("DOMSubtreeModified", event));

}

// Check if the user is on DHIS2
else if (location.href.includes('https://dhis2.afro-hir.net/*')) {

}






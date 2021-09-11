// ! can scrape https://www.tgju.org/archive/price_dollar_rl or any other currencies' archive on this website
pages = document.querySelector("#DataTables_Table_0_paginate > span > a:nth-child(7)").innerText - 3
a = []
ii = 31 * pages // one more than rows
jj = 31 * pages
for (i = 0; i < ii; i++) {
    for (j = 0; j < jj; j++) {
        if (!a[i]) a[i] = []
    }
}
v = 0
delayedGreeting();
copy(a)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedGreeting() {
    v = 1
    await sleep(3000);
    for (let b = 1; b <= pages; b++) {
        if (b >= 5)
            document.querySelector("#DataTables_Table_0_paginate > span > a:nth-child(5)").click()
        else
            document.querySelector("#DataTables_Table_0_paginate > span > a:nth-child(" + b + ")").click()

        console.log("page num" + b)
        z = 1
        await sleep(3000);
        for (; z <= 30; v++, z++) {

            a[v][0] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(1)").innerText
            a[v][1] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(2)").innerText
            a[v][2] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(3)").innerText
            a[v][3] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(4)").innerText
            if (document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(5)").className == 'high') {
                a[v][4] = 1
                a[v][5] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(5)").innerText
                a[v][6] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(6)").innerText
            } else {
                if (document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(5)").innerText != '-') {
                    a[v][4] = 0
                    a[v][5] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(5)").innerText
                    a[v][6] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(6)").innerText
                } else {
                    a[v][4] = 2
                    a[v][5] = '-'
                    a[v][6] = '-'
                }
            }
            a[v][7] = document.querySelector("#table-list > tr:nth-child(" + z + ") > td:nth-child(7)").innerText
            console.log("page num " + b + " element num " + z + " filling array of " + v + " | " + a[v][0])
        }

    }
    // console.log("here")
    // document.querySelector("#DataTables_Table_0_paginate > span > a:nth-child(4)").click()
}